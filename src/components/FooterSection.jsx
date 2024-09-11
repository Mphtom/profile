import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import { Place, Phone, Email } from '@mui/icons-material';

const FooterSection = () => {
  return (
    <Box 
      className="footer_section" 
      sx={{ 
        backgroundColor: 'black', 
        color: 'white', 
        py: 4, 
        mt:2,
        textAlign: 'center' 
      }}
    >
        <Typography variant="h6" sx={{ mb: 2, color: 'orange' }}>
          Contact Us
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Tooltip title="Our Location" arrow>
            <IconButton color="inherit" sx={{ color: 'orange', '&:hover': { color: 'white', backgroundColor: 'orange' } }}>
              <Place fontSize="large" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Call Us" arrow>
            <IconButton color="inherit" sx={{ color: 'orange', '&:hover': { color: 'white', backgroundColor: 'orange' } }}>
              <Phone fontSize="large" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Email Us" arrow>
            <IconButton color="inherit" sx={{ color: 'orange', '&:hover': { color: 'white', backgroundColor: 'orange' } }}>
              <Email fontSize="large" />
            </IconButton>
          </Tooltip>
        </Box>
    </Box>
  );
};

export default FooterSection;
