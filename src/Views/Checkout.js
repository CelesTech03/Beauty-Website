import { useState } from "react";
import {
  Card,
  Typography,
  Box,
  Container,
  CardContent,
  Button,
  Divider,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel
} from "@mui/material";

import Summary from "../utils/Summary";

const Checkout = () => {
  const [value, setValue] = useState('same')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  // reusable form for shipping & billing address
  const AddressForm = ({ name }) => {
    return (
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 0.5 },
        }}>
        <Card>
          <Typography variant="h6" align='left' sx={{ ml: 2.5, mt: 2, mb: -3 }}>
            {name}
          </Typography>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
              <TextField label="Country/Region" variant="standard" sx={{ width: '100%' }} />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
              <TextField label="First name" variant="standard" sx={{ width: '100%' }} />
              <TextField label="Last name" variant="standard" sx={{ width: '100%' }} />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
              <TextField label="Address" variant="standard" sx={{ width: '100%' }} />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
              <TextField label="Apartment, suite, etc. (optional)" variant="standard" sx={{ width: '100%' }} />
            </Box>
            <Box>
              <TextField label="City" variant="standard" />
              <TextField label="State" variant="standard" />
              <TextField label="ZIP code" variant="standard" />
            </Box>
            <Box>
              <TextField label="Phone" variant="standard" sx={{ width: '100%' }} />
            </Box>
          </CardContent>
        </Card>
      </Box>
    )

  }

  return (
    <Container sx={{ mb: 5 }}>
      <Typography variant="h4" align="left" sx={{ mt: 2 }} gutterBottom >
        Checkout
      </Typography>

      <Divider sx={{ mb: 1, background: '#838383', borderBottomWidth: 1.5 }} />

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Box>
          <Box sx={{ mb: 4 }}>
            <AddressForm name="Shipping Address" />
          </Box>

          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 0.5 },
            }}>
            <Card sx={{ mt: 1 }}>
              <Typography variant="h6" align='left' sx={{ ml: 2.5, mt: 2, mb: -3 }}>
                Payment
              </Typography>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <TextField label="Card number" variant="standard" sx={{ width: '100%' }} />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <TextField label="Name on card" variant="standard" sx={{ width: '100%' }} />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <TextField label="Expiration date (MM / YY)" variant="standard" sx={{ width: '100%' }} />
                  <TextField label="Security code" variant="standard" sx={{ width: '100%' }} />
                </Box>
              </CardContent>
            </Card>
          </Box>

          <Box>
            <CardContent
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                flexDirection: 'column'
              }}>
              <Typography variant="h6" >
                Billing Address
              </Typography>
              <Typography variant="subtitle1" >
                Select the address that matches your card or payment method.
              </Typography>

              <FormControl sx={{ mt: 1, mb: 1 }}>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={value}
                  onChange={handleChange}
                  sx={{ display: 'flex', flexDirection: 'row' }}
                >
                  <FormControlLabel value="same" control={<Radio />} label="Same as shipping address" />
                  <FormControlLabel value="different" control={<Radio />} label="	Use a different billing address" />
                </RadioGroup>
              </FormControl>
              {value === 'different' ? <AddressForm /> : ""}
            </CardContent>
          </Box>
        </Box>
        <Box sx={{width: '40%'}}>
          <Summary title="Pay now" />
        </Box>
      </Box>
    </Container>
  )
}

export default Checkout