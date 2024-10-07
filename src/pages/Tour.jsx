import { Box, Container, Typography } from "@mui/material";
import ImageCollage from "../components/ImageCollage";


function Tour() {
  return(
    <Container sx={{width: 900}}>
      <Typography variant="h3" component='h1' marginTop={3}>
        Explore The World In Vegas
      </Typography>
      <Box marginTop={3} sx={{display: "flex"}}>
        <img src="https://media-cdn.tripadvisor.com/media/photo-m/1280/2a/34/2d/28/caption.jpg" alt="" height={400}/>
        <ImageCollage />
      </Box>
    </Container>
  )
}

export default Tour