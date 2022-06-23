import React from "react";
import "./styles/App.scss";
import Header from "./components/Header";
import Filters from "./components/Filters";
import StoriesList from "./components/StoriesList";

function App() {
  return (
    <div className="App">
      <Header />
      <Filters />
      <StoriesList />
    </div>
  );
}

export default App;
