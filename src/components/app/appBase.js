import React, { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Slide,
  Toolbar,
  useMediaQuery,
  useScrollTrigger,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// IMPORT :COMPONENTS
import Header from "../header";

function HideOnScroll({ children, window }) {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function AppBase(props) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [mode, setMode] = useState(false);

  useEffect(() => {
    setMode(prefersDarkMode ? true : false);
  }, [prefersDarkMode]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode ? "dark" : "light",
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar color="default">
          <Container>
            <Header isDarkMode={mode} toggleMode={(e) => setMode(e)} />
          </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container>
        <Box sx={{ my: 2 }}>
          <p>Contoh Text</p>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
