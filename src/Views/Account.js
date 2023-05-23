import { useEffect, useState } from 'react';
import { getProductByType } from "../api";
import OrderedItemCard from '../components/OrderedItemCard';
import {
  Container,
  Typography,
  Box,
  Avatar,
  Button,
} from "@mui/material";
import Face2Icon from '@mui/icons-material/Face2';

function Account() {
  const orderedItems = [
    {
      name: "Hyperlash Mascara",
      brand: "Smashbox",
      price: "$23.00",
      imageUrl: "https://www.smashbox.com/media/images/products/388x396/sbx_sku_35576_388x396_0.jpg",
      dateOrdered: "04/14/2023",
    },
    {
      name: "L'Oreal Extraordinaire Gel Lacque Nail Colour",
      brand: "L'Oreal",
      price: "$8.99",
      imageUrl: "https://d3t32hsnjxo7q6.cloudfront.net/i/284a3bf668e98f69cc51a58ff9de1d1a_ra,w158,h184_pa,w158,h184.jpg",
      dateOrdered: "05/10/2023",
    },
    {
      name: "Cargo Cosmetics HD Picture Perfect Blush Highlighter",
      brand: "Cargo Cosmetics",
      price: "$32.00",
      imageUrl: "https://d3t32hsnjxo7q6.cloudfront.net/i/c976f8b3aabe8368fdc673e556159a13_ra,w158,h184_pa,w158,h184.jpeg",
      dateOrdered: "05/20/2023,"
    },
  ];

  return (
    <Container>
      <Typography variant="h4" align="left" gutterBottom>
        Account
      </Typography>
      <Box sx={{display: "flex",}}>
        {/* Personal info */}
        <Box sx={{border: 1,}}>
          <Box sx={{display: "flex",}}>
            <Avatar sx={{ bgcolor: "secondary.main", }}>
              <Face2Icon color="primary" />
            </Avatar>
            <Box sx={{display: "flex", flexDirection: "column",}}>
              <Typography variant="h5">
                Firstname Lastname
              </Typography>
              <Typography variant="p">
                Email
              </Typography>
              <Typography variant="p">
                Phone number
              </Typography>
              <Typography variant="p">
                Address line 1
              </Typography>
              <Typography variant="p">
                Address line 2
              </Typography>
            </Box>
          </Box>
          <Button>
            Edit
          </Button>
        </Box>
        {/* Payment info */}
        <Box sx={{border: 1, display: "flex", flexDirection: "column",}}>
          <Typography>
            Payment Information
          </Typography>
          <Typography>
            Bank or card type or something idk
          </Typography>
          <Button>
            Edit
          </Button>
        </Box>
      </Box>
      {/* Order info */}
      <Box sx={{border: 1, display: "flex", flexDirection: "column",}}>
        Recent orders
        {orderedItems.map((orderedItem, index) => {
           return <OrderedItemCard key={index} orderedItem={orderedItem} />;
        })
        }
      </Box>
    </Container>
  );
}
  
export default Account;