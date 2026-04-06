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

const AMBER = "#F5A623";

const NavBar = ({ navArrayLinks }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const urlPathJobs = (path) => {
    navigate("/" + path);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          background: "rgba(20,21,26,0.92)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ px: { xs: 2, sm: 3 }, minHeight: "60px !important" }}>
          {/* Hamburger */}
          <IconButton
            color="inherit"
            size="large"
            onClick={() => setOpen(true)}
            sx={{
              mr: 1,
              color: "rgba(255,255,255,0.5)",
              "&:hover": { color: "#fff", bgcolor: "rgba(255,255,255,0.05)" },
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* Brand */}
          <Typography
            component="a"
            href={isHome ? "#home" : "/#home"}
            sx={{
              flexGrow: 1,
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "1.4rem",
              letterSpacing: "0.1em",
              color: AMBER,
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            CC
          </Typography>

          {/* Desktop links — hidden on mobile (this whole NavBar is mobile-only anyway) */}
          <Box sx={{ display: "flex", gap: 0.5 }}>
            {navArrayLinks.map((item) =>
              isHome ? (
                <Button
                  key={item.title}
                  component="a"
                  href={item.path}
                  sx={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.7rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.45)",
                    borderRadius: "8px",
                    px: 1.5,
                    "&:hover": {
                      color: AMBER,
                      bgcolor: "rgba(245,166,35,0.08)",
                    },
                  }}
                >
                  {item.title}
                </Button>
              ) : (
                <Button
                  key={item.title}
                  onClick={() => urlPathJobs(item.path)}
                  sx={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.7rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.45)",
                    borderRadius: "8px",
                    px: 1.5,
                    "&:hover": {
                      color: AMBER,
                      bgcolor: "rgba(245,166,35,0.08)",
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
          "& .MuiDrawer-paper": {
            bgcolor: "#1C1D24",
            borderRight: "1px solid rgba(255,255,255,0.07)",
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
