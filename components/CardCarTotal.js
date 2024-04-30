"use client";
import { useTranslation } from "react-i18next";
import useOrder from "./hooks/useOrder";
import Image from "next/image";

function CardCarTotal({ car, brands, DValues }) {
  const { t } = useTranslation();

  const { price, total, franchise } = useOrder({ car, DValues });
  return (
    <div className="product-slide w-slide" aria-label="3 of 3" role="group">
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
            />
          </div>

          <div className="price-block">
            <div className="price-day">
              <span
                style={{ color: "#888", fontSize: "16px", fontWeight: 600 }}
              >
                Total:{"  "}
              </span>
              {total} DH
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
            {franchise && (
              <div
                style={{
                  textAlign: "center",
                  fontSize: "12px",
                  // marginTop: ,
                  color: "#888",
                }}
              >
                {/* <span style={{ color: '#888', paddingRight: 5 }}>Totale:</span>{' '} */}
                Franchise : <span className="unity">{franchise}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardCarTotal;
