"use client";

import React from "react";
import { Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";
import Image from "next/image";

function MainContent() {
  const { t } = useTranslation();
  return (
    <div className="content">
      <div className="content-columns om-container">
        <div className="content-columns__content">
          <div className="content-columns__content-inner">
            <article style={{ overflow: "hidden" }}>
              <div
                className="post-9 page type-page status-publish hentry"
                id="post-9"
              >
                <div
                  className="om-container"
                  style={{
                    marginTop: 30,
                    backgroundImage: "url(/images/bg2.svg)",
                  }}
                >
                  <div
                    id="about"
                    className="tanger_slider"
                    style={{ flexDirection: "row", alignItems: "center" }}
                  >
                    <div className="" style={{ flex: 1 }}>
                      <h2 className="title">
                        {t("AboutCarRentalAgencyTitle")}
                      </h2>
                      <p
                        style={{
                          fontSize: "18px",
                          textAlign: "justify",
                          padding: "0 20px",
                        }}
                      >
                        {t("AboutCarRentalAgencyDescription")}
                      </p>
                    </div>

                    <Swiper
                      modules={[Pagination, Autoplay]}
                      slidesPerView={1}
                      autoplay={{ delay: 6000 }}
                      loop
                      style={{ flex: 1 }}
                      cssMode={true}
                    >
                      {[1, 2, 3, 4].map((item, i) => (
                        <SwiperSlide key={i} className="thumb">
                          <Image
                            src={`/images/image${item}.jpeg`}
                            alt="Rental agency clients"
                            loading="lazy"
                            height={350}
                            width={500}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
                <div style={{ textAlign: "center", padding: "20px 0" }}>
                  <iframe
                    id="locations"
                    className="om-rental-locations__map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12947.202982191893!2d-5.8113449!3d35.7802706!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0c7f547e4e3c9f%3A0x8b275e8cadc259b6!2sNord%20Promo%20Car!5e0!3m2!1sfr!2sma!4v1685481656302!5m2!1sfr!2sma"
                    width="80%"
                    height={550}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Nord Promo Car Maps Location"
                  />
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
