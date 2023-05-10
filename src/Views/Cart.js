import Cards from "../components/Cards"
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const Cart = () => {
  return (
    <Container>
      <Typography variant="h3" sx={{mt: 2}}>
        Shopping cart page
      </Typography>
      <Box sx={{
        display: "flex",
        alignItems: 'flex-start',
        flexDirection: 'column'
      }}>
        <p>henlo1</p>
        <p>djdjgksjdfkjs;</p>
        {/* <Cards /> */}
      </Box>
    </Container>
  );
}

export default Cart;