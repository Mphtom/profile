import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";

import HeaderSection from "./components/HeaderSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import BlogSection from "./components/BlogSection";

const App = () => {
  const [mode, setMode] = useState("light");

  const theme = createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: {
              main: "#3f51b5",
            },
            secondary: {
              main: "#f50057",
            },
          }
        : {
            primary: {
              main: "#bb86fc",
            },
            secondary: {
              main: "#03dac6",
            },
          }),
    },
  });

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        {" "}
        <Box
          sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
        >
          <HeaderSection toggleColorMode={toggleColorMode} />
          <ServicesSection />
          <PortfolioSection />
          <BlogSection />
          <ContactSection />
          <FooterSection />
        </Box>
    </ThemeProvider>
  );
};

export default App;


