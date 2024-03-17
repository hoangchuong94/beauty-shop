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
  imageUrl: string;
};

export type Category = {
  id: string;
  name: string;
};

export type Invoice = {
  id: string;
  customerId: string;
  amount: number;
  createdAt: string;
  status: string;
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestInvoice = {
  id: string;
  name: string;
  imageUrl: string;
  email: string;
  amount: string;
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
  createdAt: string;
  amount: number;
  status: string;
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

export type Background = {
  url: string;
  type: string;
  title?: string;
  detail?: string;
  description?: string;
};
