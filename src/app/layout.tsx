// src/app/layout.tsx

import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "My Next.js App",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
