/* eslint-disable react/prop-types */
import { Box, Typography, Grid, Card, CardContent, CardMedia, Container, Button } from '@mui/material';
import { Code, WebAsset, Html, Language } from '@mui/icons-material';

const ServiceCard = ({ title, icon: Icon }) => (
  <Card 
    sx={{ 
      textAlign: 'center', 
      height: '100%',
      backgroundColor: 'black',
      color: 'white',
      transition: 'all 0.3s ease-in-out',
      borderRadius: '50%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 2,
      '&:hover': {
        transform: 'translateY(-10px)',
        boxShadow: '0 4px 20px rgba(255, 165, 0, 0.4)',
      },
    }}
  >
    <CardMedia
      component="div"
      sx={{ 
        padding: 2,
        transition: 'all 0.3s ease-in-out',
        '&:hover': { transform: 'scale(1.1)' }
      }}
    >
      <Icon sx={{ color: 'orange', fontSize: '4rem' }} />
    </CardMedia>
    <CardContent>
      <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
        {title}
      </Typography>
    </CardContent>
  </Card>
);

const services = [
  { title: 'React', icon: Code },
  { title: 'Next.js', icon: WebAsset },
  { title: 'HTML and CSS', icon: Html },
  { title: 'JavaScript', icon: Language },
];

const ServicesSection = () => {
  return (
    <Box className="services_section layout_padding" sx={{ backgroundColor: '#f5f5f5', py: 8 }}>
      <Container>  <Typography variant="h2" align="center" gutterBottom sx={{ color: 'black', fontWeight: 'bold', mb: 4 }}>
          My <span style={{ color: 'orange' }}>Services</span>
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <ServiceCard {...service} />
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
            Read More
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;