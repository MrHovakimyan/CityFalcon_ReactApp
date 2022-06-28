import React, { useEffect, useState } from "react";
import "./styles/App.scss";
import Header from "./components/Header";
import Filters from "./components/Filters";
import StoriesList from "./components/StoriesList";
import FetchData from "./api/FetchData";

function App() {
  const [stories, setStories] = useState([]);

  const getStoriesData = async (query) => {
    const data = await FetchData(query);
    console.log("data: ", data);
    setStories(data);
  };

  const handleScrollDown = () => {};

  useEffect(() => {
    getStoriesData();
  }, []);

  return (
    <div className="App">
      <Header />
      <Filters
        onRefreshClick={() => {
          getStoriesData();
        }}
        onFilterClick={getStoriesData}
      />
      <StoriesList storiesData={stories} onScrollDown={handleScrollDown} />
    </div>
  );
}

export default App;
