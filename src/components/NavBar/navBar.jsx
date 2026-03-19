import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import NavListDrawer from "./navListDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const brandSx = {
  flexGrow: 1,
  fontWeight: 800,
  fontSize: "1.3rem",
  letterSpacing: "-0.01em",
  background: "linear-gradient(135deg, #2563EB, #7C3AED)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  textDecoration: "none",
  cursor: "pointer",
};

const NavBar = ({ navArrayLinks }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const urlPathJobs = (index) => {
    navigate("/" + navArrayLinks[index].path);
  };

  const isHome = location.pathname === "/";

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          background: "rgba(13, 17, 23, 0.88)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ px: { xs: 2, sm: 4 }, minHeight: "64px !important" }}>
          {/* Mobile menu button */}
          <IconButton
            color="inherit"
            size="large"
            onClick={() => setOpen(true)}
            sx={{
              display: { xs: "flex", sm: "none" },
              mr: 1,
              cursor: "pointer",
              color: "text.secondary",
              "&:hover": { color: "text.primary", bgcolor: "rgba(255,255,255,0.05)" },
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* Brand */}
          <Typography
            component="a"
            href={isHome ? "#home" : "/#home"}
            sx={brandSx}
          >
            CC
          </Typography>

          {/* Desktop nav links */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 0.5 }}>
            {navArrayLinks.map((item, index) =>
              isHome ? (
                <Button
                  key={item.title}
                  component="a"
                  href={item.path}
                  sx={{
                    color: "text.secondary",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    borderRadius: 2,
                    transition: "color 0.2s, background 0.2s",
                    "&:hover": {
                      color: "text.primary",
                      bgcolor: "rgba(255,255,255,0.06)",
                    },
                  }}
                >
                  {item.title}
                </Button>
              ) : (
                <Button
                  key={item.title}
                  onClick={() => urlPathJobs(index)}
                  sx={{
                    color: "text.secondary",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    borderRadius: 2,
                    transition: "color 0.2s, background 0.2s",
                    "&:hover": {
                      color: "text.primary",
                      bgcolor: "rgba(255,255,255,0.06)",
                    },
                  }}
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
        sx={{
          display: { xs: "flex", sm: "none" },
          "& .MuiDrawer-paper": {
            bgcolor: "#0D1117",
            borderRight: "1px solid rgba(255,255,255,0.08)",
            minWidth: 240,
          },
        }}
      >
        <NavListDrawer navArrayLinks={navArrayLinks} setOpen={setOpen} />
      </Drawer>
    </>
  );
};

export default NavBar;
