import type { Metadata } from "next";
import { Inter } from "next/font/google";

import childrenType from "@/types/children";

import "../../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Najot e-commerce",
  description: "E-commerce website forever",
  icons: {
    icon: "https://cdn-icons-png.flaticon.com/128/2821/2821872.png",
  },
};

export default function RootLayout({ children }: childrenType) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
