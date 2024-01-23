import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import NavListDrawer from "./navListDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

const NavBar = ({ navArrayLinks }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const urlPathJobs = (index) => {
    navigate("/" + navArrayLinks[index].path);
  };

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            color="inherit"
            size="large"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "flex", sm: "none" } }}
          >
            <MenuIcon size="large" />
          </IconButton>
          {location.pathname === "/" ? (
            <Typography
              variant="h6"
              sx={{ flexGrow: 1 }}
              color="inherit"
              component="a"
              href="#home"
            >
              Inicio
            </Typography>
          ) : (
            <Typography
              variant="h6"
              sx={{ flexGrow: 1 }}
              color="inherit"
              component="a"
              href="/#home"
            >
              Inicio
            </Typography>
          )}

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navArrayLinks.map((item, index) =>
              location.pathname === "/" ? (
                <Button
                  color="inherit"
                  key={item.title}
                  component="a"
                  href={item.path}
                >
                  {item.title}
                </Button>
              ) : (
                <Button
                  color="inherit"
                  key={item.title}
                  onClick={() => urlPathJobs(index)}
                >
                  {item.title}
                </Button>
              )
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        <NavListDrawer navArrayLinks={navArrayLinks} setOpen={setOpen} />
      </Drawer>
    </>
  );
};

export default NavBar;

{
  /* <Button
                color="inherit"
                key={item.title}
                onClick={
                  location.pathname === "/" ? urlPath : () => urlPathJobs(index)
                }
              >
                {item.title}
              </Button> */
}
