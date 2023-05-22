import Axios from "axios";

export const getProductByType = (type) => {
  return Axios.get(
    `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${type}`
  )
    .then((response) => {
      return response.data.slice(32, 37); // Only display 5 cards (with valid image links)
    })
    .catch((error) => {
      console.log(error);
      return [];
    });
};

export const getProductById = (id) => {
  return Axios.get(`http://makeup-api.herokuapp.com/api/v1/products/${id}.json`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return [];
    });
};
