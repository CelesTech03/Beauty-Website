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
import { getMakeupByType } from "../api";
import "./styles/CardsCss.css";

function Cards({ type }) {
  const [cards, setCards] = useState([]);

  // Fetch specified type data by passing type to the API request
  useEffect(() => {
    getMakeupByType(type).then((response) => {
      setCards(response);
    });
  }, [type]);

  return (
    <div>
      <Container sx={{ py: 4 }} maxWidth="lg">
        <Grid container spacing={3}>
          {cards.map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={3}>
              <Card
                className="card"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
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
                  <Typography gutterBottom variant="h6" component="h2">
                    {card.name}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View</Button>
                  <Button size="small">Add To Bag</Button>
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
