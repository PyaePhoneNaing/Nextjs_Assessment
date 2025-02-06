"use client";

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import i18n from "@/app/utils/i18n";
import "./homepage.styles.scss";

const Homepage = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setIsLangDropdownOpen(false); // Close dropdown after selection
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleLangDropdown = () => {
    setIsLangDropdownOpen((prev) => !prev);
  };

  return (
    <div className="container mt-4 mb-1">
      <div className="row border-bottom d-flex justify-content-between align-items-center">
        <div className="col-6 mb-4">
          {isLoading ? <Skeleton width={100} height={20} /> : <h1>LOGO</h1>}
        </div>
        <div className="col-6 d-flex mb-4 justify-content-end align-items-center">
          <div className="d-md-none">
            <button className="btn btn-outline-dark px-3" onClick={toggleMenu}>
              <i className="bi bi-list"></i>
            </button>
            {isMenuOpen && (
              <div className="hamburger-menu">
                <button className="btn btn-outline-dark my-2 w-100">
                  {t("Demo")}
                </button>
                <button className="btn btn-outline-dark my-2 w-100">
                  {t("Login")}
                </button>
                <button className="btn btn-danger my-2 w-100">
                  {t("Sign Up")}
                </button>
                <div className="dropdown my-2 w-100">
                  <button
                    className="btn btn-link text-muted dropdown-toggle w-100"
                    onClick={toggleLangDropdown}
                  >
                    {i18n.language === "ms" ? "Malay" : "English"}
                  </button>
                  {isLangDropdownOpen && (
                    <ul className="dropdown-menu show w-100">
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={() => handleLanguageChange("en")}
                        >
                          English
                        </button>
                      </li>
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={() => handleLanguageChange("ms")}
                        >
                          Malay
                        </button>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Normal Buttons for larger screens */}
          <div className="d-none d-md-flex">
            {isLoading ? (
              <>
                <Skeleton width={70} height={10} className="me-4 mb-2" />
                <Skeleton width={70} height={10} className="me-4 mb-2" />
                <Skeleton width={70} height={10} className="me-4 mb-2" />
              </>
            ) : (
              <>
                <button className="btn btn-outline-dark me-4 px-5 py-1 mb-2">
                  {t("Demo")}
                </button>
                <button className="btn btn-outline-dark me-4 px-5 py-1 mb-2">
                  {t("Login")}
                </button>
                <button
                  className="btn btn-danger me-4 px-5 py-1 mb-2"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {t("Sign Up")}
                </button>

                <div className="dropdown ms-1">
                  <button
                    className="btn btn-link text-muted dropdown-toggle"
                    onClick={toggleLangDropdown}
                  >
                    <i className="bi bi-globe me-2"></i>
                    {i18n.language === "ms" ? "Ms" : "En"}
                  </button>
                  {isLangDropdownOpen && (
                    <ul className="dropdown-menu show">
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={() => handleLanguageChange("en")}
                        >
                          English (En)
                        </button>
                      </li>
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={() => handleLanguageChange("ms")}
                        >
                          Malay (Ms)
                        </button>
                      </li>
                    </ul>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <ul className="d-flex justify-content-center flex-wrap list-unstyled">
            {isLoading ? (
              <>
                <Skeleton width={100} height={10} className="mx-3" />
                <Skeleton width={100} height={10} className="mx-3" />
                <Skeleton width={100} height={10} className="mx-3" />
                <Skeleton width={100} height={10} className="mx-3" />
                <Skeleton width={100} height={10} className="mx-3" />
                <Skeleton width={100} height={10} className="mx-3" />
                <Skeleton width={100} height={10} className="mx-3" />
              </>
            ) : (
              <>
                <li className="mx-3 hover-effect">{t("Trading")}</li>
                <li className="mx-3 hover-effect">{t("Platforms")}</li>
                <li className="mx-3 hover-effect">{t("Client Tools")}</li>
                <li className="mx-3 hover-effect">{t("Promotions")}</li>
                <li className="mx-3 hover-effect">{t("Research")}</li>
                <li className="mx-3 hover-effect">{t("Partnerships")}</li>
                <li className="mx-3 hover-effect">{t("About Us")}</li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
