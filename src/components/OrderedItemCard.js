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

function OrderedItemCard({ orderedItem }) {
  return (
    <Card sx={{display: "flex",}}>
      <CardMedia sx={{height: "225px", objectFit: "scale-down",}} 
      component="img" image={orderedItem.imageUrl} alt="eyeshadow" />
      <CardContent sx={{display: "flex", flexDirection: "column",}}>
        <Typography>
          {orderedItem.brand}
        </Typography>
        <Typography>
          {orderedItem.name}
        </Typography>
        <Typography>
          {orderedItem.price}
        </Typography>
        <Typography>
          {orderedItem.dateOrdered}
        </Typography>
      </CardContent>
      <CardActions>
        <Button>
          Track Order
        </Button>
      </CardActions>
    </Card>
  );
}
  
export default OrderedItemCard;