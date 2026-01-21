import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";



export const metadata = {
  title: "Afaq Technologies",
  description: "Software Development Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
