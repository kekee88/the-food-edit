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
        <nav>
          <h2>🍴 NextBites</h2>
        </nav>
        {children}
      </body>
    </html>
  );
}