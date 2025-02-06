"use client";

import React from "react";
import "./brand.styles.scss";
import InstrumentTable from "../instrument_table/instrument_table.component";
import Investment from "../investment/investment.component";
import { useTranslation } from "react-i18next";

const Brand = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <ul className="d-flex justify-content-center flex-wrap list-unstyled">
              <li className="mx-3">
                <img
                  src="./assets/brands/brands (1).png"
                  alt={t("Brand 1")}
                  className="img-fluid brand-img"
                />
              </li>
              <li className="mx-3">
                <img
                  src="./assets/brands/brands (2).png"
                  alt={t("Brand 2")}
                  className="img-fluid brand-img"
                />
              </li>
              <li className="mx-3">
                <img
                  src="./assets/brands/brands (3).png"
                  alt={t("Brand 3")}
                  className="img-fluid brand-img"
                />
              </li>
              <li className="mx-3">
                <img
                  src="./assets/brands/brands (4).png"
                  alt={t("Brand 4")}
                  className="img-fluid brand-img"
                />
              </li>
              <li className="mx-3">
                <img
                  src="./assets/brands/brands (5).png"
                  alt={t("Brand 5")}
                  className="img-fluid brand-img"
                />
              </li>
              <li className="mx-3">
                <img
                  src="./assets/brands/brands (6).png"
                  alt={t("Brand 6")}
                  className="img-fluid brand-img"
                />
              </li>
              <li className="mx-3">
                <img
                  src="./assets/brands/brands (7).png"
                  alt={t("Brand 7")}
                  className="img-fluid brand-img"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-5 text-start">
          <div className="col-12 brand-head">
            <h3>{t("Access To The Most")}</h3>
            <h2>{t("POPULAR INSTRUMENTS")}</h2>
          </div>
        </div>
        <div className="row mt-4 brand-list">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex">
              <img
                src="./assets/icon/forex.png"
                alt={t("Forex")}
                className="icon-img me-4"
              />
              <div>
                <h4>{t("Forex")}</h4>
                <p>
                  {t(
                    "Trade over 100 currency pairs, including the majors, minors and exotics, with ultra-low spreads and fast execution."
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex">
              <img
                src="./assets/icon/gold.png"
                alt={t("Precious Metals")}
                className="icon-img me-4"
              />
              <div>
                <h4>{t("Precious Metals")}</h4>
                <p>
                  {t(
                    "Speculate on the price movements of Gold and Silver against the US Dollar and diversify your trading portfolio."
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex">
              <img
                src="./assets/icon/stock.png"
                alt={t("Stocks")}
                className="icon-img me-4"
              />
              <div>
                <h4>{t("Stocks")}</h4>
                <p>
                  {t(
                    "Get access to major international stocks (Apple, Google, Tesla) with no commissions or requotes and no hidden mark-ups."
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex">
              <img
                src="./assets/icon/energy.png"
                alt={t("Energies")}
                className="icon-img me-4"
              />
              <div>
                <h4>{t("Energies")}</h4>
                <p>
                  {t(
                    "Trade CFDs on spot energies such as Brent oil and natural gas with no commissions or requotes and no hidden mark-ups."
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex">
              <img
                src="./assets/icon/stock.png"
                alt={t("Stock Indices")}
                className="icon-img me-4"
              />
              <div>
                <h4>{t("Stock Indices")}</h4>
                <p>
                  {t(
                    "Get access to major international stock indices (S&P 500, Nasdaq 100) with no commissions or requotes and no hidden mark-ups."
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex">
              <img
                src="./assets/icon/crypto.png"
                alt={t("Crypto")}
                className="icon-img me-4"
              />
              <div>
                <h4>{t("Cryptocurrencies")}</h4>
                <p>
                  {t(
                    "Trade the new era of currencies such as Bitcoin, Etherium and Litecoin with ultra-low spreads and fast execution."
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex">
              <img
                src="./assets/icon/wheat.png"
                alt={t("Commodities")}
                className="icon-img me-4"
              />
              <div>
                <h4>{t("Commodities")}</h4>
                <p>
                  {t(
                    "Trade over a vast variety of commodities (Cotton, Cocoa, Wheat) with ultra-low spreads and fast execution."
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5 mb-5">
          <div className="row d-flex justify-content-center align-items-center position-relative">
            <div className="col-lg-2 col-md-4 col-sm-12">
              <img src="./assets/bull.png" alt="Bull" className="bull-img" />
            </div>
            <div className="col-lg-8 col-md-4 col-sm-12 px-5 brand-introduce-text">
              <h1>{t("Brand Introduce")}</h1>
              <h2>
                <strong>
                  {t("100% Stocks &")} <br />
                  {t("0% Commission")}
                </strong>
              </h2>
              <p>
                {t("Get exactly what you're paying for the")} <br />
                {t("commission-free stock investing")}
              </p>
              <button className="btn btn-danger">{t("Explore")}</button>
            </div>
            <div className="EA-text col-lg-4 col-md-4 col-sm-12">
              <h4>{t("The Perfect Environment For Expert Advisors(EA)")}</h4>
              <p>
                {t(
                  "We've built the perfect environment for EAs to thrive - we allow scalping, hedging, news trading and more. No requotes and no minimum stop loss distance."
                )}
              </p>
            </div>
            <div className="deposits-text col-lg-4 col-md-4 col-sm-12">
              <h4>{t("Instant Deposits")}</h4>
              <h4>{t("Fast Withdrawals")}</h4>
              <p>
                {t(
                  "Fund your account easily and securely through our wide range of payment options. Your funds are held securely in Tier 1 banks."
                )}
              </p>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-12">
              <img src="./assets/bear.png" alt="Bear" className="bear-img" />
            </div>
          </div>
        </div>
      </div>

      <InstrumentTable />
      <Investment />

      <div className="container mt-5">
        <div className="row justify-content-space-between align-items-center">
          <div className="col-lg-6 col-md-12 steps-text">
            <h2>{t("How To Get Started")}</h2>
            <h1>{t("Start Free In 4 Steps")}</h1>
            <img src="./assets/images-3.png" alt={t("Steps Image")} />
          </div>

          <div className="col-lg-6 col-md-12 mt-5 steps-list">
            <ul>
              <li>
                <h3>{t("Register")}</h3>
                <p>{t("Open an account by filling in your details.")}</p>
              </li>

              <li>
                <h3>{t("Verify")}</h3>
                <p>{t("Upload your document(s) for fast verification.")}</p>
              </li>

              <li>
                <h3>{t("Fund")}</h3>
                <p>{t("Fund your account with your chosen payment method.")}</p>
              </li>

              <li>
                <h3>{t("Trade")}</h3>
                <p>
                  {t("Unlock thousands of instruments and start investing.")}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
