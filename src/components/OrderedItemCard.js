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
    <Card variant="outlined" sx={{display: "flex", flexDirection: {xs: "column", md: "row"}, mb: "2em",}}>
      <CardMedia sx={{width: "16em", objectFit: "scale-down", alignSelf:"flex-start", m: "1em",}} 
      component="img" image={orderedItem.imageUrl} alt={orderedItem.name} />
      <CardContent sx={{
        display: "flex",
        flexDirection: "column",
        "& > :not(style)": {
          textAlign: "left",
        },
      }}>
        <Typography variant="h5" sx={{mt: "1em",}}>
          {orderedItem.name}
        </Typography>
        <Typography variant="p" sx={{mt: "0.5em",}}>
          {orderedItem.brand}
        </Typography>
        <Typography variant="p">
          {orderedItem.price}
        </Typography>
        <Typography variant="p">
          Order placed on {orderedItem.dateOrdered}
        </Typography>
      </CardContent>
      <CardActions sx={{ml: "auto", display: "flex", alignItems: {xs: ""},}}>
        <Button variant="contained" component={Link} to={"../track-order/" + orderedItem.id} sx={{
          mt: "1em",
          mb: {xs: "2em", md: "1em"},
          mr: "2em",
          height: "4em",
          width: '100%',
          backgroundColor: "#ff4500",
        }}>
          <Typography sx={{mx: {xs: "2em", md: "3em"}, my: "2em",}}>
            Track Order
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
}
  
export default OrderedItemCard;