import Cards from "../components/Cards";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

import { useState, useEffect } from "react";
import { getProductByType } from "../api/index";

const Cart = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProductByType("lipstick").then((response) => {
      setProducts(response);
    });
  }, [])

  console.log("products here", products)

  return (
    <Container>
      <Typography variant="h3" sx={{ mt: 2 }}>
        Shopping cart
      </Typography>

      {products.map(product => (
        <Grid item key={product.id} md={2.4}>
          <Card>
            
          </Card>
        </Grid>
      ))}
    </Container>
  );
}

export default Cart;