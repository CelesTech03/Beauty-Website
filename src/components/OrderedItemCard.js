import {
  Container,
  Typography,
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import { Link } from 'react-router-dom';

function OrderedItemCard({ orderedItem }) {
  return (
    <Card variant="outlined" sx={{display: "flex", mb: "20px",}}>
      <CardMedia sx={{width: "180px", objectFit: "scale-down", alignSelf:"flex-start",}} 
      component="img" image={orderedItem.imageUrl} alt={orderedItem.name} />
      <CardContent sx={{
        display: "flex",
        flexDirection: "column",
        "& > :not(style)": {
          textAlign: "left",
        },
      }}>
        <Typography component="h5">
          {orderedItem.name}
        </Typography>
        <Typography component="p">
          {orderedItem.brand}
        </Typography>
        <Typography component="p">
          {orderedItem.price}
        </Typography>
        <Typography component="p">
          Order placed on {orderedItem.dateOrdered}
        </Typography>
      </CardContent>
      <CardActions sx={{ml: "auto",}}>
        <Button component={Link} to={"../track-order/" + orderedItem.id}>
          Track Order
        </Button>
      </CardActions>
    </Card>
  );
}
  
export default OrderedItemCard;