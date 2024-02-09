import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Components/Navbar";
import { AOSInit } from './aos'


export const metadata: Metadata = {
  title: "MiddleMan Branding - Impulsa tu éxito en el mundo digital",
  description: "MiddleMan Branding es una agencia de marketing digital líder que se especializa en potenciar tanto a creadores de contenido como a marcas. Impulsa tu éxito en línea con nuestras estrategias innovadoras y colaborativas.",
  keywords: "marketing digital, branding, creadores de contenido, estrategias digitales, agencia de marketing",
  twitter: {
    site: "@middlemanbranding",
    card: "summary_large_image",
    description: "MiddleMan Branding es una agencia de marketing digital líder que se especializa en potenciar tanto a creadores de contenido como a marcas. Impulsa tu éxito en línea con nuestras estrategias innovadoras y colaborativas.",
    title: "MiddleMan Branding - Impulsa tu éxito en el mundo digital",
    images: [
      {
        url: "./public/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "MiddleMan Branding - Impulsa tu éxito en el mundo digital",
      },
    ]
  },
  category: "Marketing",
}


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
      </body>
    </html>
  );
}
