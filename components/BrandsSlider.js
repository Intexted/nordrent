"use client";

import Image from "next/image";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function BrandsSlider({ brands }) {
  return (
    <div className="brands_slider">
      <div className="om-container">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={"auto"}
          spaceBetween={30}
          cssMode={true}
          loop
          centeredSlides
          autoplay={{ delay: 6000 }}
        >
          {brands &&
            Object.values(brands)?.map((brand, i) => (
              <SwiperSlide key={i} style={{ width: 200 }}>
                <Image
                  width={220}
                  height={220}
                  src={brand?.image}
                  alt="logo brand"
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default BrandsSlider;
