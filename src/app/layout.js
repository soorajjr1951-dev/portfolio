import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TransitionProvider } from "@/context/TransitionContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sooraj | Web Developer",
  description: "Portfolio of Sooraj — Web Development & Engineering",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#26283B]`}
      >
        <TransitionProvider>
          {children}

          <footer className="py-16 pb-36 text-center border-t border-[#ffef4d]/20">
            <p className="text-[#ffef4d]/50 text-sm tracking-widest uppercase">
              © 2026 Sooraj — Web Development
            </p>
          </footer>
        </TransitionProvider>
      </body>
    </html>
  );
}
