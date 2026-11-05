
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextBites | Quick Recipes You'll Actually Cook",
  description: "Discover delicious, easy-to-follow recipes with NextBites.",
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
