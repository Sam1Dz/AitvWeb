import React, { Fragment } from "react";
import { Box, Divider, List, ListItem, ListItemText } from "@mui/material";

// IMPORT : COMPONENTS
import RenderControlTheme from "./controlTheme";

export default function Drawer(props) {
  return (
    <Fragment>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        // onClick={props.toggleDrawer(false)}
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
          <ListItem button key="News">
            <ListItemText primary="News" />
          </ListItem>
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
