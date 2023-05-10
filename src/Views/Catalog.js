import Cards from "../components/Cards";
import { Typography, Container, Box } from "@mui/material";

function Catalog() {
  return (
    <div>
      <Box
        sx={{
          pt: 6,
        }}
      >
        <Typography variant="h2" align="center" color="#41337A" gutterBottom>
          Website Name
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          Short summary of beauty company. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Typography>
      </Box>
      <Container sx={{ textAlign: "left", color: "#41337A" }}>
        <Typography variant="h4">Lipstick</Typography>
        <Cards type="lipstick" />
        <Typography variant="h4">Mascara</Typography>
        <Cards type="mascara" />
        <Typography variant="h4">Nail Polish</Typography>
        <Cards type="nail_polish" />
        <Typography variant="h4">Foundation</Typography>
        <Cards type="foundation" />
        <Typography variant="h4">Blush</Typography>
        <Cards type="blush" />
      </Container>
    </div>
  );
}

export default Catalog;
