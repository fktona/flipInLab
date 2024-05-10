import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MenuProvider from "./context/menuContext";
import ScrollProvider from "./context/scroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Flipping Labs",
  description: "Flipping Labs is a community-driven  project that creates art.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
      <meta name="google-site-verification" content="bni2jw7MZ2tfOGbq5X3-DvSa7YNaTQlPnNVwjUMZpOM" />
      <body className={inter.className}>
       <ScrollProvider><MenuProvider>{children}</MenuProvider></ScrollProvider>
       </body>
    </html>
  );
}
