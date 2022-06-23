import React from "react";
import refreshIcon from "../media/refreshIcon.png";
import filterIcon from "../media/filterIcon.png";

export default function () {
  return (
    <div className="filters-content">
      <div className="filters-content-title">Watchlist Name</div>
      <div className="filters-content-btns">
        <button className="filters-content-btns-wrpr">
          <img src={refreshIcon} alt="Refresh" className="filters-content-btns-wrpr-icon" />
          Refresh
        </button>
        <button className="filters-content-btns-wrpr">
          <img src={filterIcon} alt="Refresh" className="filters-content-btns-wrpr-icon" />
          Filters
        </button>
      </div>
    </div>
  );
}
