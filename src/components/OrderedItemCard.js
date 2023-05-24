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
    <Card variant="outlined" sx={{display: "flex", mb: "2em",}}>
      <CardMedia sx={{width: "16em", objectFit: "scale-down", alignSelf:"flex-start", m: "1em",}} 
      component="img" image={orderedItem.imageUrl} alt={orderedItem.name} />
      <CardContent sx={{
        display: "flex",
        flexDirection: "column",
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
        <Typography variant="p">
          {orderedItem.price}
        </Typography>
        <Typography variant="p">
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