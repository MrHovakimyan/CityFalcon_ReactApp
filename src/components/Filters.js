import React, { useState } from "react";
import refreshIcon from "../media/refreshIcon.png";
import filterIcon from "../media/filterIcon.png";

export default function Filters({ onRefreshClick, onFilterClick }) {
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
          <form>
            <label for="autoRefresh">AUTOREFRESH</label>
            <select name="AutoRefresh" id="autoRefresh">
              <option value="1min">1 Minute</option>
              <option value="1min">15 Minute</option>
              <option value="1min">20 Minute</option>
            </select>
          </form>
          <form>
            <label for="topRated">TOP RATED</label>
            <select name="TopRated" id="topRated">
              <option value="1min">Top</option>
              <option value="1min">Latest</option>
              <option value="1min">Retweeted</option>
              <option value="1min">Read</option>
            </select>
          </form>
          <form>
            <label for="allLanguages">ALL LANGUAGES</label>
            <select name="allLanguages" id="allLanguages">
              <option value="1min">English</option>
              <option value="1min">German</option>
              <option value="1min">Italian</option>
              <option value="1min">Chinese</option>
            </select>
          </form>
          <button className="filters-content-resetBtn">RESET</button>
        </div>
      )}
    </div>
  );
}
