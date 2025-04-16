import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../css/basic.css";
import "../css/layout.css";
import "../css/blogs.css";
import "../css/magnific-popup.css";
import "../css/animate.css";
import "../css/owl.carousel.css";
import "../css/gradient.css";
import "../css/owl.carousel.css";
import "../css/demos/demo-1-colors.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ryan - vCard / Resume / CV Template",
  description: "vCard & Resume Template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
