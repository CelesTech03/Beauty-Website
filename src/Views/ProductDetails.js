import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../api";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Box, Grid, Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./styles/ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

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

  const handleAddToBag = () => {
    navigate(`/cart`);
  };

  return (
    <Box sx={{ pt: 18 }}>
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} sm={6}>
            <div className="zoom-image-container">
              <img
                src={product.image_link}
                alt={product.name}
                className="zoom-image"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom variant="h4">
              {product.name}
            </Typography>
            <Typography gutterBottom variant="body1">
              {product.brand}
            </Typography>
            <Typography gutterBottom fontWeight="bold">
              {product.price_sign || "$"}
              {product.price}
            </Typography>
            <Button
              size="small"
              sx={{
                border: "1px solid black",
                mb: 2,
                width: "30%",
                color: "black",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "black",
                  color: "white",
                },
              }}
              onClick={handleAddToBag}
            >
              ADD TO CART
            </Button>
            <Grid container justifyContent="center">
              <FavoriteBorderIcon />
              <Typography variant="body1">Add to wishlist</Typography>
            </Grid>
            <Grid container justifyContent="flex-start">
              <Typography
                gutterBottom
                variant="h5"
                color="text.primary"
                fontWeight="bold"
                sx={{
                  mt: 4,
                }}
              >
                Details:
              </Typography>
              <Typography variant="body2">{product.description}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductDetails;
