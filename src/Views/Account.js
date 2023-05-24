import { useEffect, useState } from 'react';
import { getProductByType } from '../api';
import OrderedItemCard from '../components/OrderedItemCard';
import { orderedItems } from '../utils/OrderedItemData';
import {
  Container,
  Typography,
  Box,
  Avatar,
  Button,
  Card,
  Divider,
} from "@mui/material";
import Face2Icon from '@mui/icons-material/Face2';

function Account() {
  return (
    <Container>
      <Typography variant="h4" textAlign="left" gutterBottom>
        Account
      </Typography>
      <Divider />
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
        {orderedItems.map((orderedItem) => {
           return <OrderedItemCard key={orderedItem.id} orderedItem={orderedItem} />;
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