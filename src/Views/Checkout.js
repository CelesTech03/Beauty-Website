import {
  Card,
  CardMedia,
  Typography,
  Box,
  Container,
  Grid,
  CardContent,
  Button,
  Divider,
  TextField
} from "@mui/material";

const Checkout = () => {
  return (
    <Container sx={{mb: 5}}>
      <Typography variant="h4" align="left" sx={{ mt: 2 }} gutterBottom >
        Checkout
      </Typography>

      <Divider sx={{ mb: 1, background: '#838383', borderBottomWidth: 1.5 }} />

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box 
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1},
          }}>
          <Card sx={{mt: 1}}>
            <Typography variant="h6" align='left' sx={{ ml: 2.5, mt: 2, mb: -3 }}>
              Shipping Address
            </Typography>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <TextField label="Country/Region" variant="standard" sx={{width: '100%'}} />
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'flex-start'}}>
                <TextField label="First name" variant="standard" />
                <TextField label="Last name" variant="standard" />
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'flex-start'}}>
                <TextField label="Address" variant="standard" sx={{width: '100%'}} />
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <TextField label="Apartment, suite, etc. (optional)" variant="standard" sx={{width: '100%'}}/>
              </Box>
              <Box>
                <TextField label="City" variant="standard" />
                <TextField label="State" variant="standard" />
                <TextField label="ZIP code" variant="standard" />
              </Box>
              <Box>
                <TextField label="Phone" variant="standard" sx={{width: '100%'}}/>
              </Box>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{backgroundColor: 'pink'}}>
          put order summary here, like in cart page
        </Box>

        {/* <Box sx={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'column' }}>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              Billing Address
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{ mt: 3, width: '100%', backgroundColor: "#ff4500" }}
          >
            <Typography variant="subitle1" sx={{ fontWeight: 'bold', ml: 1 }}>
              Place Order
            </Typography>
          </Button>
        </Box> */}
      </Box>

    </Container>
  )
}

export default Checkout