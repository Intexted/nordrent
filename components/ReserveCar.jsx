"use client";
import React, { useEffect, useState } from "react";
import CarsSliderCard2 from "./Carslider/CarSliderCard2";
import { useTranslation } from "react-i18next";
import ReservationForm from "./ReservationForm";
import useUrlQuery from "./hooks/useUrlQuery";

function ReserveCarTime({ QueryString }) {
  const { t } = useTranslation();
  let DValues = QueryString;
  return (
    <div className="reservation-form">
      <div className="om-container">
        <div className="om-container__inner">
          <div
            style={{
              textAlign: "left",
              marginTop: 0,
              display: "flex",
              gap: 20,
            }}
          >
            <div style={{ flex: 1 }}>
              <h5>{t("departureDate")}</h5>
              <p className="icon-date">
                {DValues?.startDate}{" "}
                <span style={{ color: "#ff4560" }}>{DValues?.startTime}</span>
              </p>

              <p className="icon-location">{DValues?.startLocation}</p>
            </div>
            <div style={{ flex: 1 }}>
              <h5>{t("returnDate")}</h5>
              <p className="icon-date">
                {DValues?.endDate}{" "}
                <span style={{ color: "#ff4560" }}>{DValues?.endTime}</span>
              </p>
              <p className="icon-location">{DValues?.endLocation}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReserveCar({ cars, brands }) {
  const { t } = useTranslation();

  const [Max, setMax] = useState(6);
  const { QueryString } = useUrlQuery();
  let DValues = QueryString;
  const handleScroll = () => {
    if (
      document?.querySelector("#end-of-page")?.getBoundingClientRect().top -
        window.innerHeight <
      0
    ) {
      setMax(Max + 6);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  return (
    <div className="om-container">
      {!DValues.startTime ? (
        <div style={{ padding: "0 20px " }}>
          <h4>{t("title")}</h4>
          <ReservationForm />
        </div>
      ) : (
        <div
          className="reservation reservation--full"
          id="reservation"
          style={{ padding: 20 }}
        >
          <h4 id="cars">{t("reservationDetails")}</h4>
          <ReserveCarTime QueryString={QueryString} />
        </div>
      )}

      <h4 id="cars" style={{ paddingLeft: "20px" }}>
        {t("ChooseYourVehicle")}
      </h4>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-evenly",
          gap: "30px",
          padding: 20,
          flexWrap: "wrap",
        }}
      >
        {cars?.slice(0, Max).map((car, key) => {
          return <CarsSliderCard2 key={key} car={car} brands={brands} />;
        })}
      </div>
      {cars?.length > Max && (
        <div id="end-of-page" style={{ height: 80, position: "relative" }}>
          <svg version="1.1" className="loading" viewBox="20 20 60 60">
            <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"></path>
          </svg>
        </div>
      )}
    </div>
  );
}

export default ReserveCar;
