import type { Metadata } from "next";
import "./globals.css";
import { openSans } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "CipherClock",
  description: "Check your password's security strength",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans} antialiased`}>{children}</body>
    </html>
  );
}
