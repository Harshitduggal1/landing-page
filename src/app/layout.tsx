import type { Metadata } from "next";
// Styles
import "./Styles/globals.scss";
// Components
import { Header } from "./Components/Header/header";
import { Footer } from "./Components/Footer/footer";
// Font
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TaxPal",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
