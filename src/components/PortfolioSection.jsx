/* eslint-disable react/prop-types */
import { Box, Typography, Grid, Card, CardContent, Button, Container } from '@mui/material';

const PortfolioItem = ({ image, alt }) => (
  <Card sx={{ position: 'relative', overflow: 'hidden' }}>
  <img src={image} alt={alt} style={{ width: '100%', height: 'auto', display: 'block' }} />
  <CardContent
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      opacity: 0,
      '&:hover': { opacity: 1, backgroundColor: 'rgba(0,0,0,0.7)' },
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'opacity 0.3s ease-in-out',
    }}
  >
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button 
            variant="contained" 
            sx={{ 
              backgroundColor: 'orange', 
              color: 'black', 
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: 'black',
                color: 'orange',
              }
            }}
          >
            Read More
          </Button>
        </Box> 
         </CardContent>
</Card>
);

const PortfolioSection = () => {
  const portfolioItems = [
    { image: 'imag5.jpg', alt: 'Portfolio 1' },
    { image: 'image2.jpg', alt: 'Portfolio 2' },
    { image: 'image3jpg.jpg', alt: 'Portfolio 3' },
    { image: 'image2.jpg', alt: 'Portfolio 4' },
    { image: 'imag5.jpg', alt: 'Portfolio 5' },
  ];

  return (
    <Box className="portfolio_section layout_padding">
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          My <span style={{ color: 'primary.main' }}>Portfolio</span>
        </Typography>
        <Grid container spacing={3}>
          {portfolioItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <PortfolioItem {...item} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button 
            variant="contained" 
            sx={{ 
              backgroundColor: 'orange', 
              color: 'black', 
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: 'black',
                color: 'orange',
              }
            }}
          >
            see more
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default PortfolioSection;