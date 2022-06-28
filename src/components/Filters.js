import React, { useState, useEffect, useRef } from "react";
import refreshIcon from "../media/refreshIcon.png";
import filterIcon from "../media/filterIcon.png";
import DropDown from "../utils/DropDown";

export default function Filters({ onRefreshClick, onFilterClick, query }) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterBtnRef = useRef();

  useEffect(() => {
    const closeFilterBtn = (e) => {
      if (e.path[0] !== filterBtnRef.current) {
        setIsFilterOpen(false);
      }
    };
    document.body.addEventListener("click", closeFilterBtn);

    return () => document.body.removeEventListener("click", closeFilterBtn);
  }, []);

  return (
    <div className="filters-content">
      <div className="filters-content-title">Watchlist Name</div>
      <div className="filters-content-btns">
        <button className="filters-content-btns-wrpr" onClick={onRefreshClick}>
          <img src={refreshIcon} alt="Refresh" className="filters-content-btns-wrpr-icon" />
          Refresh
        </button>
        <button
          ref={filterBtnRef}
          className="filters-content-btns-wrpr"
          onClick={() => {
            setIsFilterOpen(!isFilterOpen);
          }}
        >
          <img src={filterIcon} alt="Refresh" className="filters-content-btns-wrpr-icon" />
          Filters
        </button>
      </div>
      {isFilterOpen && (
        <div className="filters-content-options">
          <DropDown onFilterClick={onFilterClick} query={query} />
        </div>
      )}
    </div>
  );
}
