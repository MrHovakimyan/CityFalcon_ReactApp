import React, { useRef } from "react";
import DataMarkUp from "../utils/DataMarkUp";

export default function StoriesList({ storiesData, onScrollDown }) {
  const storiesListRef = useRef();

  const handleScroll = () => {
    if (storiesListRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = storiesListRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        onScrollDown();
        storiesListRef.current.scrollTop = 0;
      }
    }
  };

  return (
    <div className="stories-content" onScroll={() => handleScroll()} ref={storiesListRef}>
      {storiesData.map((el) => (
        <DataMarkUp data={el} key={el.id} />
      ))}
    </div>
  );
}
