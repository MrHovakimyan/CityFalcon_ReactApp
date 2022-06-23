import { useState, useEffect } from "react";
import { BASE_URL } from "./configs";

function FetchData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      fetch(BASE_URL)
        .then((response) => response.json())
        .then((result) => {
          setData(result.stories);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log("data: ", data);
  return data;
}

export default FetchData;
