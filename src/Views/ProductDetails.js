import React from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  return <div>Product {id}</div>;
}

export default ProductDetails;
