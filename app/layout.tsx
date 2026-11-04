import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextBites",
  description: "Discover your next favourite recipe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <nav aria-label="Main navigation">
  <a href="/" className="logo">
    🍴 NextBites
  </a>
</nav>
        {children}
      </body>
    </html>
  );
}