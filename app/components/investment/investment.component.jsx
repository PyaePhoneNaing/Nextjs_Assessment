import React from "react";
import "./investment.styles.scss";
import { useTranslation } from "react-i18next";

const Investment = () => {
  const { t } = useTranslation();

  return (
    <div className="container-fluid p-0">
      <div className="row">
        <div className="col-12 investment-background">
          <img
            src="./assets/images-2.jpg"
            alt="Image 2"
            className="img-fluid background-img"
          />

          <div className="investment-text">
            <h4>{t("Make Your Move")}</h4>
            <h2>
              {t("Make Smart Investment")}
              <br /> {t("Decisions With Logo.")}
            </h2>
            <p>
              {t("Daily Market Reviews")}{" "}
              <i className="bi bi-arrow-right-short"></i>
              <br />
              {t("Exclusive Trading Tools")}{" "}
              <i className="bi bi-arrow-right-short"></i>
              <br />
              {t("Technical Analysis From Central")}{" "}
              <i className="bi bi-arrow-right-short"></i>
              <br />
              {t("Economic Data Earnings Calendar")}{" "}
              <i className="bi bi-arrow-right-short"></i>
            </p>
          </div>

          <div className="investment-phone">
            <img src="./assets/mobile-phone.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investment;
