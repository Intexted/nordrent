"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import sanitizeHtml from "sanitize-html";

function Footer() {
  const emailInputRef = useRef();
  const messageInputRef = useRef();
  const nameInputRef = useRef();
  const { t } = useTranslation();

  const submitHandler = (e) => {
    e.preventDefault();
    const emailEntered = sanitizeHtml(emailInputRef.current.value);
    const messageEntered = sanitizeHtml(messageInputRef.current.value);
    const nameEntered = sanitizeHtml(nameInputRef.current.value);

    let data = {
      name: nameEntered,
      email: emailEntered,
      message: messageEntered,
    };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success("Message Sent Successfully ..");
        emailInputRef.current.value = "";
        messageInputRef.current.value = "";
        nameInputRef.current.value = "";
      });
  };
  return (
    <footer>
      <div id="contacts" className="footer-widgets">
        <div className="om-container">
          <div className="om-container__inner">
            <div className="om-columns">
              <div className="footer-widgets__column om-column om-full">
                <div id="text-2" className="footer-widget widget_text">
                  <div className="footer-widget-inner">
                    <div className="textwidget">
                      <div style={{ textAlign: "center" }}>
                        <h2>Contact</h2>
                        <p style={{ fontSize: "20px" }}>
                          <b>{t("ContactQuestion")}</b>
                          <br />
                          {t("ContactAddress")} Rue Meksic, Mall Vienne 2ème
                          étage bureau n° 38. Tanger
                        </p>

                        <p>
                          <b
                            style={{
                              fontSize: "200%",
                              textDecoration: "underline",
                            }}
                          >
                            +2126-66736479
                          </b>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footer-widget wheelsberry_widget_cf7">
                  <div className="footer-widget-inner">
                    <div style={{ maxWidth: 640, margin: "0 auto" }}>
                      <div
                        role="form"
                        className="wpcf7"
                        id="wpcf7-f80-o2"
                        lang="en-US"
                        dir="ltr"
                      >
                        <div className="screen-reader-response" />
                        <form
                          onSubmit={submitHandler}
                          className="wpcf7-form demo"
                        >
                          <div className="wpcf7-form-elements">
                            <p className="one-half">
                              <span className="wpcf7-form-control-wrap name">
                                <input
                                  type="text"
                                  name="name"
                                  size={40}
                                  className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                  placeholder={t("FirstNamePlaceholder")}
                                  required
                                  ref={nameInputRef}
                                />
                              </span>
                            </p>
                            <p className="one-half">
                              <span className="wpcf7-form-control-wrap email">
                                <input
                                  type="email"
                                  name="email"
                                  size={40}
                                  className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                  placeholder={t("EmailPlaceholder")}
                                  required
                                  ref={emailInputRef}
                                />
                              </span>
                            </p>
                            <p>
                              <span className="wpcf7-form-control-wrap message">
                                <textarea
                                  name="message"
                                  cols={40}
                                  rows={6}
                                  className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                                  aria-required="true"
                                  aria-invalid="false"
                                  placeholder={t("MessagePlaceholder")}
                                  defaultValue={""}
                                  ref={messageInputRef}
                                />
                              </span>
                            </p>

                            <p className="submit">
                              <input
                                type="submit"
                                value={t("SendMessageButton")}
                                className="wpcf7-form-control wpcf7-submit"
                                placeholder={t("SendMessagePlaceholder")}
                              />
                            </p>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sub-footer sub-footer--full">
        <div className="om-container">
          <div className="om-container__inner">
            <div className="sub-footer__inner">
              <div className="sub-footer-text">
                <p>NORD PROMO CAR © ALL RIGHTS RESERVED</p>
              </div>
              <div className="sub-footer-text">
                <Link href="/cgl" target="_blank" rel="noopener noreferrer">
                  {t("RentalTermsAndConditions")}
                </Link>
                <br />
                <Link href="/ccr" target="_blank" rel="noopener noreferrer">
                  {t("CreditCardRequirements")}
                </Link>
              </div>

              <div className="footer-social-icons">
                <Image
                  src="/icons/paypal-logo.svg"
                  alt="paypal logo"
                  style={{ margin: "0 5px" }}
                  height={100}
                  width={100}
                  title="Paypal"
                  loading="lazy"
                />
              </div>

              <div className="footer-social-icons">
                <a
                  href="https://www.facebook.com/rentnord"
                  className=""
                  title="Facebook"
                  target="_blank"
                >
                  <Image
                    src="/images/facebook.svg"
                    alt="facebook logo"
                    style={{ cursor: "pointer", margin: "0 5px" }}
                    height={28}
                    width={28}
                    loading="lazy"
                  />
                </a>
                <a
                  href="https://www.instagram.com/youness.maher04/"
                  className=""
                  title="Instagram"
                  target="_blank"
                >
                  <Image
                    src="/images/instagram.svg"
                    alt="instagram logo"
                    style={{ cursor: "pointer" }}
                    height={28}
                    width={28}
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
