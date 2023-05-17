import { Link } from 'react-router-dom';
import {
  Card,
  Typography,
  Box,
  CardContent,
  Button,
  Divider
} from "@mui/material";

const Summary = ({ title, icon }) => {
  const titles = ['Merchandise subtotal', 'Shipping & Handling', 'Tax']
  const prices = ['$35.75', 'TBD', 'TBD']

  return (
    <Box sx={{ display: 'flex', flexDirection: "column" }}>
      <Card>
        <CardContent>
          <Typography
            align="left"
            variant="h6"
            sx={{ fontWeight: 'bold' }}
            gutterBottom>
            Order Summary
          </Typography>

          <Box sx={{ display: 'flex' }}>
            <Box sx={{ mr: 8 }}>
              {titles.map((title, index) => (
                <Typography
                  key={index}
                  align='left'
                  variant="subtitle2"
                  gutterBottom>
                  {title}
                </Typography>
              ))}
            </Box>

            <Box>
              {prices.map((price, index) => (
                <Typography
                  key={index}
                  align='right'
                  variant="subtitle2"
                  sx={{ fontWeight: 'bold' }}
                  gutterBottom>
                  {price}
                </Typography>
              ))}
            </Box>
          </Box>
          <Divider variant="middle" sx={{ mt: 1 }} />
          <Box sx={{ mt: 1, display: 'flex', justifyContent: 'space-between' }}>
            <Typography
              align="left"
              variant="h6"
              sx={{ fontWeight: 'bold' }}
              gutterBottom>
              Estimated Total
            </Typography>
            <Typography
              align="left"
              variant="subtitle1"
              sx={{ fontWeight: 'bold' }}
              gutterBottom>
              $35.75
            </Typography>
          </Box>
          <Divider variant="middle" sx={{ mt: 1 }} />
          <Button
            variant="contained"
            sx={{ mt: 3, width: '100%', backgroundColor: "#ff4500" }}
            component={Link}
            to="/checkout"
          >
            {icon}
            <Typography variant="subitle1" sx={{ fontWeight: 'bold', ml: 1 }}>
              {title}
            </Typography>
          </Button>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Summary