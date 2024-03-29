import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import { buildClassName } from "@/utils/buildClassName";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const robotoFlex = Roboto_Flex({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'I am Jorge',
  description: 'A website dedicated to the expression of Jorge',
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
        "bg-primary-base text-text_color min-h-svh flex flex-col"
        )}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
