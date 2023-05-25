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
  CardContent,
  CardActions,
} from "@mui/material";
import Face2Icon from '@mui/icons-material/Face2';

function Account() {
  return (
    <Container>
      <Typography variant="h4" textAlign="left" sx={{mb: "0.5em", mt: "1em", fontFamily: "monospace", fontWeight: 700, letterSpacing: ".1rem"}}>
        Account
      </Typography>
      <Divider />
      <Box sx={{
        display: "flex",
        flexDirection: {xs: "column", md: "row",},
        justifyContent: "space-between",
        "& > :not(style)": {
          my: "2em",
        },
      }}>
        {/* Personal info */}
        <Card variant="outlined">
          <Box sx={{display: "flex",}}>
            <Avatar sx={{
              bgcolor: "secondary.main",
              height: "9.85em",
              width: "9.85em",
              m: "2em",
            }}>
              <Face2Icon color="primary" sx={{height: "6em", width: "6em",}} />
            </Avatar>
            <Box sx={{display: "flex", flexDirection: "column", mx: "2em", my: "4em",}}>
              <Typography variant="h5" sx={{mb: "1em",}}>
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
          <Button variant="contained" sx={{my: "1em", height: "4em", width: '40%', backgroundColor: "#ff4500"}}>
            Edit
          </Button>
        </Card>
        {/* Payment info */}
        <Card variant="outlined" sx={{display: "flex", flexDirection: "column",}}>
          <CardContent sx={{display: "flex", flexDirection: "column",}}>
            <Typography variant="h5" sx={{mt: "1em", ml: "1em", mr:"2em", textAlign: "left",}}>
              Payment Information
            </Typography>
            <Typography variant="p" sx={{mt: "3em", mx: "8em",}}>
              Card type: Visa
            </Typography>
            <Typography variant="p" sx={{mx: "8em",}}>
              Bank: Citibank
            </Typography>
            <Typography variant="p" sx={{mx: "8em",}}>
              Card number: ending in 1234
            </Typography>
            <Typography variant="p" sx={{mb: "3em", mx: "8em",}}>
              Expiration date: 03/18/2027
            </Typography>
          </CardContent>
          <CardActions sx={{display: "flex", flexDirection: "column",}}>
            <Button variant="contained" sx={{my: "2em", height: "4em", width: '40%', backgroundColor: "#ff4500"}}>
              Edit
            </Button>
          </CardActions>
        </Card>
      </Box>
      {/* Order info */}
      <Box sx={{display: "flex", flexDirection: "column",}}>
        <Typography variant="h4" textAlign="left" sx={{my: "0.5em", fontFamily: "monospace", fontWeight: 700, letterSpacing: ".1rem"}}>
          Recent Orders
        </Typography>
        <Divider sx={{mb: "2em",}} />
        {orderedItems.map((orderedItem) => {
           return <OrderedItemCard key={orderedItem.id} orderedItem={orderedItem} />;
        })
        }
        <Typography sx={{textDecoration: "underline", textAlign: "left", mb: "2em",}}>
          View all orders
        </Typography>
      </Box>
    </Container>
  );
}
  
export default Account;