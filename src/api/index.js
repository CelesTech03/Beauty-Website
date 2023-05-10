import Axios from "axios";

export const getMakeupByType = (type) => {
  return Axios.get(
    `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${type}`
  )
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
      return [];
    });
};
