import React, { useState, useEffect } from "react";
import { orderFilters, languages, refreshIntervals } from "./Constants";

export default function DropDown({ onFilterClick }) {
  const [isRefreshActive, setIsRefreshActive] = useState(false);
  const [isOrderActive, setIsOrderActive] = useState(false);
  const [isLangActive, setIsLangActive] = useState(false);

  const [selectedRefresh, setSelectedRefresh] = useState("");
  const [selectedRefreshTitle, setSelectedRefreshTitle] = useState("Refresh Intervals");

  const [selectedOrder, setSelectedOrder] = useState("");
  const [selectedOrderTitle, setSelectedOrderTitle] = useState("Select Order");

  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedLanguagesTitle, setSelectedLanguagesTitle] = useState("Select Language");

  useEffect(() => {
    let query;
    if (selectedOrder) {
      query = `?order_by=${selectedOrder}`;
      if (selectedLanguages.length > 0) {
        query = `?languages=${selectedLanguages.join(",")}`;
      }
    } else if (selectedLanguages.length > 0) {
      query = `?languages=${selectedLanguages.join(",")}`;
    }
    console.log("query", query);

    if (selectedRefresh) {
      // setInterval(() => {
      //   onFilterClick(query)
      // })
    } else {
      // clearInterval()
      onFilterClick(query);
    }
  }, [selectedOrder, selectedLanguages, selectedRefresh]);

  return (
    <div className="dropDown">
      {/*AutoRefresh */}
      <div className="dropDown-menu">
        <div
          className="dropDown-menu-title"
          onClick={() => {
            setIsRefreshActive(!isRefreshActive);
          }}
        >
          {selectedRefreshTitle}
          <i className="fa fa-chevron-down"></i>
        </div>

        {isRefreshActive && (
          <div className="dropDown-menu-list">
            {refreshIntervals.map((refresh) => {
              return (
                <label className="dropDown-menu-list-item" key={refresh.value}>
                  <input
                    type="checkbox"
                    checked={selectedRefresh === refresh.value}
                    onChange={(e) => {
                      if (selectedRefresh === refresh.value) {
                        setSelectedRefresh("");
                        setSelectedRefreshTitle("Refresh Intervals");
                      } else {
                        setSelectedRefresh(refresh.value);
                        setSelectedRefreshTitle(refresh.title);
                      }
                    }}
                  />
                  {refresh.title}
                </label>
              );
            })}
          </div>
        )}
      </div>

      {/*Order */}
      <div className="dropDown-menu">
        <div
          className="dropDown-menu-title"
          onClick={() => {
            setIsOrderActive(!isOrderActive);
          }}
        >
          {selectedOrderTitle}
          <i className="fa fa-chevron-down"></i>
        </div>

        {isOrderActive && (
          <div className="dropDown-menu-list">
            {orderFilters.map((order) => {
              return (
                <label className="dropDown-menu-list-item" key={order.value}>
                  <input
                    type="checkbox"
                    checked={selectedOrder === order.value}
                    onChange={(e) => {
                      if (selectedOrder === order.value) {
                        setSelectedOrder("");
                        setSelectedOrderTitle("Select Order");
                      } else {
                        setSelectedOrder(order.value);
                        setSelectedOrderTitle(order.title);
                      }
                    }}
                  />
                  {order.title}
                </label>
              );
            })}
          </div>
        )}
      </div>

      {/*Languages */}
      <div className="dropDown-menu">
        <div
          className="dropDown-menu-title"
          onClick={() => {
            setIsLangActive(!isLangActive);
          }}
        >
          {selectedLanguagesTitle}
          <i className="fa fa-chevron-down"></i>
        </div>

        {isLangActive && (
          <div className="dropDown-menu-list">
            <label className="dropDown-menu-list-item">
              <input
                type="checkbox"
                checked={selectedLanguages.length === languages.length}
                onChange={(e) => {
                  if (selectedLanguages.length === languages.length) {
                    setSelectedLanguages([]);
                    setSelectedLanguagesTitle("Select Language");
                  } else {
                    const allLang = languages.map((lg) => lg.value);
                    const filteredLang = languages.map((lg) => lg.title);
                    setSelectedLanguagesTitle(...filteredLang);
                    setSelectedLanguages(allLang);
                  }
                }}
              />
              Select/Unselect All
            </label>
            {languages.map((lang) => {
              return (
                <label className="dropDown-menu-list-item" key={lang.value}>
                  <input
                    type="checkbox"
                    checked={selectedLanguages.includes(lang.value)}
                    onChange={(e) => {
                      const lgIndex = selectedLanguages.indexOf(lang.value);
                      if (lgIndex === -1) {
                        setSelectedLanguages([...selectedLanguages, lang.value]);
                      } else {
                        const updatedLangs = [...selectedLanguages];
                        updatedLangs.splice(lgIndex, 1);
                        setSelectedLanguages(updatedLangs);
                      }
                    }}
                  />
                  {lang.title}
                </label>
              );
            })}
          </div>
        )}
      </div>

      <button
        className="dropDown-resetBtn"
        onClick={() => {
          setSelectedOrder("");
          setSelectedOrderTitle("Select Order");

          setSelectedLanguages([]);
          setSelectedLanguagesTitle("Select Language");

          setSelectedRefresh("");
          setSelectedRefreshTitle("Refresh intervals");
        }}
      >
        RESET
      </button>
    </div>
  );
}
