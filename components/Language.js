import i18n from "@/utils/i18n";
import Image from "next/image";
import React, { useState } from "react";

function Language() {
  const [languageOpen, setLanguageOpen] = useState(false);

  const change_lang = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
  };
  return (
    <>
      {languageOpen && (
        <div
          onClick={() => {
            setLanguageOpen(false);
          }}
          className="lang_overlay"
        ></div>
      )}
      <div className=" lang-dropdown">
        <a
          className="navbar-link "
          onClick={() => setLanguageOpen((languageOpen) => !languageOpen)}
          style={{
            marginTop: -2,
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <Image
            width={26}
            height={26}
            src={
              i18n?.language === "fr"
                ? "https://img.freepik.com/free-icon/france_318-203481.jpg"
                : i18n?.language === "en"
                ? "https://cdn0.iconfinder.com/data/icons/all-national-flags-of-the-world-very-high-quality-/283/usa-512.png"
                : "https://cdn0.iconfinder.com/data/icons/all-national-flags-of-the-world-very-high-quality-/283/spain-512.png"
            }
            alt="flag"
          />
          <span style={{ fontWeight: 600 }}>
            {i18n?.language === "fr"
              ? "Français"
              : i18n?.language === "en"
              ? "English"
              : "Spanish"}
          </span>
        </a>
        {languageOpen && (
          <div className="navbar-dropdown">
            <a
              className="navbar-item"
              onClick={() => {
                setLanguageOpen(false);
                change_lang("en");
              }}
            >
              <Image
                width={26}
                height={26}
                loading="lazy"
                src="https://cdn0.iconfinder.com/data/icons/all-national-flags-of-the-world-very-high-quality-/283/usa-512.png"
                alt="american flag"
              />
              <span>English</span>
            </a>
            <a
              className="navbar-item"
              onClick={() => {
                setLanguageOpen(false);
                change_lang("fr");
              }}
            >
              <Image
                width={26}
                height={26}
                loading="lazy"
                src="https://img.freepik.com/free-icon/france_318-203481.jpg"
                alt="france flag"
              />
              <span>Français</span>
            </a>
            <a
              className="navbar-item"
              onClick={() => {
                setLanguageOpen(false);
                change_lang("es");
              }}
            >
              <Image
                width={26}
                height={26}
                loading="lazy"
                src="https://cdn0.iconfinder.com/data/icons/all-national-flags-of-the-world-very-high-quality-/283/spain-512.png"
                alt="spanish flag"
              />
              <span>Spanish</span>
            </a>
          </div>
        )}
      </div>
    </>
  );
}

export default Language;
