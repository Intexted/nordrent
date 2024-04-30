"use client";
import React, { useEffect, useState } from "react";
import ReservationForm from "./ReservationForm";
import { t } from "i18next";
import CardCarTotal from "./CardCarTotal";
import moment from "moment";

function CheckoutRight({ SelectedCar, brands, DValues }) {
  const [editDays, setEditDays] = useState(true);

  useEffect(() => {
    if (
      DValues?.startDate &&
      DValues?.endDate &&
      DValues?.startLocation &&
      DValues?.endLocation
    )
      setEditDays(false);
    else {
      setEditDays(true);
    }
  }, [DValues]);

  return (
    <div className="vehicules" style={{ flex: 1 }}>
      <h4 id="cars" style={{ paddingLeft: "20px" }}>
        {t("reservationDetails")}
      </h4>
      {editDays ? (
        <ReservationForm />
      ) : (
        <div className="reservation reservation--full" id="reservation">
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
                      {moment(DValues?.startDate).format("yyyy-MM-DD")}{" "}
                      <span style={{ color: "#ff4560" }}>
                        {DValues?.startTime}
                      </span>
                    </p>

                    <p className="icon-location">{DValues?.startLocation}</p>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h5>{t("returnDate")}</h5>
                    <p className="icon-date">
                      {moment(DValues?.endDate).format("yyyy-MM-DD")}{" "}
                      <span style={{ color: "#ff4560" }}>
                        {DValues?.endTime}
                      </span>
                    </p>

                    <p className="icon-location">{DValues?.endLocation}</p>
                  </div>
                </div>

                <button
                  onClick={() => setEditDays(true)}
                  className="form-button icon-edit"
                  style={{
                    position: "relative",
                    fontStyle: "normal",
                  }}
                >
                  {t("Edit")}
                  <svg version="1.1" className="loading" viewBox="20 20 60 60">
                    <path
                      fill="#fff"
                      d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {SelectedCar && SelectedCar?.store && (
        <>
          <h4 id="cars" style={{ paddingLeft: "20px" }}>
            {t("vehicle")}
          </h4>

          <CardCarTotal car={SelectedCar} brands={brands} DValues={DValues} />
        </>
      )}
    </div>
  );
}

export default CheckoutRight;
