import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const yearString = new Date().getFullYear().toString();

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "EAK",
  description: "For CPEN208 Lab",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {children}
        <footer className="bg-black text-center text-white p-4">
          © {yearString}
        </footer>
      </body>
    </html>
  );
}
