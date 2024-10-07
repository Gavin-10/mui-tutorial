import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import { AccessTime } from '@mui/icons-material'
import { createTheme, ThemeProvider } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          }
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 9,
          }
        }
      ]
    }
  },
})

function TourCard({tour}) {
  const navigate = useNavigate();
  return(
    <Grid item xs={12} sm={6} lg={3} md={4}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3} sx={{cursor: "pointer"}} onClick={() => navigate(":1")}>
          <img style={{width: "100%", height: "5rem", objectFit: "cover"}} src={tour.image} alt='' />
          <Box paddingX={1}>
            <Typography component="h2" variant="subtitle1">
              {tour.name}
            </Typography>

            <Box sx={{display: "flex", alignItems: "center"}}>
              <AccessTime sx={{width: 11}}/>
              <Typography marginLeft={0.5} variant='body2' component="p">{tour.duration} Hours</Typography>
            </Box>

            <Box marginTop={3} sx={{display: "flex", alignItems: "center"}}>
              <Rating size='small' precision={0.5} name='read-only' value={tour.rating} readOnly/>
              <Typography marginLeft={0.5} variant='body2' component="p">{tour.rating}</Typography>
              <Typography marginLeft={1.5} variant='body2' component="p">({tour.numberOfReviews} reviews)</Typography>
            </Box>

            <Typography variant='h6' component="h3" marginTop={0}>From C ${tour.price}</Typography>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  )
}

export default TourCard