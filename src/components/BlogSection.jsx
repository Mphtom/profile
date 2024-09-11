/* eslint-disable react/prop-types */
import { Box, Typography, Grid, Card, CardContent, Button,Container } from '@mui/material';

const BlogPost = ({ date, title, content, backgroundImage }) => (
  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <Box sx={{ height: 200, backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', position: 'relative' }}>
      <Typography variant="h6" sx={{ position: 'absolute', top: 10, left: 10, color: 'white', backgroundColor: 'rgba(0,0,0,0.6)', padding: '5px 10px', borderRadius: 1 }}>
        {date}
      </Typography>
      <Typography variant="h5" sx={{ position: 'absolute', bottom: 10, left: 10, color: 'white', fontWeight: 'bold' }}>
        {title}
      </Typography>
    </Box>
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {content}
      </Typography>
    </CardContent>
  </Card>
);

const BlogSection = () => {
  const blogPosts = [
    {
      date: 'Sep 09',
      title: 'Enhancing Front-End Development',
      content: 'Explore the latest trends and techniques in front-end development, focusing on React and Material UI to build robust and responsive interfaces.',
      backgroundImage: 'image1.jpg'
    },
    {
      date: 'Sep 08',
      title: 'Mastering UI/UX Design',
      content: 'Delve into the principles of UI/UX design and learn how to create intuitive and user-friendly interfaces that enhance the overall user experience.',
      backgroundImage: 'image2.jpg'
    },
    {
      date: 'Sep 07',
      title: 'Web Performance Optimization',
      content: 'Learn the best practices for optimizing web performance, from minimizing load times to improving overall site speed for better user retention.',
      backgroundImage: 'imag5.jpg'
    },
  ];

  return (
    <Container><Box className="blog_section layout_padding" sx={{ padding: '50px 0' }}>
        <Typography variant="h2" align="center" gutterBottom>
          Latest <span style={{ color: 'primary.main' }}>Articles</span>
        </Typography>
        <Typography  sx={{ padding: '50px 0' }}variant="body1" align="center" gutterBottom>
          Stay updated with our latest articles on front-end development, UI/UX design, and web performance optimization.
        </Typography>
        <Grid container spacing={3}>
          {blogPosts.map((post, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <BlogPost {...post} />
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
    </Box></Container>
    
  );
};

export default BlogSection;
