"use client";

import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
function CitySlider({ sliders }) {
  const { t } = useTranslation();
  return (
    <div
      className="om-container"
      style={{ marginTop: 60, backgroundImage: "url(/images/bg2.svg)" }}
    >
      <div className="tanger_slider">
        <div className="" style={{ flex: 1 }}>
          <h2 className="title">{t("AboutTangierTitle")}</h2>
          <p
            style={{
              fontSize: "18px",
              textAlign: "justify",
              padding: "0 20px",
            }}
          >
            {t("AboutTangierDescription")}
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          autoplay={{ delay: 7000 }}
          loop
          style={{ flex: 1 }}
          cssMode={true}
        >
          {sliders &&
            Object.values(sliders)?.map((city, i) => (
              <SwiperSlide key={i} className="thumb">
                <Image
                  src={city?.img}
                  alt="tangier city picture"
                  loading="lazy"
                  height={350}
                  width={500}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default CitySlider;
