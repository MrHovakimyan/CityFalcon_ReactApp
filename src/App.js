import React, { useEffect, useState } from "react";
import "./styles/App.scss";
import Header from "./components/Header";
import Filters from "./components/Filters";
import StoriesList from "./components/StoriesList";
import FetchData from "./api/FetchData";

function App() {
  const [stories, setStories] = useState([]);
  const [query, setQuery] = useState();
  const [pageToken, setPageToken] = useState();

  const getStoriesData = async (query) => {
    const { stories, next_page_token } = await FetchData(query);
    setPageToken(next_page_token);
    return stories;
  };

  const handleScrollDown = async () => {
    let newQuery;
    if (query) {
      newQuery = `${query}&limit=20&page_token=${pageToken}`;
    } else {
      newQuery = `?limit=20&page_token=${pageToken}`;
    }
    const data = await getStoriesData(newQuery);
    setStories([...stories, ...data]);
  };

  const handleFilterClick = async (query) => {
    setQuery(query);
    const data = await getStoriesData(query);
    setStories(data);
  };

  const handleRefreshClick = async () => {
    const data = await getStoriesData(query);
    setStories(data);
  };

  useEffect(() => {
    const fetchStoriesData = async () => {
      const data = await getStoriesData();
      setStories(data);
    };
    fetchStoriesData();
  }, []);

  return (
    <div className="App">
      <Header />
      <Filters
        onRefreshClick={handleRefreshClick}
        onFilterClick={handleFilterClick}
        query={query}
      />
      <StoriesList storiesData={stories} onScrollDown={handleScrollDown} />
    </div>
  );
}

export default App;
