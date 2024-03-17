declare module "next-auth" {
  interface Session {
    user: UserAuth;
  }
}

export type UserAuth = {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: Date | null;
  password: string | null;
  image: string | null;
  createdAt: Date;
  updatedAt: Date;
  randomKey: string;
  roles: string[];
};

export type LatestInvoice = {
  id: string;
  name: string;
  imageUrl: string;
  email: string;
  amount: string;
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestInvoiceRaw = Omit<LatestInvoice, "amount"> & {
  amount: number;
};

export type InvoicesTable = {
  id: string;
  customerId: string;
  name: string;
  email: string;
  imageUrl: string;
  date: string;
  amount: number;
  status: "pending" | "paid";
};

export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  imageUrl: string;
  totalInvoices: number;
  totalPending: number;
  totalPaid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  imageUrl: string;
  totalInvoices: number;
  totalPending: string;
  totalPaid: string;
};

export type MyLinks = {
  name: string;
  href: string;
  icon?: React.ElementType;
};

export type Background = {
  url: string;
  type: string;
  title?: string;
  detail?: string;
  description?: string;
};
