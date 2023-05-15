import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import {
  Card,
  CardMedia,
  Typography,
  Box,
  Container,
  Grid,
  CardContent,
  Button,
  Divider
} from "@mui/material";

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

import { getProductByType } from "../api/index";

const Cart = () => {
  const [products, setProducts] = useState([])
  const [count, setCount] = useState(0)
  const titles = ['Merchandise subtotal', 'Shipping & Handling', 'Tax']
  const prices = ['$35.75', 'TBD', 'TBD']

  useEffect(() => {
    getProductByType("foundation").then((response) => {
      setProducts(response);
    });
  }, [])


  // increase quantity function
  const increaseCount = () => {
    setCount(count + 1)
  }

  // decrease quantity function
  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1)
    }
    else {
      setCount(0)
      alert("Minimum reached")
    }
  }

  // Item component for each product
  const Item = ({ image, name, brand, price }) => {
    return (
      <Grid container spacing={0.5} >
        <Grid item xs={2}>
          <CardMedia
            component="img"
            image={image}
            alt={name}
            sx={{ objectFit: "scale-down", m: 1 }}
          />
        </Grid>

        <Grid item xs={4} md={6}>
      <CardContent
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: 'column',
        }}>
        <Typography variant="body2" color="subtitle1" fontWeight="bold">
          {brand}
        </Typography>
        <Typography gutterBottom variant="subtitle1" color="red">
          {name}
        </Typography>
        <Box sx={{
          boxShadow: 1,
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Button onClick={increaseCount}>
            <KeyboardArrowUpIcon />
          </Button>
          <Typography variant="subtitle1">
            {count}
          </Typography>
          <Button onClick={decreaseCount} disabled={!count}>
            {count === 0 ? "" : <KeyboardArrowDownIcon />}
          </Button>
        </Box>
      </CardContent>
        </Grid>

        <Grid item xs={2}>
      <Typography
        align="center"
        variant="h6"
        sx={{ mt: "15px", fontWeight: 'bold' }}
      >
        ${price}
      </Typography>
        </Grid>
      </Grid>
    )
  }

  return (
    <Container sx={{ mb: 2 }}>
      <Typography variant="h4" align="left" sx={{ mt: 2 }} gutterBottom >
        My cart
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Card sx={{ display: 'flex', flexDirection: 'column' }}>
          {products.map(product => (
            <Item
              key={product.id}
              brand={product.brand}
              image={product.image_link}
              name={product.name}
              price={product.price} />
          ))}
        </Card>

        <Box sx={{ display: 'flex', flexDirection: "column" }}>
          <Card>
            <CardContent>
              <Typography
                align="left"
                variant="h6"
                sx={{ fontWeight: 'bold' }}
                gutterBottom>
                Order Summary
              </Typography>

              <Box sx={{ display: 'flex' }}>
                <Box sx={{ mr: 8 }}>
                  {titles.map((title, index) => (
                    <Typography
                      key={index}
                      align='left'
                      variant="subtitle2"
                      gutterBottom>
                      {title}
                    </Typography>
                  ))}
                </Box>

                <Box>
                  {prices.map((price, index) => (
                    <Typography
                      key={index}
                      align='right'
                      variant="subtitle2"
                      sx={{ fontWeight: 'bold' }}
                      gutterBottom>
                      {price}
                    </Typography>
                  ))}
                </Box>
              </Box>
              <Divider variant="middle" sx={{ mt: 1 }} />
              <Box sx={{ mt: 1, display: 'flex', justifyContent: 'space-between' }}>
                <Typography
                  align="left"
                  variant="h6"
                  sx={{ fontWeight: 'bold' }}
                  gutterBottom>
                  Estimated Total
                </Typography>
                <Typography
                  align="left"
                  variant="subtitle1"
                  sx={{ fontWeight: 'bold' }}
                  gutterBottom>
                  $35.75
                </Typography>
              </Box>
              <Divider variant="middle" sx={{ mt: 1 }} />
              <Button
                variant="contained"
                sx={{ mt: 3, width: '100%', backgroundColor: "#ff4500" }}
                component={Link}
                to="/checkout"
              >
                <ShoppingCartCheckoutIcon />
                <Typography variant="subitle1" sx={{ fontWeight: 'bold', ml: 1 }}>
                  Checkout
                </Typography>
              </Button>
            </CardContent>
          </Card>

        </Box>

      </Box>
    </Container>
  );
}

export default Cart;