"use client";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import moment from "moment/moment";
import toast from "react-hot-toast";

function ReservationForm() {
  const router = useRouter();
  const { t } = useTranslation();
  const times = [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm();

  return (
    <div className="reservation reservation--full" id="reservation">
      <div className="reservation-form">
        <div className="om-container">
          <div className="om-container__inner">
            <div className="reservation-form__inner">
              <div className="reservation-form__titles">
                <h1 className="reservation-form__title">{t("title")}</h1>
              </div>
              <form
                id="reservation-form-step-1"
                onSubmit={handleSubmit((data) => {
                  data.startDate = moment(data.startDate).format("yyyy-MM-DD");
                  data.endDate = moment(data.endDate).format("yyyy-MM-DD");

                  // Base URL
                  const baseUrl = "/location-voiture-tanger";

                  // Create a URLSearchParams object from the data object
                  const queryString = new URLSearchParams(data).toString();

                  // Construct the full URL with the base URL, query string, and fragment
                  const fullUrl = `${baseUrl}?${queryString}#cars`;

                  if (moment(data?.endDate).diff(data?.startDate, "days") > 0) {
                    router.push(fullUrl);
                  } else {
                    toast(
                      "Please choose an end date that is later than the start date",
                      { type: "error" }
                    );
                  }
                })}
              >
                <div className="reservation-form__more">
                  <div className="reservation-form__line reservation-form__set reservation-form__pick-up">
                    <div className="reservation-form__pick-up-location reservation-form__location">
                      <div className="reservation-form__field-inner">
                        <label
                          htmlFor="reservation-form__pick-up-location-select"
                          className="reservation-form__label reservation-form__pick-up-location-label reservation-form__location-label"
                        ></label>
                        <select
                          {...register("startLocation")}
                          required
                          defaultValue={""}
                          className="reservation-form__pick-up-location-select"
                        >
                          <option value={""} disabled>
                            {t("pickUpAgency")}
                          </option>
                          <option value={t("tangerCity")}>
                            {t("tangerCity")}
                          </option>
                          <option value={t("tangerAirport")}>
                            {t("tangerAirport")}
                          </option>
                          <option value={t("tetouanAirport")}>
                            {t("tetouanAirport")}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="reservation-form__pick-up-date reservation-form__date">
                      <div className="reservation-form__field-inner">
                        <label
                          htmlFor="reservation-form__pick-up-date-input"
                          className="reservation-form__label reservation-form__pick-up-date-label reservation-form__date-label"
                        ></label>
                        <div className="reservation-form__date-wrapper">
                          <DatePicker
                            withPortal
                            placeholderText={t("departureDate")}
                            required
                            minDate={new Date().getTime()}
                            startDate={new Date(watch("startDate")).getTime()}
                            endDate={new Date(watch("endDate")).getTime()}
                            dateFormat="yyyy/MM/dd"
                            selected={watch("startDate")}
                            onChange={(date) => {
                              setValue("startDate", date);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="reservation-form__drop-off-location reservation-form__location">
                      <div className="reservation-form__field-inner">
                        <label
                          htmlFor="reservation-form__drop-off-location-select"
                          className="reservation-form__label reservation-form__drop-off-location-label reservation-form__location-label"
                        ></label>
                        <select
                          {...register("endLocation")}
                          required
                          defaultValue={""}
                          className="reservation-form__drop-off-location-select"
                        >
                          <option value={""} disabled>
                            {t("returnAgency")}
                          </option>
                          <option value={t("tangerCity")}>
                            {t("tangerCity")}
                          </option>
                          <option value={t("tangerAirport")}>
                            {t("tangerAirport")}
                          </option>
                          <option value={t("tetouanAirport")}>
                            {t("tetouanAirport")}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="reservation-form__drop-off-date reservation-form__date">
                      <div className="reservation-form__field-inner">
                        <label
                          htmlFor="reservation-form__drop-off-date-input"
                          className="reservation-form__label reservation-form__drop-off-date-label reservation-form__date-label"
                        ></label>
                        <div className="reservation-form__date-wrapper">
                          <DatePicker
                            withPortal
                            placeholderText={t("returnDate")}
                            minDate={
                              new Date(watch("startDate")).getTime() +
                              4 * 24 * 3600 * 1000
                            }
                            startDate={watch("startDate")}
                            endDate={watch("endDate")}
                            dateFormat="yyyy/MM/dd"
                            selected={watch("endDate")}
                            required
                            onChange={(date) => setValue("endDate", date)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="reservation-form__drop-off-date reservation-form__date">
                      <div className="reservation-form__field-inner">
                        <div className="reservation-form__date-wrapper">
                          <select
                            name=""
                            id=""
                            {...register("startTime")}
                            required
                            defaultValue={""}
                          >
                            <option value={""} disabled>
                              {t("Depart")}
                            </option>
                            {times?.map((i, key) => (
                              <option value={i} key={key}>
                                {i}
                              </option>
                            ))}
                          </select>
                        </div>
                        <label
                          htmlFor="reservation-form__drop-off-date-input"
                          className="reservation-form__label reservation-form__time-label reservation-form__date-label"
                        >
                          {t("time")}
                        </label>
                        <div className="reservation-form__date-wrapper">
                          <select
                            name=""
                            id=""
                            {...register("endTime")}
                            required
                            defaultValue={""}
                            style={{
                              borderColor: errors?.endTime ? "red" : "",
                            }}
                          >
                            <option value={""} disabled>
                              {t("Return")}
                            </option>
                            {times?.map((i, key) => (
                              <option value={i} key={key}>
                                {i}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="reservation-form__button reservation-form__time">
                      <div className="reservation-form__field-inner">
                        <button
                          className="form-button"
                          style={{ position: "relative" }}
                        >
                          {t("search")}
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
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <PaypalGateway /> */}
    </div>
  );
}

export default ReservationForm;
