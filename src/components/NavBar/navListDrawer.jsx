import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import React from "react";
import { Drafts } from "@mui/icons-material";

const NavListDrawer = () => {
  return (
    <Box sx={{ width: 250, bgcolor: "lightBlue" }}>
      <nav>
        <List>
          <ListItem>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Drafts />
            </ListItemIcon>
            <ListItemText primary="Drafts " />
          </ListItem>
        </List>
      </nav>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#SobreMi">
            <ListItemText>Sobre mi</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#Trabajos">
            <ListItemText>Trabajos</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#Contáctame">
            <ListItemText>Contáctame</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default NavListDrawer;
