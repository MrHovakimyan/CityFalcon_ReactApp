import React, { useState } from "react";

export default function DropDown({ refresh, order, language }) {
  const [isRefreshActive, setIsRefreshActive] = useState(false);
  const [isOrderActive, setIsOrderActive] = useState(false);
  const [isLangActive, setIsLangActive] = useState(false);

  const [selectedRefresh, setSelectedRefresh] = useState("Select one");
  const [selectedOrder, setSelectedOrder] = useState("Select one");
  const [selectedLanguage, setSelectedLanguage] = useState("Select one");

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
          {selectedRefresh}
          <i className="fa fa-chevron-down"></i>
        </div>
        {isRefreshActive && (
          <div className="dropDown-menu-list">
            <label className="dropDown-menu-list-item">
              <input
                type="checkbox"
                value={10000}
                onChange={(e) => {
                  setSelectedRefresh("10 seconds");
                }}
              />
              10 seconds
            </label>
            <label className="dropDown-menu-list-item">
              <input
                type="checkbox"
                value={30000}
                onChange={(e) => {
                  setSelectedRefresh("30 seconds");
                }}
              />
              30 seconds
            </label>
            <label className="dropDown-menu-list-item">
              <input
                type="checkbox"
                value={60000}
                onChange={(e) => {
                  setSelectedRefresh("1 minute");
                }}
              />
              1 minute
            </label>
            <label className="dropDown-menu-list-item">
              <input
                type="checkbox"
                value={100000}
                onChange={(e) => {
                  setSelectedRefresh("10 minute");
                }}
              />
              10 minutes
            </label>
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
          {selectedOrder}
          <i className="fa fa-chevron-down"></i>
        </div>
        {isOrderActive && (
          <div className="dropDown-menu-list">
            <label className="dropDown-menu-list-item">
              <input
                type="checkbox"
                onChange={(e) => {
                  setSelectedOrder("Top Rated");
                }}
              />
              Top Rated
            </label>
            <label className="dropDown-menu-list-item">
              <input
                type="checkbox"
                onChange={(e) => {
                  setSelectedOrder("Latest");
                }}
              />
              Latest
            </label>
            <label className="dropDown-menu-list-item">
              <input
                type="checkbox"
                onChange={(e) => {
                  setSelectedOrder("Most Read");
                }}
              />
              Most Read
            </label>
            <label className="dropDown-menu-list-item">
              <input
                type="checkbox"
                onChange={(e) => {
                  setSelectedOrder("Popular");
                }}
              />
              Popular
            </label>
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
          {selectedLanguage}
          <i className="fa fa-chevron-down"></i>
        </div>
        {isLangActive && (
          <div className="dropDown-menu-list">
            <label className="dropDown-menu-list-item">
              <input
                type="checkbox"
                onChange={(e) => {
                  setSelectedLanguage("Select/Unselect All");
                }}
              />
              Select / Unselect All
            </label>
            <label className="dropDown-menu-list-item">
              <input
                type="checkbox"
                onChange={(e) => {
                  setSelectedLanguage("English");
                }}
              />
              English
            </label>
            <label className="dropDown-menu-list-item">
              <input
                type="checkbox"
                onChange={(e) => {
                  setSelectedLanguage("German");
                }}
              />
              German
            </label>
            <label className="dropDown-menu-list-item">
              <input
                type="checkbox"
                onChange={(e) => {
                  setSelectedLanguage("Chinese");
                }}
              />
              Chinese
            </label>
            <label className="dropDown-menu-list-item">
              <input
                type="checkbox"
                onChange={(e) => {
                  setSelectedLanguage("Italian");
                }}
              />
              Italian
            </label>
          </div>
        )}
      </div>

      <button className="dropDown-resetBtn">RESET</button>
    </div>
  );
}
