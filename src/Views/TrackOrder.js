import { useParams } from 'react-router-dom';
import { orderedItems } from '../utils/OrderedItemData';

import {
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Divider,
  Box,
} from '@mui/material';

function TrackOrder() {
  const { id } = useParams();
  const orderedItem = orderedItems[id];
  console.log(orderedItem);

  let deliveryStatus;
  const deliveriesDates = [
    ["04/16/2023", "04/19/2023", "04/21/2023"],
    ["5/11/2023", "5/12/2023", "5/15/2023"],
    ["5/20/2023", "5/21/2023", "5/23/2023"]
  ];
  let deliveryDates;

  if (id === 0) {
    deliveryStatus = "Delivered";
    deliveryDates = deliveriesDates[0];
  } else if (id === 1) {
    deliveryStatus = "Delivered";
    deliveryDates = deliveriesDates[1];
  } else {
    deliveryStatus = "In transit";
    deliveryDates = deliveriesDates[2];
  }

  return (
    <Container>
      <Typography variant="h4" textAlign="left" gutterBottom sx={{mb: "0.5em", mt: "1em", fontFamily: "monospace", fontWeight: 700, letterSpacing: ".1rem"}}>
        Track Order
      </Typography>
      <Divider sx={{mb: "2em",}} />
      <Card variant="outlined" sx={{display: "flex", flexDirection: "row",}}>
        <CardMedia sx={{width: "16em", objectFit: "scale-down", alignSelf:"flex-start", m: "2em",}} 
        component="img" image={orderedItem.imageUrl} alt={orderedItem.name} />
        <CardContent sx={{
          display: "flex",
          flexDirection: "column",
          mt: {xs: "2em", md: "6em"},
          "& > :not(style)": {
            textAlign: "left",
          },
        }}>
          <Typography variant="h5">
            {orderedItem.name}
          </Typography>
          <Typography variant="p">
            {orderedItem.brand}
          </Typography>
          <br />
          <Typography variant="p">
            Order placed on {orderedItem.dateOrdered}
          </Typography>
          <Typography variant="p">
            Shipping status: {deliveryStatus}
          </Typography>
        </CardContent>
      </Card>

      <Typography variant="h4" textAlign="left" sx={{mt: "1em",mb: "0.5em", fontFamily: "monospace", fontWeight: 700, letterSpacing: ".1rem"}}>
          Delivery History
      </Typography>
      <Divider sx={{mb: "2em",}} />
      <Card variant="outlined" sx={{display: "flex", flexDirection: "column",}}>
        <CardContent sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", my: "0.5em",}}>
          <Typography sx={{mx: "1em",}}>
            Location 3
          </Typography>
          <Typography sx={{mx: "1em",}}>
            {deliveryDates[2]} 4:31 PM
          </Typography>
        </CardContent>
        <Divider />
        <CardContent sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", my: "0.5em",}}>
          <Typography sx={{mx: "1em",}}>
            Location 2
          </Typography>
          <Typography sx={{mx: "1em",}}>
            {deliveryDates[1]} 10:39 AM
          </Typography>
        </CardContent>
        <Divider />
        <CardContent sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", my: "0.5em",}}>
          <Typography sx={{mx: "1em",}}>
            Location 1
          </Typography>
          <Typography sx={{mx: "1em",}}>
            {deliveryDates[0]} 2:42 PM
          </Typography>
        </CardContent>
      </Card>
      <Box sx={{display: "flex", flexDirection: "row",}}>
        <Typography sx={{textAlign: "left", my: "2em", mr:"1em",}}>
            Tracking number: 
        </Typography>
        <Typography sx={{textDecoration: "underline", textAlign: "left", my: "2em",}}>
          #01234567890123456789
        </Typography>
      </Box>
    </Container>
  );
}
  
export default TrackOrder;