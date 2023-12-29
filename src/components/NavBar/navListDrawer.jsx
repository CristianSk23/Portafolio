import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

const NavListDrawer = ({ navArrayLinks, setOpen }) => {
  return (
    <Box sx={{ width: 250, bgcolor: "#ff5722" }}>
      <List>
        {navArrayLinks.map((item) => (
          <ListItem disablePadding key={item.title}>
            <ListItemButton
              component="a"
              href={item.path}
              onClick={() => setOpen(false)}
            >
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
