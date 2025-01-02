import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Providers from "./providers";
// import Header from "../../components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Robiz E-commerce Store",
  description: "Created by Usman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-myWhite`}>
        <div className="max-w-[90%] mx-auto">
          <Providers>
            {/* <Header /> */}
            <NavBar />
            {children}
            <Footer />
          </Providers>
        
        </div>
      </body>
    </html>
  );
}
