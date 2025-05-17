import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type {Viewport} from "next";
import "./globals.css";
import { InviteProvider } from "./context/InviteContext";

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
  themeColor: "black"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-Mx">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <InviteProvider>
          {children}
        </InviteProvider>
      </body>
    </html>
  );
}
