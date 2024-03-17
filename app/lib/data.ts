import prisma from "@/app/lib/prisma/prisma";
import { formatCurrency } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

// export async function filter(query: string) {
//   try {
//     if (query.length > 0) {
//       const count = await prisma.invoice.count({
//         where: {
//           amount: { gte: 89.45 },
//         },
//       });
//       const total = Math.ceil(Number(count));
//       return total;
//     }
//     return 0;
//   } catch (error) {
//     console.error("Prisma Error:", error);
//     throw new Error("Failed to fetch filter query data.");
//   } finally {
//     await prisma.$disconnect();
//   }
// }

export async function fetchCategories() {
  noStore();
  try {
    const categories = await prisma.category.findMany();
    return categories;
  } catch (error) {
    console.error("Prisma Error:", error);
    throw new Error("Failed to fetch categories data.");
  } finally {
    await prisma.$disconnect();
  }
}

export async function fetchRevenue() {
  noStore();
  try {
    const revenues = await prisma.revenue.findMany({
      orderBy: {
        id: "asc",
      },
    });
    return revenues;
  } catch (error) {
    console.error("Prisma Error:", error);
    throw new Error("Failed to fetch revenues data.");
  } finally {
    await prisma.$disconnect();
  }
}

export async function fetchLatestInvoices() {
  try {
    const latestInvoices = await prisma.invoice.findMany({
      select: {
        id: true,
        amount: true,
        createdAt: true,
        customer: {
          select: {
            name: true,
            imageUrl: true,
            email: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 5,
    });

    return latestInvoices.map((invoice) => ({
      ...invoice,
      amount: formatCurrency(invoice.amount),
    }));
  } catch (error) {
    console.error("Prisma Error:", error);
    throw new Error("Failed to fetch the latest invoices.");
  } finally {
    await prisma.$disconnect();
  }
}

export async function fetchCardData() {
  noStore();
  try {
    const invoiceCount = await prisma.invoice.count();
    const customerCount = await prisma.customer.count();
    const invoiceCountPaid = await prisma.invoice.aggregate({
      _sum: {
        amount: true,
      },
      where: {
        status: "paid",
      },
    });
    const invoiceCountPending = await prisma.invoice.aggregate({
      _sum: {
        amount: true,
      },
      where: {
        status: "pending",
      },
    });

    const [
      numberOfInvoices,
      numberOfCustomers,
      totalPaidInvoices,
      totalPendingInvoices,
    ] = await Promise.all([
      invoiceCount,
      customerCount,
      invoiceCountPaid?._sum?.amount || 0,
      invoiceCountPending?._sum?.amount || 0,
    ]);

    return {
      numberOfCustomers,
      numberOfInvoices,
      totalPaidInvoices: formatCurrency(totalPaidInvoices),
      totalPendingInvoices: formatCurrency(totalPendingInvoices),
    };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch card data.");
  } finally {
    await prisma.$disconnect();
  }
}

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredInvoices(
  query: string,
  currentPage: number
) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const result = await prisma.invoice.findMany({
      select: {
        id: true,
        amount: true,
        createdAt: true,
        status: true,
        customer: {
          select: {
            name: true,
            email: true,
            imageUrl: true,
          },
        },
      },
      where: {
        OR: [
          { customer: { name: { contains: query, mode: "insensitive" } } },
          { customer: { email: { contains: query, mode: "insensitive" } } },
          { status: { contains: query, mode: "insensitive" } },
        ],
      },
      orderBy: { createdAt: "desc" },
      take: ITEMS_PER_PAGE,
      skip: offset,
    });

    return result;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch filtered invoices");
  } finally {
    await prisma.$disconnect();
  }
}

export async function fetchInvoicesPages(query: string) {
  noStore();
  try {
    const count = await prisma.invoice.count({
      where: {
        OR: [
          { customer: { name: { contains: query, mode: "insensitive" } } },
          { customer: { email: { contains: query, mode: "insensitive" } } },
          { status: { contains: query, mode: "insensitive" } },
        ],
      },
    });

    const totalPages = Math.ceil(Number(count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of invoices.");
  } finally {
    await prisma.$disconnect();
  }
}

export async function fetchInvoiceById(id: string) {
  noStore();
  try {
    const invoice = await prisma.invoice.findUnique({
      select: {
        id: true,
        customerId: true,
        amount: true,
        status: true,
      },
      where: {
        id: id,
      },
    });

    if (invoice) {
      invoice.amount /= 100;
    }
    return invoice;
  } catch (error) {
    console.error("Prisma Error:", error);
    throw new Error("Failed to fetch invoice.");
  } finally {
    await prisma.$disconnect();
  }
}

export async function fetchCustomers() {
  noStore();
  try {
    const customers = await prisma.customer.findMany({
      select: {
        id: true,
        name: true,
      },
      orderBy: {
        name: "asc",
      },
    });

    return customers;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch all customers.");
  } finally {
    await prisma.$disconnect();
  }
}

export async function fetchFilteredCustomers(query: string) {
  noStore();
  try {
    const customers = await prisma.customer.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: "insensitive" } },
          { email: { contains: query, mode: "insensitive" } },
        ],
      },
      include: {
        invoices: {
          select: {
            amount: true,
            status: true,
          },
        },
      },
      orderBy: {
        name: "asc",
      },
    });

    const formattedCustomers = customers.map((customer) => ({
      id: customer.id,
      name: customer.name,
      email: customer.email,
      image_url: customer.imageUrl,
      total_invoices: customer.invoices.length,
      total_pending: formatCurrency(
        customer.invoices
          .filter((invoice) => invoice.status === "pending")
          .reduce((sum, invoice) => sum + invoice.amount, 0)
      ),
      total_paid: formatCurrency(
        customer.invoices
          .filter((invoice) => invoice.status === "paid")
          .reduce((sum, invoice) => sum + invoice.amount, 0)
      ),
    }));

    return formattedCustomers;
  } catch (err) {
    console.error("Prisma Error:", err);
    throw new Error("Failed to fetch customer table.");
  } finally {
    await prisma.$disconnect();
  }
}

export async function getUser(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    return user;
  } catch (error) {
    console.error("Prisma Error:", error);
    throw new Error("Failed to fetch user.");
  } finally {
    await prisma.$disconnect();
  }
}
