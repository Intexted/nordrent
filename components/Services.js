"use client";

import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

function Service() {
  const { t } = useTranslation();

  // const sendMessage = (msg) => {
  //   window.open(
  //     `https://api.whatsapp.com/send?phone=+212652678444&text=j'ai besoin de ce service: ${msg}`
  //   );
  // };

  return (
    <div
      id="services"
      className="vc_row wpb_row vc_row-fluid om-container vc_row-full-width"
      style={{ paddingTop: 20 }}
    >
      <div className="om-container">
        <div className="wpb_column vc_column_container vc_col-sm-12">
          <div className="vc_column-inner">
            <div className="wpb_wrapper">
              <div className="vc_custom_heading">
                <h2 style={{ textAlign: "center" }}>{t("NosServices")}</h2>
                <div
                  className="vc_custom_heading__additional"
                  style={{
                    textAlign: "center",
                    color: "#2c2c2c",
                    fontSize: "15px",
                  }}
                >
                  {t("NosServicesSubTitle")}
                </div>
              </div>
              <div
                className="vc_om-max-width om-mw-align-center"
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div className="vc_om-services wpb_content_element ">
                  <div className="om-services__item">
                    <div className="om-services__pane">
                      <div className="service-icon">
                        <Image
                          width={150}
                          height={150}
                          src="/images/service1.png"
                          loading="lazy"
                          alt="Vehicle Steering Wheel"
                        />
                      </div>
                      <h3 className="om-services__title">
                        {t("ChauffeurDrive")}
                      </h3>
                      <div className="om-services__description">
                        <p>{t("ChauffeurDriveDescription")}</p>
                      </div>
                    </div>
                  </div>
                  <div className="om-services__item">
                    <div className="om-services__pane">
                      <div className="service-icon">
                        <Image
                          width={150}
                          height={150}
                          src="/images/service2.png"
                          loading="lazy"
                          alt="fuel icon"
                        />
                      </div>
                      <h3 className="om-services__title">{t("FuelPlans")}</h3>
                      <div className="om-services__description">
                        <p>{t("FuelPlansDescription")}</p>
                      </div>
                    </div>
                  </div>
                  <div className="om-services__item">
                    <div className="om-services__pane">
                      <div className="service-icon">
                        <Image
                          width={150}
                          height={150}
                          src="/images/service3.png"
                          loading="lazy"
                          alt="car key"
                        />
                      </div>
                      <h3 className="om-services__title">
                        {t("PickupAndDelivery")}
                      </h3>
                      <div className="om-services__description">
                        <p>{t("PickupAndDeliveryDescription")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="vc_empty_space" style={{ height: 40 }}>
                <span className="vc_empty_space_inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
