import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import { buildClassName } from "@/utils/buildClassName";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const robotoFlex = Roboto_Flex({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Jorge Aranda',
  description: 'Personal Website for Jorge Aranda',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={buildClassName(
        robotoFlex.className, 
        "bg-primary-base"
        )}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
