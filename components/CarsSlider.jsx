"use client";
import React, { useState } from "react";
import { Navigation, Autoplay, EffectFade } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import CarsSliderCard2 from "./Carslider/CarSliderCard2";

function CarsSlider({ cars, brands }) {
  const [Max, setMax] = useState(3);

  return (
    <div className="cars-slider" id="cars-slider">
      <div className="car-slider__title-wrapper om-container">
        <div className="om-container__inner">
          {/* <h2 className='cars-slider__title'>Modèles de véhicules</h2>
          <div className='h-subtitle cars-slider__subtitle'>
            Réservez maintenant et obtenez la meilleure offre
          </div> */}

          {/* <h2>Réservez maintenant !</h2> */}
        </div>
      </div>

      <div className="cars-slider__inner" id="myslider">
        <Swiper
          modules={[Navigation, Autoplay, EffectFade]}
          spaceBetween={50}
          slidesPerView={1}
          effect={"fade"}
          onSlideChange={(i) => {
            if (Max <= i?.activeIndex + 2) setMax(i?.activeIndex + 2);
          }}
          autoplay={{ delay: 5000 }}
          navigation={{
            nextEl: ".next-2",
            prevEl: ".prev-2",
          }}
        >
          {cars?.slice(0, Max).map((car, i) => (
            <SwiperSlide key={i} className="cars-slider__item active">
              <CarsSliderCard2 i={i} {...{ car, brands }} />
            </SwiperSlide>
          ))}

          <div className="owl-controls">
            <div className="owl-nav">
              <div
                className="owl-prev prev-2"
                style={{ zIndex: "10", cursor: "pointer" }}
              />
              <div
                className="owl-next next-2"
                style={{ zIndex: "10", cursor: "pointer" }}
              />
            </div>
          </div>
        </Swiper>
        <div className="owl-dots">
          <div className="owl-dot active">
            <span></span>
          </div>
          <div className="owl-dot">
            <span></span>
          </div>
          <div className="owl-dot">
            <span></span>
          </div>
          <div className="owl-dot">
            <span></span>
          </div>
          <div className="owl-dot">
            <span></span>
          </div>
          <div className="owl-dot">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarsSlider;
