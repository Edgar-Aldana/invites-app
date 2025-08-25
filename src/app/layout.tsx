import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { Viewport } from "next";
import "./globals.css";
import { InviteProvider } from "./context/InviteContext";
import { AdminProvider } from "./context/adminContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nuestra boda - A&E",
  description: "Pagina de nuestro evento",
};

export const viewport: Viewport = {
  themeColor: "#ce4676"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-Mx">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap" rel="stylesheet" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <AdminProvider>

          <InviteProvider>
            {children}
          </InviteProvider>

        </AdminProvider>



      </body>
    </html>
  );
}
