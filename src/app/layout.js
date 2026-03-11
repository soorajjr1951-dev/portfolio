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
  metadataBase: new URL("https://soorajdev.cloud"),

  title: {
    default: "Sooraj — Web Developer",
    template: "%s | Sooraj Dev",
  },

  description:
    "Portfolio of Sooraj, a web developer crafting modern digital experiences using Next.js, React and scalable backend technologies.",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: "Sooraj — Web Developer",
    description:
      "Portfolio of Sooraj, a web developer crafting modern digital experiences.",
    url: "https://soorajdev.cloud",
    siteName: "Sooraj Dev",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sooraj — Web Developer",
    description:
      "Portfolio of Sooraj, a web developer crafting modern digital experiences.",
  },
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