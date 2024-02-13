import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Components/Navbar";
import { AOSInit } from './aos'
import Footer from "./Components/Footer";


export const metadata: Metadata = {
  title: "MiddleMan Branding - Impulsa tu éxito en el mundo digital",
  description: "MiddleMan Branding es una agencia de marketing digital líder que se especializa en potenciar tanto a creadores de contenido como a marcas. Impulsa tu éxito en línea con nuestras estrategias innovadoras y colaborativas.",
  keywords: "marketing digital, branding, creadores de contenido, estrategias digitales, agencia de marketing",
  category: "Marketing",
  openGraph: {
    url: "https://middleman-branding.vercel.app",
    title: "MiddleMan Branding - Impulsa tu éxito en el mundo digital",
    description: "MiddleMan Branding es una agencia de marketing digital líder que se especializa en potenciar tanto a creadores de contenido como a marcas. Impulsa tu éxito en línea con nuestras estrategias innovadoras y colaborativas.",
    images: [
      {
        url: "./opengraph.png",
        width: 1200,
        height: 630,
        alt: "MiddleMan Branding Logo",
      },
    ]
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AOSInit />
      <body className="font-lato">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
