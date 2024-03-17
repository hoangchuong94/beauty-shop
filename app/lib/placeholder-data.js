export const users = [
  {
    id: "1",
    name: "manager",
    email: "manager@gmail.com",
    password: "123Hvc!",
  },
  {
    id: "2",
    name: "admin",
    email: "admin@gmail.com",
    password: "123Hvc!",
  },
  {
    id: "3",
    name: "user1",
    email: "user@gmail.com",
    password: "123Hvc!",
  },
  {
    id: "4",
    name: "user2",
    email: "user2@gmail.com",
    password: "123Hvc!",
  },
  {
    id: "5",
    name: "user3",
    email: "user3@gmail.com",
    password: "123Hvc!",
  },
  {
    id: "6",
    name: "user4",
    email: "user4@gmail.com",
    password: "123Hvc!",
  },
  {
    id: "7",
    name: "user5",
    email: "user5@gmail.com",
    password: "123Hvc!",
  },
];

export const roles = [
  {
    id: "1",
    name: "manager",
  },
  {
    id: "2",
    name: "admin",
  },
  {
    id: "3",
    name: "user",
  },
];

export const user_role = [
  {
    user_id: users[0].id,
    role_id: roles[0].id,
  },
  {
    user_id: users[0].id,
    role_id: roles[1].id,
  },
  {
    user_id: users[0].id,
    role_id: roles[2].id,
  },
  {
    user_id: users[1].id,
    role_id: roles[1].id,
  },
  {
    user_id: users[1].id,
    role_id: roles[2].id,
  },
  {
    user_id: users[2].id,
    role_id: roles[2].id,
  },
  {
    user_id: users[3].id,
    role_id: roles[2].id,
  },
  {
    user_id: users[4].id,
    role_id: roles[2].id,
  },
  {
    user_id: users[5].id,
    role_id: roles[2].id,
  },
  {
    user_id: users[6].id,
    role_id: roles[2].id,
  },
];

export const categories = [
  {
    id: "1",
    name: "shop all",
  },
  {
    id: "2",
    name: "makeup",
  },
  {
    id: "3",
    name: "skin care",
  },
  {
    id: "4",
    name: "hair care",
  },
];

export const customers = [
  {
    id: "1",
    name: "Delba de Oliveira",
    email: "delba@oliveira.com",
    image_url: "/customers/delba-de-oliveira.png",
    user_id: users[2].id,
  },
  {
    id: "2",
    name: "Lee Robinson",
    email: "lee@robinson.com",
    image_url: "/customers/lee-robinson.png",
    user_id: users[2].id,
  },
  {
    id: "3",
    name: "Hector Simpson",
    email: "hector@simpson.com",
    image_url: "/customers/hector-simpson.png",
    user_id: users[3].id,
  },
  {
    id: "4",
    name: "Steven Tey",
    email: "steven@tey.com",
    image_url: "/customers/steven-tey.png",
    user_id: users[3].id,
  },
  {
    id: "5",
    name: "Steph Dietz",
    email: "steph@dietz.com",
    image_url: "/customers/steph-dietz.png",
    user_id: users[4].id,
  },
  {
    id: "6",
    name: "Michael Novotny",
    email: "michael@novotny.com",
    image_url: "/customers/michael-novotny.png",
    user_id: users[4].id,
  },
  {
    id: "7",
    name: "Evil Rabbit",
    email: "evil@rabbit.com",
    image_url: "/customers/evil-rabbit.png",
    user_id: users[5].id,
  },
  {
    id: "8",
    name: "Emil Kowalski",
    email: "emil@kowalski.com",
    image_url: "/customers/emil-kowalski.png",
    user_id: users[5].id,
  },
  {
    id: "9",
    name: "Amy Burns",
    email: "amy@burns.com",
    image_url: "/customers/amy-burns.png",
    user_id: users[6].id,
  },
  {
    id: "10",
    name: "Balazs Orban",
    email: "balazs@orban.com",
    image_url: "/customers/balazs-orban.png",
    user_id: users[6].id,
  },
];

export const invoices = [
  {
    id: "1",
    customer_id: customers[0].id,
    amount: 15795,
    status: "pending",
    date: "2022-12-06",
  },
  {
    id: "2",
    customer_id: customers[1].id,
    amount: 20348,
    status: "pending",
    date: "2022-11-14",
  },
  {
    id: "3",
    customer_id: customers[4].id,
    amount: 3040,
    status: "paid",
    date: "2022-10-29",
  },
  {
    id: "4",
    customer_id: customers[3].id,
    amount: 44800,
    status: "paid",
    date: "2023-09-10",
  },
  {
    id: "5",
    customer_id: customers[5].id,
    amount: 34577,
    status: "pending",
    date: "2023-08-05",
  },
  {
    id: "6",
    customer_id: customers[7].id,
    amount: 54246,
    status: "pending",
    date: "2023-07-16",
  },
  {
    id: "7",
    customer_id: customers[6].id,
    amount: 666,
    status: "pending",
    date: "2023-06-27",
  },
  {
    id: "8",
    customer_id: customers[3].id,
    amount: 32545,
    status: "paid",
    date: "2023-06-09",
  },
  {
    id: "9",
    customer_id: customers[4].id,
    amount: 1250,
    status: "paid",
    date: "2023-06-17",
  },
  {
    id: "10",
    customer_id: customers[5].id,
    amount: 8546,
    status: "paid",
    date: "2023-06-07",
  },
  {
    id: "11",
    customer_id: customers[1].id,
    amount: 500,
    status: "paid",
    date: "2023-08-19",
  },
  {
    id: "12",
    customer_id: customers[5].id,
    amount: 8945,
    status: "paid",
    date: "2023-06-03",
  },
  {
    id: "13",
    customer_id: customers[2].id,
    amount: 8945,
    status: "paid",
    date: "2023-06-18",
  },
  {
    id: "14",
    customer_id: customers[0].id,
    amount: 8945,
    status: "paid",
    date: "2023-10-04",
  },
  {
    id: "15",
    customer_id: customers[2].id,
    amount: 1000,
    status: "paid",
    date: "2022-06-05",
  },
];

export const revenues = [
  { id: 1, month: "Jan", revenue: 2000 },
  { id: 2, month: "Feb", revenue: 1800 },
  { id: 3, month: "Mar", revenue: 2200 },
  { id: 4, month: "Apr", revenue: 2500 },
  { id: 5, month: "May", revenue: 2300 },
  { id: 6, month: "Jun", revenue: 3200 },
  { id: 7, month: "Jul", revenue: 3500 },
  { id: 8, month: "Aug", revenue: 3700 },
  { id: 9, month: "Sep", revenue: 2500 },
  { id: 10, month: "Oct", revenue: 2800 },
  { id: 11, month: "Nov", revenue: 3000 },
  { id: 12, month: "Dec", revenue: 4800 },
];
