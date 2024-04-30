"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Language from "./Language";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import { usePathname } from "next/navigation";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollBack, setScrollBack] = useState(false);
  const pathname = usePathname();
  const { t } = useTranslation();
  useEffect(() => {
    window?.addEventListener("scroll", () => {
      if (window.scrollY > 100) setScrollBack(true);
      else setScrollBack(false);
    });
  }, []);
  const GoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {pathname != "/facture" && (
        <>
          {menuOpen && (
            <div
              className="mobile-menu-overlay"
              onClick={() => setMenuOpen(false)}
            ></div>
          )}

          <header id="top" className="header-wrapper">
            <div
              className="header header__logo--type-image header__menu--sticky"
              style={{ position: "relative" }}
            >
              <div className="om-container">
                <div className="om-container__inner">
                  <div className="header__inner">
                    <div className="header__logo" style={{ fontSize: 34 }}>
                      <Link href="/">
                        <Image
                          src="/logo.svg"
                          alt="main logo"
                          width={200}
                          height={70}
                          priority
                        />
                      </Link>
                    </div>

                    <div className="header__menu clearfix apply-uppercase">
                      <div className="primary-menu-container">
                        <nav className="menu-primary-menu-container">
                          <ul
                            id="menu-primary-menu"
                            className="primary-menu sf-menu clearfix show-dropdown-symbol"
                          >
                            <li
                              id="menu-item-62"
                              className="menu-item menu-item-type-post_type menu-item-object-page page_item page-item-9 current_page_item menu-item-62"
                            >
                              <Link href="/#top">{t("home")}</Link>
                            </li>
                            <li
                              id="menu-item-63"
                              className="menu-item menu-item-type-post_type menu-item-object-page page_item page-item-9 current_page_item menu-item-63"
                            >
                              <Link href="/#services">{t("services")}</Link>
                            </li>
                            <li
                              id="menu-item-64"
                              className="menu-item menu-item-type-post_type menu-item-object-page page_item page-item-9 current_page_item menu-item-64"
                            >
                              <Link href="/#about">{t("about")}</Link>
                            </li>
                            <li
                              id="menu-item-65"
                              className="menu-item menu-item-type-post_type menu-item-object-page page_item page-item-9 current_page_item menu-item-65"
                            >
                              <Link href="/#testimonials">{t("reviews")}</Link>
                            </li>
                            <li
                              id="menu-item-66"
                              className="menu-item menu-item-type-post_type menu-item-object-page page_item page-item-9 current_page_item menu-item-66"
                            >
                              <Link href="/#locations">{t("location")}</Link>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page page_item page-item-9 current_page_item menu-item-99">
                              <Link href="/#contacts">{t("contact")}</Link>
                            </li>

                            <li className="menu-item menu-item-type-post_type menu-item-object-page page_item page-item-9 current_page_item menu-item-99">
                              <Language />
                            </li>
                          </ul>
                        </nav>
                      </div>

                      <div
                        onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
                        className={`mobile-menu-control ${
                          menuOpen ? "active" : ""
                        }`}
                      >
                        <span className="mobile-menu-control__l1" />
                        <span className="mobile-menu-control__l2" />
                        <span className="mobile-menu-control__l3" />
                      </div>
                      <div
                        className={`mobile-menu-container ${
                          menuOpen ? "active" : ""
                        }`}
                      >
                        <nav className="menu-primary-menu-container">
                          <ul
                            id="menu-primary-menu-1"
                            className="primary-mobile-menu sf-menu clearfix show-dropdown-symbol"
                          >
                            <li className="menu-item menu-item-type-post_type menu-item-object-page page_item page-item-9 current_page_item menu-item-62">
                              <Link href="/#top">{t("home")}</Link>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page page_item page-item-9 current_page_item menu-item-63">
                              <Link href="/#services">{t("services")}</Link>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page page_item page-item-9 current_page_item menu-item-64">
                              <Link href="/#about">{t("about")}</Link>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page page_item page-item-9 current_page_item menu-item-65">
                              <Link href="/#testimonials">{t("reviews")}</Link>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page page_item page-item-9 current_page_item menu-item-66">
                              <Link href="/#locations">{t("location")}</Link>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page page_item page-item-9 current_page_item menu-item-99">
                              <Link href="/#contacts">{t("contact")}</Link>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page page_item page-item-9 current_page_item menu-item-99">
                              <Language />
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </>
      )}

      {scrollBack && (
        <div onClick={() => GoTop()} className="om-back-to-top active"></div>
      )}
    </>
  );
}

export default Navbar;
