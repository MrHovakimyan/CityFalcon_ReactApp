import React from "react";
import DataMarkUp from "../utils/DataMarkUp";

export default function StoriesList({ storiesData }) {
  return (
    <div className="stories-content">
      <div>
        {storiesData.map((el) => (
          <DataMarkUp data={el} key={el.id} />
        ))}
      </div>
    </div>
  );
}
