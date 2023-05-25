import Cards from "../components/Cards";
import { Typography, Container, Box } from "@mui/material";
import makeupBanner from "../assets/makeupBanner.jpeg";

function Homepage() {
  return (
    <div>
      <Box
        sx={{
          pt: 2,
        }}
      >
        <Typography
          variant="h2"
          align="center"
          color="#41337A"
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".1rem",
          }}
        >
          Get Cute With Beautify
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          Let Beautify become your trusted companion on your beauty journey.
        </Typography>
      </Box>
      <div>
        <img
          src={makeupBanner}
          alt="Makeup Banner"
          style={{ width: "100%", maxWidth: "800px" }}
        />
      </div>
      <Container sx={{ textAlign: "left", color: "#41337A" }}>
        <Typography
          variant="h3"
          align="center"
          color="#41337A"
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".1rem",
            pt: 5,
          }}
        >
          Shop by category
        </Typography>
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
      <footer style={{ textAlign: "center", marginBottom: "20px" }}>
        <Typography variant="subtitle1">Beautify, Inc. 2023</Typography>
      </footer>
    </div>
  );
}

export default Homepage;
