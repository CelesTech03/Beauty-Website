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
      <Typography variant="h4" textAlign="left" gutterBottom>
        Track Order
      </Typography>
      <Divider />

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

      <Typography variant="h4" textAlign="left">
          Delivery History
      </Typography>
      <Card variant="outlined" sx={{display: "flex", flexDirection: "column",}}>
        <CardContent sx={{display: "flex", flexDirection: "row", justifyContent: "space-between",}}>
          <Typography>
            Location 3
          </Typography>
          <Typography>
            {deliveryDates[2]} 4:31 PM
          </Typography>
        </CardContent>
        <CardContent sx={{display: "flex", flexDirection: "row", justifyContent: "space-between",}}>
          <Typography>
            Location 2
          </Typography>
          <Typography>
            {deliveryDates[1]} 10:39 AM
          </Typography>
        </CardContent>
        <CardContent sx={{display: "flex", flexDirection: "row", justifyContent: "space-between",}}>
          <Typography>
            Location 1
          </Typography>
          <Typography>
            {deliveryDates[0]} 2:42 PM
          </Typography>
        </CardContent>
      </Card>
      <Box sx={{display: "flex", flexDirection: "row",}}>
        <Typography sx={{textAlign: "left", my: "1em", mr:"1em",}}>
            Tracking number: 
        </Typography>
        <Typography sx={{textDecoration: "underline", textAlign: "left", my: "1em",}}>
          #XXXXXXXXXXXXXXXXXXXX
        </Typography>
      </Box>
    </Container>
  );
}
  
export default TrackOrder;