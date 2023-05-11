import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { getProductByType } from "../api";
import { useNavigate } from "react-router-dom";
import "./styles/CardsCss.css";

function Cards({ type }) {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  // Fetch specified type data by passing type to the API request
  useEffect(() => {
    getProductByType(type).then((response) => {
      setCards(response);
    });
  }, [type]);

  // Navigate to the product details page when a card is clicked
  const handleCardClick = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div>
      <Container sx={{ py: 4 }} maxWidth="lg">
        <Grid container spacing={3}>
          {cards.map((card) => (
            <Grid item key={card.id} md={2.4}>
              <Card
                className="card"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
                onClick={() => handleCardClick(card.id)}
              >
                <CardMedia
                  component="img"
                  image={card.image_link}
                  alt={card.name}
                  sx={{
                    height: "225px",
                    objectFit: "scale-down",
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="text.secondary"
                  >
                    {card.brand}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="subtitle2"
                    component="h2"
                    fontWeight="bold"
                  >
                    {card.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontWeight="bold"
                  >
                    {/* Default $ sign if API price_sign is null */}
                    {card.price_sign || "$"}
                    {card.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    sx={{
                      border: "1px solid black",
                      width: "100%",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    Add To Bag
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Cards;
