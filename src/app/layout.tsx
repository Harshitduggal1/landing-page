import type { Metadata } from "next";
// Styles
import "./Styles/globals.scss";
// Components
import { Header } from "./Components/Header/header";
import { Footer } from "./Components/Footer/footer";
// Font
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
import { NextUiProvider } from "@/providers/NextUiProvider";
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
      <body style={inter.style}>
        <div id="app" name="top">
          <NextUiProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </NextUiProvider>
        </div>
      </body>
    </html>
  );
}
