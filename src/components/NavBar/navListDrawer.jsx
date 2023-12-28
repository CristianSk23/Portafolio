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

const NavListDrawer = ({ navArrayLinks }) => {
  return (
    <Box sx={{ width: 250, bgcolor: "lightBlue" }}>
      <List>
        {navArrayLinks.map((item) => (
          <ListItem disablePadding key={item.title}>
            <ListItemButton component="a" href={item.path}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.title}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default NavListDrawer;
