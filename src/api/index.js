import Axios from "axios";

export const getMakeupByType = (type) => {
  return Axios.get(
    `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${type}`
  )
    .then((response) => {
      return response.data.slice(32, 36); // Only display 4 cards (with valid image links)
    })
    .catch((error) => {
      console.log(error);
      return [];
    });
};
