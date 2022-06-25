import { BASE_URL } from "./configs";

async function FetchData(query) {
  const url = query ? BASE_URL + query : BASE_URL;
  try {
    return fetch(url)
      .then((response) => response.json())
      .then((result) => {
        return result.stories;
      });
  } catch (error) {
    console.log(error);
  }
}

export default FetchData;
