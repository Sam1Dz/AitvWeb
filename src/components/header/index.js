import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import {
  IconButton,
  Toolbar,
  Box,
  Button,
  Drawer,
  Divider,
} from "@mui/material";

// IMPORT : COMPONENTS
import RenderDrawer from "./drawer";
import RenderControlTheme from "./controlTheme";

// IMPORT : ICONS
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

// IMPORT : IMAGES
import AITVLogo from "../../assets/images/logo-long.png";

export default function Header(props) {
  const [openDrawer, setOpenDrawer] = useState(false);

  /* FUNCTION COMPONENTS */
  const toggleDrawer = (isOpen) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "tab" || event.key === "shift")
    ) {
      return;
    }

    setOpenDrawer(isOpen);
  };

  return (
    <Fragment>
      <Toolbar>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        <Link to="/">
          <img
            src={AITVLogo}
            className="logo"
            alt="logo-long"
            style={{ filter: `invert(${props.isDarkMode ? 1 : 0})` }}
          />
        </Link>

        {/* MENU NAVIGATION */}
        <Box sx={{ flexGrow: 1 }} />
        <Box
          sx={{ display: { xs: "none", md: "flex" } }}
          style={{ marginLeft: 12 }}
        >
          <Link to="/test" style={{ textDecoration: "none", color: "unset" }}>
            <Button
              key="News"
              sx={{ my: 2, color: "inherit", display: "block" }}
            >
              News
            </Button>
          </Link>
          <Button
            key="Trivia"
            sx={{ my: 2, color: "inherit", display: "block" }}
          >
            Trivia
          </Button>
          <Button
            key="Chord"
            sx={{ my: 2, color: "inherit", display: "block" }}
          >
            Chord
          </Button>
        </Box>

        {/* SEARCH */}
        <Box sx={{ display: { xs: "flex" } }}>
          <IconButton size="large" aria-label="search article" color="inherit">
            <SearchIcon />
          </IconButton>
        </Box>

        {/* RIGHT NAVIGATION BAR */}
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            style={{ marginLeft: 12, marginRight: 12 }}
          />
          <RenderControlTheme
            isDarkMode={props.isDarkMode}
            toggleMode={(e) => props.toggleMode(e)}
          />
        </Box>
      </Toolbar>

      {/* DRAWER */}
      <Drawer
        anchor="left"
        open={openDrawer}
        onOpen={toggleDrawer(true)}
        onClose={toggleDrawer(false)}
      >
        <RenderDrawer
          toggleDrawer={(isOpen) => toggleDrawer(isOpen)}
          isDarkMode={props.isDarkMode}
          toggleMode={(e) => props.toggleMode(e)}
        />
      </Drawer>
    </Fragment>
  );
}
