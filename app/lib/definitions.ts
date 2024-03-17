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

export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Categories = {
  id: string;
  name: string;
};

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  status: "pending" | "paid";
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

export type LatestInvoiceRaw = Omit<LatestInvoice, "amount"> & {
  amount: number;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: "pending" | "paid";
};

export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  customerId: string;
  amount: number;
  status: string;
};

export type MyLinks = {
  name: string;
  href: string;
  icon?: React.ElementType;
};

export type BackgroundProps = {
  url: string;
  type: string;
  title?: string;
  detail?: string;
  description?: string;
};
