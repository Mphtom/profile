import { Box, Typography, TextField, Button, Container, Grid } from '@mui/material';

const ContactSection = () => {
  return (
    <Box className="contact_section layout_padding">
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          My <span style={{ color: 'primary.main' }}>Contact</span>
        </Typography>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8}>
            <form>
              <TextField fullWidth margin="normal" label="Your Name" variant="outlined" />
              <TextField fullWidth margin="normal" label="Your Email" variant="outlined" />
              <TextField fullWidth margin="normal" label="Your Phone" variant="outlined" />
              <TextField
                fullWidth
                margin="normal"
                label="Your Message"
                variant="outlined"
                multiline
                rows={4}
              />
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
            send now
          </Button>
        </Box>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;
