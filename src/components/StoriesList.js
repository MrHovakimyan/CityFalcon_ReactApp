import React from "react";
import FetchData from "../api/FetchData";
import dataMarkUp from "../utils/dataMarkUp";

export default function StoriesList() {
  let storiesData = FetchData();
  return (
    <div className="stories-content">
      <div>{storiesData.map((el) => dataMarkUp(el))}</div>
    </div>
  );
}
