"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function Counters() {
  const [counts, setCounts] = useState({
    cars: 50,
    clients: 4023,
    orders: 9760,
  });
  const { t } = useTranslation();
  const [count, setCount] = useState(0);
  const calc = (v) => Math.floor((v * count) / 1000);

  const handleScroll = () => {
    if (
      document?.querySelector("#counters")?.getBoundingClientRect().top -
        (3 * window.innerHeight) / 4 <
        0 &&
      count == 0
    ) {
      const interval = setInterval((event) => {
        setCount((count) => {
          if (count >= 1000) {
            clearInterval(interval);
            return count;
          }
          return count + 10;
        });
      }, 20);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div className="rn-info" id="counters">
      <div className="rn-info_item">
        <div className="info-icon">
          <Image
            loading="lazy"
            width={100}
            height={100}
            src="./icons/users.svg"
            alt="users icon"
          />
        </div>
        <p className="info-val">{calc(counts?.clients)}</p>
        <p>{t("clients")}</p>
      </div>
      <div className="rn-info_item">
        <div className="info-icon">
          <Image
            loading="lazy"
            width={100}
            height={100}
            src="./icons/car.svg"
            alt="car icon"
          />
        </div>
        <p className="info-val">{calc(counts?.cars)}</p>
        <p>{t("vehicles")}</p>
      </div>
      <div className="rn-info_item">
        <div className="info-icon">
          <Image
            loading="lazy"
            width={100}
            height={100}
            src="./icons/calendar.svg"
            alt="calendar icon"
          />
        </div>
        <p className="info-val">{calc(counts?.orders)}</p>
        <p>{t("bookings")}</p>
      </div>
    </div>
  );
}

export default Counters;
