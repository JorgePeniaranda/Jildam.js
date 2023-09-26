/* Styles */
import "./globals.scss";
import "@/styles/preflight.css";

/* Components */
import { Navbar, Footer } from "@/Components";

/* Fonts */
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jildam",
  description: "Password manager and generator web aplication",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
