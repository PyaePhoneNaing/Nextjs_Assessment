"use client";

import React from "react";
import "./footer.styles.scss";
import { useTransition } from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="container mt-5">
      <div className="row justify-content-space-between align-items-center">
        <div className="col-lg-6">
          <i class="bi bi-globe"> English (Malaysia)</i>
        </div>
        <div className="col-lg-6 icon-list">
          <i class="bi bi-facebook"></i>
          <i class="bi bi-instagram"></i>
          <i class="bi bi-twitter"></i>
          <i class="bi bi-youtube"></i>
          <i class="bi bi-linkedin"></i>
        </div>
        <div className="col-12 mt-5">
          <p>
            {t(
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            )}
            {t(
              "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            )}
            {t(
              "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
            )}
            {t(
              "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            )}
          </p>
          <br />
          <p>
            {t(
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            )}
            {t(
              "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            )}
            {t(
              "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
            )}
          </p>
          <br />
          <p>
            {t(
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            )}
            {t(
              "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            )}
            {t(
              "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
            )}
            {t(
              "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
