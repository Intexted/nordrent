"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import useOrder from "../hooks/useOrder";
import Image from "next/image";
import { useCallback } from "react";
import "@/styles/CarsSlider2.css";

function CarsSliderCard2({ car, brands }) {
  const { t } = useTranslation();
  const router = useRouter();
  const baseUrl = "/checkout";
  const searchParams = useSearchParams();
  const createQueryString = useCallback(
    (name, value) => {
      let DValues = {
        age: 23,
        startLocation: "",
        endLocation: "",
        startTime: "",
        endTime: "",
      };
      for (const [key, value] of searchParams.entries()) {
        DValues[key] = value;
      }
      if (DValues?.startDate) DValues.startDate = new Date(DValues?.startDate);
      if (DValues?.endDate) DValues.endDate = new Date(DValues?.endDate);
      DValues["car"] = car._id;
      return DValues;
    },
    [searchParams, car._id]
  );
  let DValues = createQueryString();
  const { price, total, days } = useOrder({ car, DValues });
  const queryString = new URLSearchParams(DValues).toString();

  // Construct the full URL with the basepathname URL, query string, and fragment
  const fullUrl = `${baseUrl}?${queryString}`;

  return (
    <div className="product-slide w-slide" style={{ flex: 1 }}>
      <div className="product-wrap">
        <div className="product-card">
          <div
            className="title-wrap"
            style={{
              opacity: 1,
            }}
          >
            <Image
              src={brands[car?.store]?.image}
              width={80}
              height={80}
              alt="brand logo"
              className="product-logo"
              loading="eager"
              priority
            />
            <h2 className="product-name">{car?.name}</h2>
          </div>
          <div className="product-base">
            <Image
              src={car?.image1}
              width={480}
              height={450}
              className="product-image"
              loading="eager"
              alt="car"
              priority
            />
          </div>

          <div className="content-wrap">
            <div className="feature-column">
              <div className="cars-slider__item-option car-option-luggage">
                <span className="cars-slider__item-option-label">
                  {t("fuelType")}:{" "}
                </span>
                <span className="cars-slider__item-option-value">
                  {car?.carburation}
                </span>
              </div>
              <div className="cars-slider__item-option car-option-transmission">
                <span className="cars-slider__item-option-label">
                  {t("transmission")}:{" "}
                </span>
                <span className="cars-slider__item-option-value">
                  {car?.TRANSMISSION === "MANUAL"
                    ? t("manual")
                    : t("automatic")}
                </span>
              </div>
            </div>
            <div className="feature-column">
              <div className="cars-slider__item-option car-option-doors">
                <span className="cars-slider__item-option-label">
                  {t("doors")}:{" "}
                </span>
                <span className="cars-slider__item-option-value">
                  {car?.DOORS}
                </span>
              </div>
              <div className="cars-slider__item-option car-option-passengers">
                <span className="cars-slider__item-option-label">
                  {t("passengers")}:{" "}
                </span>
                <span className="cars-slider__item-option-value">
                  {car?.PASSENGERS}
                </span>
              </div>
            </div>
          </div>
          {car?.DISPONIBLE === "no" ? (
            <div className="price-block notavailable">
              <Image
                src="/images/notavailable.svg"
                alt=""
                height={220}
                width={220}
              />
            </div>
          ) : (
            <>
              <div className="price-block">
                <div className="price-day">
                  <span
                    style={{ color: "#888", fontSize: "16px", fontWeight: 600 }}
                  >
                    Total:{"  "}
                  </span>
                  {(days || 1) * price} DH
                </div>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "12px",
                    marginTop: -10,
                    color: "#888",
                  }}
                >
                  {/* <span style={{ color: '#888', paddingRight: 5 }}>Totale:</span>{' '} */}
                  {price} <span className="unity">DH/ {t("day")}</span>
                </div>
                {car?.franchise && (
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: "12px",
                      // marginTop: ,
                      color: "#888",
                    }}
                  >
                    {/* <span style={{ color: '#888', paddingRight: 5 }}>Totale:</span>{' '} */}
                    {t("Franchise")} :{" "}
                    <span className="unity">{car?.franchise} DH</span>
                  </div>
                )}
              </div>
              <div
                className="content-wrap"
                style={{
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  opacity: 1,
                }}
              >
                {total > 0 && (
                  <div
                    className="button-block"
                    onClick={() => {
                      router.push(fullUrl);
                    }}
                  >
                    <a href="#" className="button w-inline-block">
                      <div>{t("pay")}</div>
                    </a>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CarsSliderCard2;
