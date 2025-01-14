import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import Modal from "@/app/03-approach/modal";
import Modals from "@/app/04-approach/modals";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          inter.className,
        )}
      >
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
          {children}
          <Modal />
          <Modals />
        </main>
      </body>
    </html>
  );
}
