import { useState, useEffect } from "react";
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
import Summary from "../utils/Summary";

const Cart = () => {
  const [products, setProducts] = useState([])
  const [count, setCount] = useState(0)

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

      <Divider sx={{ mb: 1, background: '#838383', borderBottomWidth: 1.5 }} />

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
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
        <Summary title="Checkout" icon={<ShoppingCartCheckoutIcon />} />
      </Box>
    </Container>
  );
}

export default Cart;