import TourCard from "../components/TourCard"
import cities from "../data.json"
import { Typography } from "@mui/material"
import { Container } from "@mui/material"
import { Grid } from "@mui/material"

function Home() {
  return(
      <Container sx={{ marginY: 5 }}>
        {cities.map( city => (
          <>
            <Typography variant="h4" component='h2' marginTop={5} marginBottom={3}>
              Top {city.name} Tours
            </Typography>

            <Grid container spacing={5}>
              {city.tours.map( (tour, index) => (
                <TourCard key={index} tour={tour} />
              ))}
            </Grid>
          </>
        ))}
      </Container>
  )
}

export default Home