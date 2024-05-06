import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import dynamic from "next/dynamic";
const CarsSlider = dynamic(() => import("@/components/CarsSlider"));
const ReservationForm = dynamic(() => import("@/components/ReservationForm"));
const Footer = dynamic(() => import("@/components/Footer"));
const Service = dynamic(() => import("@/components/Services"));
const Counters = dynamic(() => import("@/components/Counters"));
const MainContent = dynamic(() => import("@/components/MainContent"));
const CitySlider = dynamic(() => import("@/components/CitySlider"));
const BrandsSlider = dynamic(() => import("@/components/BrandsSlider"));
import actions from "@/actions";
import TestimonialsSection from "@/components/TestimonialsSection";

export default async function Home() {
  const cars = await actions.getCars();
  const brands = await actions.getBrands();
  const config = await actions.getSiteConfig();
  return (
    <main>
      <div className="home-bg">
        <div className="home-flex">
          <CarsSlider cars={cars} brands={brands} />
          <ReservationForm />
        </div>
      </div>
      <div className="loading-next">
        <Counters />
        <Service />
        <BrandsSlider brands={brands} />
        <CitySlider sliders={config.sliders} />
        <MainContent sliders={config.sliders} />
        <TestimonialsSection />
        <Footer />
      </div>
      {/* Whatsapp Icon */}
      <a
        href="https://api.whatsapp.com/send?phone=+212681695340&text=Salut "
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact with Whatsapp "
        style={{
          position: "fixed",
          bottom: 10,
          height: 50,
          width: 50,
          left: 10,
          zIndex: 999,
          borderRadius: "50%",
          boxShadow: "rgba(0, 0, 0, 0.133) 0px 10px 40px",
        }}
      >
        <Image
          src="/whatsapp.svg"
          alt="whatsapp logo"
          height={50}
          width={50}
          className="cursor-pointer"
          loading="lazy"
        />
      </a>
      {/* Phone Icon */}
      <a
        href="tel:+212681695340"
        aria-label="Contact with Phone Number "
        style={{
          position: "fixed",
          bottom: 70,
          height: 50,
          width: 50,
          left: 10,
          zIndex: 999,
          borderRadius: "50%",
          boxShadow: "rgba(0, 0, 0, 0.133) 0px 10px 40px",
        }}
      >
        <span className="cursor-pointer phone">
          <FaPhoneAlt />
        </span>
      </a>
    </main>
  );
}
