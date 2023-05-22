import Cards from "../components/Cards";
import { Typography, Container, Box } from "@mui/material";

function Homepage() {
  return (
    <div>
      <Box
        sx={{
          pt: 6,
        }}
      >
        <Typography
          variant="h3"
          align="center"
          color="#41337A"
          gutterBottom
          sx={{
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.1rem',
          }}>
          Get Cute With Beautify
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          Let Beautify to become your trusted companion on your beauty journey
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
        <Typography variant="h4">Bronzer</Typography>
        <Cards type="bronzer" />
        <Typography variant="h4">Blush</Typography>
        <Cards type="blush" />
      </Container>
    </div>
  );
}

export default Homepage;
