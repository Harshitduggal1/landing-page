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
import { InfoModal } from "./Components/UI/Modals/info-modal";
export const metadata: Metadata = {
  title: "TaxPal",
  description:
    "Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={inter.style}>
        <div className="app" id="top">
          <NextUiProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <InfoModal />
          </NextUiProvider>
        </div>
      </body>
    </html>
  );
}
