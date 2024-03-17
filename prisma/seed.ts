import { PrismaClient } from "@prisma/client";
import prisma from "@/app/lib/prisma/prisma";
import { hash } from "bcryptjs";
import {
  categories,
  customers,
  invoices,
  revenues,
  roles,
  users,
  user_role,
} from "@/app/lib/placeholder-data";

async function insertUsers() {
  for (const user of users) {
    const password = await hash(user.password, 12);
    await prisma.user.upsert({
      where: { email: user.email },
      update: {},
      create: {
        id: user.id,
        name: user.name,
        email: user.email,
        password: password,
      },
    });
  }
}

async function insertRoles() {
  for (const role of roles) {
    await prisma.role.upsert({
      where: { name: role.name },
      update: {},
      create: {
        id: role.id,
        name: role.name,
      },
    });
  }
}

async function insertUserRole() {
  for (const userRole of user_role) {
    await prisma.userRole.upsert({
      where: {
        userId_roleId: { userId: userRole.user_id, roleId: userRole.role_id },
      },
      update: {},
      create: {
        userId: userRole.user_id,
        roleId: userRole.role_id,
      },
    });
  }
}

async function insertCategories() {
  for (const category of categories) {
    await prisma.category.upsert({
      where: { name: category.name },
      update: {},
      create: {
        id: category.id,
        name: category.name,
      },
    });
  }
}

async function insertCustomers() {
  for (const customer of customers) {
    await prisma.customer.upsert({
      where: { email: customer.email },
      update: {},
      create: {
        id: customer.id,
        name: customer.name,
        email: customer.email,
        imageUrl: customer.image_url,
        userId: customer.user_id,
      },
    });
  }
}

async function insertInvoices() {
  for (const invoice of invoices) {
    await prisma.invoice.upsert({
      where: { id: invoice.id },
      update: {},
      create: {
        id: invoice.id,
        amount: invoice.amount,
        status: invoice.status,
        customerId: invoice.customer_id,
      },
    });
  }
}

async function insertRevenues() {
  for (const revenue of revenues) {
    await prisma.revenue.upsert({
      where: { id: revenue.id },
      update: {},
      create: {
        id: revenue.id,
        month: revenue.month,
        revenue: revenue.revenue,
      },
    });
  }
}

async function main() {
  await insertUsers();
  await insertRoles();
  await insertUserRole();
  await insertCategories();
  await insertCustomers();
  await insertInvoices();
  await insertRevenues();
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
