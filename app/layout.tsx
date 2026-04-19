import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import CosmosCanvas from "@/components/CosmosCanvas";
import Cursor from "@/components/Cursor";

export const metadata: Metadata = {
  title: "Kala Darshan by TAI Analytics — Vision of Cosmic Time",
  description: "A complete encyclopedia of Jyotish and Vedic cosmology by TAI Analytics. Grahas, Nakshatras, Yogas, Dashas, Lokas, Karma, Kala — the deepest knowledge of the Vedic tradition.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Cinzel:wght@400;600;700&family=Cinzel+Decorative:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Cursor />
        <CosmosCanvas />
        <Nav />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
