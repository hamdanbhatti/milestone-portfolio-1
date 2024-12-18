import type { Metadata } from "next";
import localFont from "next/font/local";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Navbar from "./components/header";

const geistSans = localFont({
   src: "./fonts/GeistVF.woff",
   variable: "--font-geist-sans",
   weight: "100 900",
});
const geistMono = localFont({
   src: "./fonts/GeistMonoVF.woff",
   variable: "--font-geist-mono",
   weight: "100 900",
});

const ubuntu = Ubuntu({
   subsets: ["latin"],
   display: "swap",
   weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
   title: "Portfolio",
   description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
         <body className={ubuntu.className}>
            <main className="">
               <Navbar />
               {children}
               <Footer />
            </main>
         </body>
      </html>
   );
}
