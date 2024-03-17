import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import React from "react";

const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  console.log("provider");
  return (
    <SessionProvider>
      <Toaster position="top-right" reverseOrder />
      {children}
    </SessionProvider>
  );
};

export default Providers;
