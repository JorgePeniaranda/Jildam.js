/* Styles */
import "./globals.scss";

/* Components */
import { Navbar, Footer } from "@/Components";

/* Fonts */
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jildam",
  description: "Password manager and generator web aplication",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
