import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Provider from "./Provider";
import { ClerkProvider } from "@clerk/nextjs";
import {Kodchasan} from 'next/font/google'

const  kodchasan = Kodchasan({
  weight:'400',
  subsets:['thai','latin']
})

export const metadata: Metadata = {
  title: "Surawut NextJS",
  description: "NextJS 15 Workshop",
  keywords:'Surawut, Koh Larn, Thailand, Pattaya, NextJS'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>

      <html lang="en" suppressHydrationWarning>
        <body
          className={`${kodchasan.className} antialiased`}
        >
          <Provider>

            <Navbar />
            <main className="container">
              {children}
            </main>

          </Provider>

        </body>
      </html>
    </ClerkProvider>
  );
}
