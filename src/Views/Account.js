import { useEffect, useState } from 'react';
import { getProductByType } from "../api";
import OrderedItemCard from '../components/OrderedItemCard';
import {
  Container,
  Typography,
  Box,
  Avatar,
  Button,
  Card,
} from "@mui/material";
import Face2Icon from '@mui/icons-material/Face2';

function Account() {
  const orderedItems = [
    {
      id: 1,
      name: "Hyperlash Mascara",
      brand: "Smashbox",
      price: "$23.00",
      imageUrl: "https://www.smashbox.com/media/images/products/388x396/sbx_sku_35576_388x396_0.jpg",
      dateOrdered: "04/14/2023",
    },
    {
      id: 2,
      name: "L'Oreal Extraordinaire Gel Lacque Nail Colour",
      brand: "L'Oreal",
      price: "$8.99",
      imageUrl: "https://d3t32hsnjxo7q6.cloudfront.net/i/284a3bf668e98f69cc51a58ff9de1d1a_ra,w158,h184_pa,w158,h184.jpg",
      dateOrdered: "05/10/2023",
    },
    {
      id: 3,
      name: "Cargo Cosmetics HD Picture Perfect Blush Highlighter",
      brand: "Cargo Cosmetics",
      price: "$32.00",
      imageUrl: "https://d3t32hsnjxo7q6.cloudfront.net/i/c976f8b3aabe8368fdc673e556159a13_ra,w158,h184_pa,w158,h184.jpeg",
      dateOrdered: "05/20/2023,"
    },
  ];

  return (
    <Container>
      <Typography variant="h4" textAlign="left" gutterBottom>
        Account
      </Typography>
      <Box sx={{
        display: "flex",
        flexDirection: {xs: "column", md: "row",},
        justifyContent: "space-between",
        "& > :not(style)": {
          my: "30px",
        },
      }}>
        {/* Personal info */}
        <Card variant="outlined">
          <Box sx={{display: "flex",}}>
            <Avatar sx={{
              bgcolor: "secondary.main",
              height: "220px",
              width: "220px",
              m: "20px",
            }}>
              <Face2Icon color="primary" sx={{height: "150px", width: "150px",}} />
            </Avatar>
            <Box sx={{display: "flex", flexDirection: "column", mx: "30px", my: "60px",}}>
              <Typography variant="h5">
                Firstname Lastname
              </Typography>
              <Typography variant="p">
                myemail@gmail.com
              </Typography>
              <Typography variant="p">
                555-123-4567
              </Typography>
              <Typography variant="p">
                695 Park Ave
              </Typography>
              <Typography variant="p">
                New York, NY 10065
              </Typography>
            </Box>
          </Box>
          <Button sx={{mb: "20px",}}>
            Edit
          </Button>
        </Card>
        {/* Payment info */}
        <Card variant="outlined" sx={{display: "flex", flexDirection: "column",}}>
          <Typography variant="h5" sx={{mt: "60px", mb: "30px", textAlign: "left",}}>
            Payment Information
          </Typography>
          <Typography variant="p">
            Bank or card type or something idk
          </Typography>
          <Button sx={{mb: "20px",}}>
            Edit
          </Button>
        </Card>
      </Box>
      {/* Order info */}
      <Box sx={{display: "flex", flexDirection: "column",}}>
        <Typography variant="h5" textAlign="left">
          Recent Orders
        </Typography>
        {orderedItems.map((orderedItem, index) => {
           return <OrderedItemCard key={index} orderedItem={orderedItem} />;
        })
        }
        <Typography sx={{textDecoration: "underline", textAlign: "left", my: "20px",}}>
          View all orders
        </Typography>
      </Box>
    </Container>
  );
}
  
export default Account;