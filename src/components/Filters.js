import React, { useState } from "react";
import refreshIcon from "../media/refreshIcon.png";
import filterIcon from "../media/filterIcon.png";
import DropDown from "../utils/DropDown";

export default function Filters({ onRefreshClick, onFilterClick, refresh, order, language }) {
  const [isFilterOn, setIsFilterOn] = useState(false);

  return (
    <div className="filters-content">
      <div className="filters-content-title">Watchlist Name</div>
      <div className="filters-content-btns">
        <button className="filters-content-btns-wrpr" onClick={onRefreshClick}>
          <img src={refreshIcon} alt="Refresh" className="filters-content-btns-wrpr-icon" />
          Refresh
        </button>
        <button
          className="filters-content-btns-wrpr"
          onClick={() => {
            setIsFilterOn(!isFilterOn);
          }}
        >
          <img src={filterIcon} alt="Refresh" className="filters-content-btns-wrpr-icon" />
          Filters
        </button>
      </div>
      {isFilterOn && (
        <div className="filters-content-options">
          <DropDown refresh={refresh} order={order} language={language} />
        </div>
      )}
    </div>
  );
}
