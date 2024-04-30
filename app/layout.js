import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import "@/styles/styles.css";
import "@/styles/style.css";
import "@/styles/responsive-mobile.css";
import "@/styles/omFont.css";
import "@/styles/css.css";
import "@/styles/css_2.css";
import "@/styles/css_1.css";
import "@/styles/style-custom.css";

import Navbar from "@/components/NavBar";
import Splash from "@/components/splash";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://www.rentnord.com/"),
  alternates: {
    canonical: "/",
  },
  title: "location de voiture Tanger | Appelez-nous au 0681 69 53 40",
  description:
    "Nord Promo Car propose des services de location de voiture à Tanger pour répondre à tous vos besoins de déplacement. Profitez d'une sélection variée de véhicules, allant des voitures compactes aux SUV spacieux. Nous offrons des tarifs compétitifs et un service client de qualité. Réservez votre location de voiture à Tanger dès aujourd'hui avec Nord Promo Car pour une expérience fluide et agréable.",
  keywords: [
    "location de voiture tanger",
    "location voiture tanger",
    "location de voiture à tanger",
    "tanger location voiture",
    "voiture de location tanger",
    "location des voitures tanger",
    "tanger location de voiture",
    "location tanger voiture",
    "location voiture tanger aéroport",
    "location de voitures Tetoun aéroport",
    "location de voitures Tetoun",
  ],
  openGraph: {
    title: "location de voiture Tanger | Appelez-nous au 0681 69 53 40",
    description:
      "Nord Promo Car propose des services de location de voiture à Tanger pour répondre à tous vos besoins de déplacement. Profitez d'une sélection variée de véhicules, allant des voitures compactes aux SUV spacieux. Nous offrons des tarifs compétitifs et un service client de qualité. Réservez votre location de voiture à Tanger dès aujourd'hui avec Nord Promo Car pour une expérience fluide et agréable.",
    url: "https://www.rentnord.com/",
    images: "/opengraph-image.png",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Splash />
        <Toaster position="top-right" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
