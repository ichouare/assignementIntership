import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import Navbar from '@/app/ui/Navbar';
import Banner from '@/app/ui/Banner';

import "./globals.css";
import Footer from "./ui/Footer";


const Font = Poppins({
  weight : ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Blog app",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Font.className} w-full min-h-screen   antialiased grid  grid-col-1 px-2 place-items-center`}
      >
        
        <main className="md:max-w-[800px] w-full max-w-full min-h-screen flex flex-col  items-center   gap-8">
        <Navbar />
        <Banner />
        {children}
        <Footer/>

        </main>
      </body>
    </html>
  );
}
