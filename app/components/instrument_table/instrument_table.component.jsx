"use client";

import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./instrument_table.styles.scss";
import { useTranslation } from "react-i18next";

const InstrumentTable = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [previousData, setPreviousData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://18.143.79.95/api/priceData/technical-test"
      );
      const result = await response.json();
      const currentData = Object.values(result)
        .map((item) => ({
          ...item,
          Bid: parseFloat(item.Bid).toFixed(2),
          Ask: parseFloat(item.Ask).toFixed(2),
          Spread: parseFloat(item.Spread).toFixed(2),
        }))
        .sort((a, b) => a.Symbol.localeCompare(b.Symbol));

      setData(currentData);

      const updatedPreviousData = {};
      currentData.forEach((item) => {
        updatedPreviousData[item.Symbol] = {
          Bid: parseFloat(item.Bid),
          Ask: parseFloat(item.Ask),
          DailyChange: parseFloat(item.DailyChange),
        };
      });
      setPreviousData(updatedPreviousData);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(fetchData, 3000);
    fetchData();

    return () => clearInterval(interval);
  }, []);

  const filteredData = data.filter(
    (item) =>
      item.Symbol &&
      item.Symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  const changePage = (pageNumber) => setCurrentPage(pageNumber);

  const getPriceColor = (currentPrice, previousPrice) => {
    const current = parseFloat(currentPrice);
    const previous = parseFloat(previousPrice);

    if (current < previous) return "green";
    if (current > previous) return "red";
    return "black";
  };

  return (
    <div className="container mt-5 pt-5">
      <h1 className="text-center mb-5 heading">{t("Instrument Table")}</h1>

      <div className="row">
        <div className="col-lg-6 col-md-12 mb-4 table-text">
          <h3>{t("Make Your Move")}</h3>
          <h2>
            {t("Trade Over 5600")} <br />
            {t("Global Markets.")}
          </h2>
          <p>
            {t("We Offer Two Levels Of Pricing Depending")} <br />
            {t("On Your Account Tier.")}
          </p>
          <div className="input-group mb-3 w-75">
            <input
              type="text"
              className="form-control"
              placeholder={t("Search Market")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="input-group-text">
              <i className="bi bi-search"></i>
            </span>
          </div>

          <ul className="list-unstyled row">
            <li className="col-6 mb-3">
              <h5>$100</h5>
              <p>{t("Minimum Deposit")}</p>
            </li>
            <li className="col-6 mb-3">
              <h5>100%</h5>
              <p>{t("Security of Funds")}</p>
            </li>
            <li className="col-6 mb-3">
              <h5>1:500</h5>
              <p>{t("Max Leverage")}</p>
            </li>
            <li className="col-6 mb-3">
              <h5>10+</h5>
              <p>{t("Funding Options")}</p>
            </li>
            <li className="col-6 mb-3">
              <h5>10000+</h5>
              <p>{t("Trading Instruments")}</p>
            </li>
            <li className="col-6 mb-3">
              <h5>&lt;20ms</h5>
              <p>{t("Execution Speed")}</p>
            </li>
          </ul>
        </div>
        <div className="col-lg-6 col-md-12 table-container">
          <table className="table table-responsive">
            <thead>
              <tr>
                <th style={{ width: "25%" }}>Name</th>
                <th style={{ width: "25%" }}>Buy</th>
                <th style={{ width: "25%" }}>Sell</th>
                <th style={{ width: "25%" }}>Spread</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                Array.from({ length: rowsPerPage }).map((_, index) => (
                  <tr key={index}>
                    <td>
                      <Skeleton width="100%" />
                    </td>
                    <td>
                      <Skeleton width="100%" />
                    </td>
                    <td>
                      <Skeleton width="100%" />
                    </td>
                    <td>
                      <Skeleton width="100%" />
                    </td>
                  </tr>
                ))
              ) : currentRows.length > 0 ? (
                currentRows.map((item, index) => {
                  const globalIndex = indexOfFirstRow + index;
                  const previous =
                    globalIndex === 0
                      ? data[globalIndex + 1] || item 
                      : data[globalIndex - 1];

                  const bidColor = getPriceColor(item.Bid, previous.Bid);
                  const askColor = getPriceColor(item.Ask, previous.Ask);

                  return (
                    <tr key={index}>
                      <td>{item.Symbol}</td>
                      <td style={{ color: bidColor }}>{item.Bid}</td>
                      <td style={{ color: askColor }}>{item.Ask}</td>
                      <td>{item.Spread}</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="4">No data available</td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="d-flex justify-content-center custom-pagination">
            {Array.from(
              { length: Math.ceil(filteredData.length / rowsPerPage) },
              (_, i) => i + 1
            )
              .filter((pageNumber) => {
                const totalPages = Math.ceil(filteredData.length / rowsPerPage);
                const shouldShowFirstPages = pageNumber <= 3;
                const shouldShowLastPage = pageNumber === totalPages;
                const shouldShowCurrentPageAndNeighbors =
                  Math.abs(pageNumber - currentPage) <= 1;

                return (
                  shouldShowFirstPages ||
                  shouldShowLastPage ||
                  shouldShowCurrentPageAndNeighbors
                );
              })
              .map((pageNumber, index, array) => (
                <React.Fragment key={pageNumber}>
                  {index > 0 && pageNumber !== array[index - 1] + 1 && (
                    <span key={`dots-${index}`}>...</span>
                  )}
                  <button
                    key={pageNumber}
                    onClick={() => changePage(pageNumber)}
                    className={`btn btn-sm ${
                      currentPage === pageNumber
                        ? "btn-primary"
                        : "btn-secondary"
                    } mx-1`}
                  >
                    {pageNumber}
                  </button>
                </React.Fragment>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstrumentTable;
