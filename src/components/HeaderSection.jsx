/* eslint-disable react/prop-types */

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  useTheme,
  Switch,Container
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";

const HeaderSection = ({ toggleColorMode }) => {
  const theme = useTheme();

  return (
    <Box
      className="header_section"
      sx={{ backgroundColor: "black", color: "white" }}
    >
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{ backgroundColor: "black" }}
      >
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <img
              src="logo.png"
              alt="Logo"
              style={{ maxHeight: "60px", maxWidth: "200px" }}
            />
          </Box>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: "orange" }}
          >
            <MenuIcon />
          </IconButton>
          <Button sx={{ color: "white", "&:hover": { color: "orange" } }}>
            Home
          </Button>
          <Button sx={{ color: "white", "&:hover": { color: "orange" } }}>
            About
          </Button>
          <Button sx={{ color: "white", "&:hover": { color: "orange" } }}>
            Portfolio
          </Button>
          <Button sx={{ color: "white", "&:hover": { color: "orange" } }}>
            Service
          </Button>
          <Button sx={{ color: "white", "&:hover": { color: "orange" } }}>
            Blog
          </Button>
          <Button sx={{ color: "white", "&:hover": { color: "orange" } }}>
            Contact Us
          </Button>
          <Switch
            checked={theme.palette.mode === "dark"}
            onChange={toggleColorMode}
            color="default"
            inputProps={{ "aria-label": "Toggle dark mode" }}
            sx={{
              "& .MuiSwitch-switchBase.Mui-checked": {
                color: "orange",
              },
              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                backgroundColor: "orange",
              },
            }}
          />
        </Toolbar>
      </AppBar>
      <Container>  <Box className="banner_section layout_padding" sx={{ py: 8 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="h3"
              className="banner_text"
              sx={{ color: "white" }}
            >
              Hello Am <br />
              Mostapha Yasser
            </Typography>
            <Typography
              variant="h1"
              className="banner_taital"
              sx={{ color: "orange", fontWeight: "bold" }}
            >
              FrontEnd Developer
            </Typography>
          </Box>
          <Box
            className="social_icon"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <IconButton sx={{ color: "orange", "&:hover": { color: "white" } }}>
              <Facebook />
            </IconButton>
            <IconButton sx={{ color: "orange", "&:hover": { color: "white" } }}>
              <Twitter />
            </IconButton>
            <IconButton sx={{ color: "orange", "&:hover": { color: "white" } }}>
              <LinkedIn />
            </IconButton>
            <IconButton sx={{ color: "orange", "&:hover": { color: "white" } }}>
              <Instagram />
            </IconButton>
          </Box>
        </Box>
        <Box className="video_bt" sx={{ textAlign: "center", mt: 4 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "orange",
              color: "black",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "white",
                color: "orange",
              },
            }}
          >
            READ MORE
          </Button>
        </Box>
      </Box></Container>
    
    </Box>
  );
};

export default HeaderSection;
