import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Load Geist Variable Font
const geist = localFont({
  src: [
    {
      path: "../app/fonts/GeistVF.woff",
      weight: "300 700",
      style: "normal",
    },
  ],
  variable: "--font-geist",
  display: "swap",
});

// Load Geist Mono Variable Font
const geistMono = localFont({
  src: [
    {
      path: "../app/fonts/GeistMonoVF.woff",
      weight: "300 700",
      style: "normal",
    },
  ],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Registration Form",
  description: "A modern registration form built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
