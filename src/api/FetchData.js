import { BASE_URL } from "./configs";

async function FetchData() {
  try {
    return fetch(BASE_URL)
      .then((response) => response.json())
      .then((result) => {
        return result.stories;
      });
  } catch (error) {
    console.log(error);
  }
}

export default FetchData;
