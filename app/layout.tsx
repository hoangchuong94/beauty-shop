import { marcellus } from "@/app/ui/fonts";
import { Metadata } from "next";
import Providers from "./Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Acme Dashboard",
    default: "Acme Dashboard",
  },
  description: "The official Next.js Learn Dashboard built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${marcellus.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
