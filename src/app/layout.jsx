import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/sections/Footer";
import toast, { Toaster } from 'react-hot-toast';
import DisableRightClick from "@/components/sections/DisableRightClick";


export const metadata = {
  title: "Afaq Technologies",
  description: "Software Development Agency",
  icons: {
    icon: "/images/logo.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className="min-h-screen bg-background text-foreground antialiased ">
      <DisableRightClick/>
       <Navbar />
        {children}
        <Footer/>
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
