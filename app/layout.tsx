import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "CryptChron",
  description: "Check your password's security strength",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  );
}
