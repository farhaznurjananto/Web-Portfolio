import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Farhaz Nurjananto | Portfolio",
  description: "Website Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
