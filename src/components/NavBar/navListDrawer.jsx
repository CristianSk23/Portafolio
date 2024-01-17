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
import wllpaper from "../Design/wllpaper3.jpg";

const NavListDrawer = ({ navArrayLinks, setOpen }) => {
  return (
    <Box
      sx={{
        width: 250,
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${wllpaper})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
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
