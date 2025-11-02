import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agentic App",
  description: "Deployed to Vercel",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="container">
          {children}
        </main>
        <footer className="footer">Built with Next.js 14 ? Deployed to Vercel</footer>
      </body>
    </html>
  );
}
