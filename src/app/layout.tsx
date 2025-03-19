import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from './providers';
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pusula Deniz Spor Kulübü",
  description: "İzmir'de profesyonel yüzme eğitimi ve deniz sporları kulübü",
  keywords: "yüzme, deniz sporları, spor kulübü, yüzme eğitimi, profesyonel yüzme",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Providers>
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  );
}
