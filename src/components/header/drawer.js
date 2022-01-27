import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Box, Divider, List, ListItem, ListItemText } from "@mui/material";

// IMPORT : COMPONENTS
import RenderControlTheme from "./controlTheme";

export default function Drawer(props) {
  return (
    <Fragment>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onKeyDown={props.toggleDrawer(false)}
      >
        <List>
          <ListItem
            key="theme"
            secondaryAction={
              <RenderControlTheme
                isDarkMode={props.isDarkMode}
                toggleMode={(e) => props.toggleMode(e)}
              />
            }
            className="control-theme"
          >
            <ListItemText primary="Tema" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <NavLink
            to="/test"
            style={{ textDecoration: "none", color: "unset" }}
            onClick={props.toggleDrawer(false)}
          >
            <ListItem button key="News">
              <ListItemText primary="News" />
            </ListItem>
          </NavLink>
          <ListItem button key="Trivia">
            <ListItemText primary="Trivia" />
          </ListItem>
          <ListItem button key="Chord">
            <ListItemText primary="Chord" />
          </ListItem>
        </List>
      </Box>
    </Fragment>
  );
}
