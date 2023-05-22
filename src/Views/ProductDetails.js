import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../api";
import { Container, Typography, Box } from "@mui/material";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  // Fetch product using API
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProductById(id);
        setProduct(productData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Box
      sx={{
        pt: 6,
      }}
    >
      <Container className="product-details-container">
        <img src={product.image_link} alt={product.name} />
        <div className="product-info">
          <Typography>{product.brand}</Typography>
          <p>{product.name}</p>
          <p>
            {product.price_sign}
            {product.price}
          </p>
          <p>{product.description}</p>
        </div>
      </Container>
    </Box>
  );
}

export default ProductDetails;
