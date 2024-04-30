"use client";
import React, { useEffect, useState } from "react";

import "react-datepicker/dist/react-datepicker.css";

import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import PaypalGateway from "./PaypalGateway";
import { contrys } from "./countrys";
import toast from "react-hot-toast";
import Image from "next/image";

function CheckoutForm({ total, SelectedCar, DValues, OpenUrl }) {
  const [ShowPayPal, setShowPayPal] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const localData = sessionStorage.getItem("user")
    ? JSON.parse(sessionStorage.getItem("user"))
    : {};
  const [userData, setUserData] = useState(localData);
  const { t } = useTranslation();
  const {
    startDate,
    endDate,
    startLocation,
    endLocation,
    startTime,
    endTime,
    car,
  } = DValues;

  const createOrder = async (data) => {
    toast.promise(
      fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...userData, ...data, total }),
      }).then(async (response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        sessionStorage.setItem(
          "facture",
          JSON.stringify({
            ...responseData?.invoice,
            vehicule: SelectedCar.name,
            price: SelectedCar.prix,
            brand: SelectedCar?.brand,
          })
        );
        router.push("/facture");
      }),
      { pending: "Saving order...", success: "Order created", error: "Error" }
    );
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // values: router?.query,
    defaultValues: {
      age: 23,
      country: "Maroc",
      ...localData,
    },
  });

  useEffect(() => {
    setUserData((user) => ({
      ...user,
      orderDetails: {
        startDate,
        endDate,
        startLocation,
        endLocation,
        startTime,
        endTime,
      },
      car,
    }));
    setShowPayPal(false);
  }, [router]);

  useEffect(() => {
    if (ShowPayPal) {
      var payment_section = document.getElementById("payment");
      payment_section?.scrollIntoView();
    }
  }, [ShowPayPal]);

  return (
    <>
      {startDate &&
        endDate &&
        startLocation &&
        endLocation &&
        startTime &&
        endTime && (
          <div
            className="reservation reservation--full"
            id="reservation"
            style={{ flex: 2 }}
          >
            <form
              id="reservation-form-step-1"
              onSubmit={handleSubmit(async (data) => {
                setShowPayPal(true);
                setUserData((user) => ({ ...user, personalData: data }));
                sessionStorage.setItem("user", JSON.stringify(data));
              })}
            >
              <h4 id="cars" style={{ paddingLeft: "20px" }}>
                {t("clientInformation")}
              </h4>
              <div className="reservation-form">
                <div className="om-container">
                  <div className="om-container__inner">
                    <div className="reservation-form__inner">
                      <div>
                        <div className="reservation-form__more">
                          <div className="reservation-form__line reservation-form__set reservation-form__pick-up">
                            <div className="reservation-form_first_name reservation-form__location">
                              <div className="reservation-form__field-inner">
                                <label
                                  htmlFor="reservation-form__pick-up-location-select"
                                  className="reservation-form__label  reservation-form__name-label"
                                >
                                  {t("firstName")}
                                </label>
                                <div className="reservation-form__date-wrapper">
                                  <input
                                    type="text"
                                    name="first_name"
                                    placeholder={t("firstName")}
                                    {...register("first_name", {
                                      required: true,
                                    })}
                                    style={{
                                      borderColor: errors?.first_name
                                        ? "red"
                                        : "",
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="reservation-form_last_name reservation-form__location">
                              <div className="reservation-form__field-inner">
                                <label
                                  htmlFor="reservation-form__pick-up-location-select"
                                  className="reservation-form__label  reservation-form__name-label"
                                >
                                  {t("lastName")}
                                </label>
                                <div className="reservation-form__date-wrapper">
                                  <input
                                    type="text"
                                    placeholder={t("lastName")}
                                    name="last_name"
                                    {...register("last_name", {
                                      required: true,
                                    })}
                                    style={{
                                      borderColor: errors?.last_name
                                        ? "red"
                                        : "",
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="reservation-form_phone_number reservation-form__location">
                              <div className="reservation-form__field-inner">
                                <label
                                  htmlFor="reservation-form__pick-up-location-select"
                                  className="reservation-form__label reservation-form__phone-label"
                                >
                                  {t("phoneNumber")}
                                </label>
                                <div className="reservation-form__date-wrapper">
                                  <input
                                    type="tel"
                                    name="phone"
                                    pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
                                    placeholder={t("phoneNumber")}
                                    {...register("phone", { required: true })}
                                    style={{
                                      borderColor: errors?.phone ? "red" : "",
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="reservation-form_email reservation-form__location">
                              <div className="reservation-form__field-inner">
                                <label
                                  htmlFor="reservation-form__pick-up-location-select"
                                  className="reservation-form__label reservation-form__email-label"
                                >
                                  Email
                                </label>
                                <div className="reservation-form__date-wrapper">
                                  <input
                                    type="text"
                                    name="Email"
                                    pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
                                    placeholder="Email"
                                    {...register("email", { required: true })}
                                    style={{
                                      borderColor: errors?.email ? "red" : "",
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="reservation-form_gender reservation-form__date">
                              <div className="reservation-form__field-inner">
                                <label
                                  htmlFor="reservation-form__drop-off-date-input"
                                  className="reservation-form__label reservation-form__user-label"
                                >
                                  {t("gender")}
                                </label>
                                <div className="reservation-form__date-wrapper">
                                  <select
                                    name="drop-off-location"
                                    className="reservation-form__drop-off-location-select"
                                    id="reservation-form__drop-off-location-select"
                                    {...register("gender", { required: true })}
                                    style={{
                                      borderColor: errors?.gender ? "red" : "",
                                    }}
                                  >
                                    <option value={"Mr"}>{t("mr")}</option>
                                    <option value={"Mme"}>{t("mme")}</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="reservation-form__age reservation-form__date">
                              <div className="reservation-form__field-inner">
                                <label
                                  htmlFor="reservation-form__drop-off-date-input"
                                  className="reservation-form__label reservation-form__user-label "
                                >
                                  {t("myAge")}
                                </label>
                                <div className="reservation-form__date-wrapper">
                                  <select
                                    name="drop-off-location"
                                    className="reservation-form__drop-off-location-select"
                                    id="reservation-form__drop-off-location-select"
                                    data-placeholder="Choose a location"
                                    {...register("age", { required: true })}
                                    style={{
                                      borderColor: errors?.age ? "red" : "",
                                    }}
                                  >
                                    <option value={22}>22</option>
                                    <option value={23}>23 et +</option>
                                  </select>
                                </div>
                              </div>
                            </div>

                            <div>
                              <div className="reservation-form_country reservation-form__date">
                                <div className="reservation-form__field-inner">
                                  <label
                                    htmlFor="reservation-form__drop-off-date-input"
                                    className="reservation-form__label reservation-form__location-label "
                                  >
                                    {t("country")}
                                  </label>
                                  <div className="reservation-form__date-wrapper">
                                    <select
                                      name="drop-off-location"
                                      className="reservation-form__drop-off-location-select"
                                      id="reservation-form__drop-off-location-select"
                                      data-placeholder="Choose a location"
                                      {...register("country", {
                                        required: true,
                                      })}
                                      style={{
                                        borderColor: errors?.country
                                          ? "red"
                                          : "",
                                      }}
                                    >
                                      {contrys.map((c, key) => (
                                        <option value={c} key={key}>
                                          {t(c)}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="reservation-form_city reservation-form__date">
                                <div className="reservation-form__field-inner">
                                  <label
                                    htmlFor="reservation-form__drop-off-date-input"
                                    className="reservation-form__label reservation-form__location-label "
                                  >
                                    {t("city")}
                                  </label>
                                  <div className="reservation-form__date-wrapper">
                                    <input
                                      type="text"
                                      name=""
                                      {...register("city", { required: true })}
                                      style={{
                                        borderColor: errors?.city ? "red" : "",
                                      }}
                                      id=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h4 id="cars" style={{ paddingLeft: "20px" }}>
                {t("extrasOptions")}
              </h4>
              <div className="reservation-form">
                <div className="om-container__inner">
                  <div
                    className="reservation-form__line"
                    style={{ flexWrap: "nowrap" }}
                  >
                    <div className="step">
                      <div className="checkbox-container">
                        <input
                          type="checkbox"
                          className="checkbox"
                          {...register("Conducteur")}
                          checked={DValues?.Conducteur === "true"}
                          onChange={(e) => {
                            DValues.Conducteur = e.target.checked;
                            OpenUrl({
                              url: pathname, // Base URL to navigate to
                              object: DValues,
                            });
                          }}
                        />
                        <label htmlFor="">{t("additionalDriver")}</label>

                        <p style={{ marginLeft: "auto" }}>0 MAD /{t("day")}</p>
                      </div>
                      <div className="checkbox-container">
                        <input
                          type="checkbox"
                          className="checkbox"
                          checked={DValues?.NavigateurGPS === "true"}
                          {...register("NavigateurGPS")}
                          onChange={(e) => {
                            DValues.NavigateurGPS = e.target.checked;
                            OpenUrl({
                              url: pathname, // Base URL to navigate to
                              object: DValues,
                            });
                          }}
                        />
                        <label htmlFor="">{t("gpsNavigator")}</label>
                        <p style={{ marginLeft: "auto" }}>
                          200 MAD /{t("day")}
                        </p>
                      </div>
                      <div className="checkbox-container">
                        <input
                          type="checkbox"
                          className="checkbox"
                          checked={DValues?.RehausseurEnfant === "true"}
                          {...register("RehausseurEnfant")}
                          onChange={(e) => {
                            DValues.RehausseurEnfant = e.target.checked;
                            OpenUrl({
                              url: pathname, // Base URL to navigate to
                              object: DValues,
                            });
                          }}
                        />
                        <label htmlFor="">{t("childBoosterSeat")}</label>
                        <p style={{ marginLeft: "auto" }}>
                          100 MAD /{t("day")}
                        </p>
                      </div>
                      <div className="checkbox-container">
                        <input
                          type="checkbox"
                          className="checkbox"
                          checked={DValues?.SiegeEnfant === "true"}
                          {...register("SiegeEnfant")}
                          onChange={(e) => {
                            DValues.SiegeEnfant = e.target.checked;
                            OpenUrl({
                              url: pathname, // Base URL to navigate to
                              object: DValues,
                            });
                          }}
                        />
                        <label htmlFor="">{t("babyChildSeat")}</label>
                        <p style={{ marginLeft: "auto" }}>
                          200 MAD /{t("day")}
                        </p>
                      </div>
                    </div>

                    <div className="step">
                      <div className="checkbox-container">
                        <input
                          type="checkbox"
                          className="checkbox"
                          {...register("assurancevc")}
                          checked={DValues?.assurancevc === "true"}
                          onChange={(e) => {
                            DValues.assurancevc = e.target.checked;
                            OpenUrl({
                              url: pathname, // Base URL to navigate to
                              object: DValues,
                            });
                          }}
                        />
                        <label htmlFor="">{t("fullCarInsurance")}</label>
                        <p style={{ marginLeft: "auto" }}>
                          350 MAD /{t("day")}
                        </p>
                      </div>
                      <div className="checkbox-container">
                        <input
                          type="checkbox"
                          className="checkbox"
                          {...register("assurancepv")}
                          checked={DValues.assurancepv === "true"}
                          onChange={(e) => {
                            DValues.assurancepv = e.target.checked;
                            OpenUrl({
                              url: pathname, // Base URL to navigate to
                              object: DValues,
                            });
                          }}
                        />
                        <label htmlFor="">{t("tireGlassInsurance")}</label>
                        <p style={{ marginLeft: "auto" }}>
                          200 MAD /{t("day")}
                        </p>
                      </div>
                      <div className="checkbox-container">
                        <input type="checkbox" checked className="checkbox" />
                        <label htmlFor="">{t("airportDelivery")}</label>
                        <p style={{ marginLeft: "auto" }}>Gratuit</p>
                      </div>
                      <div className="checkbox-container">
                        <input type="checkbox" checked className="checkbox" />
                        <label htmlFor="">{t("unlimitedMileage")}</label>
                        <p style={{ marginLeft: "auto" }}>Gratuit</p>
                      </div>
                    </div>
                  </div>
                  <button
                    className="form-button "
                    style={{
                      position: "relative",
                      fontStyle: "normal",
                      marginTop: 20,
                    }}
                  >
                    {t("confirm")}
                    <svg
                      version="1.1"
                      className="loading"
                      viewBox="20 20 60 60"
                    >
                      <path
                        fill="#fff"
                        d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </form>
            <div id="payment" style={{ minHeight: 200 }}>
              {ShowPayPal && (
                <>
                  {" "}
                  <h4 style={{ paddingLeft: "20px" }}>{t("payment")}</h4>
                  <div className="reservation-form payment-form">
                    <div className="om-container__inner">
                      <div
                        className="reservation-form__line"
                        style={{ marginTop: 0 }}
                      >
                        <div
                          className="reservation-form__button reservation-form__time"
                          style={{ marginTop: 0 }}
                        >
                          <div
                            style={{
                              fontSize: 25,
                              textAlign: "left",
                              margin: "0 20px 20px",
                              fontWeight: "bold",
                              color: "#888",
                              borderBottom: "1px solid #ddd",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "flex-end",
                            }}
                          >
                            <span>Total : </span>

                            <span style={{ fontSize: 30, color: "#fec601e1" }}>
                              {total} DH
                            </span>
                          </div>
                          <div className="reservation-form__field-inner">
                            <button
                              className="form-button"
                              id="form-button"
                              style={{ position: "relative" }}
                              onClick={() => createOrder({ payment: "Cash" })}
                            >
                              <Image
                                width={25}
                                height={25}
                                src="/icons/cash.svg"
                                alt="bill logo"
                                loading="lazy"
                              />
                              {t("cashPayment")}
                              <svg
                                version="1.1"
                                className="loading"
                                viewBox="20 20 60 60"
                              >
                                <path
                                  fill="#fff"
                                  d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>

                        <div className="reservation-form__button reservation-form__time">
                          <div className="reservation-form__field-inner">
                            <PaypalGateway
                              total={total}
                              createOrder={createOrder}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
    </>
  );
}

export default CheckoutForm;
