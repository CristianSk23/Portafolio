import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

const AMBER = "#F5A623";
const MUTED = "#7A7D8C";
const BORDER = "rgba(255,255,255,0.07)";

const NavListDrawer = ({ navArrayLinks, setOpen }) => {
  return (
    <Box sx={{ width: 240 }}>
      {/* Brand header */}
      <Box
        sx={{
          px: 3,
          py: 2.5,
          borderBottom: `1px solid ${BORDER}`,
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "1.5rem",
            letterSpacing: "0.1em",
            color: AMBER,
          }}
        >
          CC
        </Typography>
        <Typography
          sx={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.58rem",
            color: MUTED,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            mt: 0.3,
          }}
        >
          Cristian Castaño
        </Typography>
      </Box>

      <List sx={{ pt: 1.5 }}>
        {navArrayLinks.map((item) => (
          <ListItem disablePadding key={item.title}>
            <ListItemButton
              component="a"
              href={item.path}
              onClick={() => setOpen(false)}
              sx={{
                px: 3,
                py: 1.4,
                cursor: "pointer",
                transition: "all 0.18s",
                "&:hover": {
                  bgcolor: "rgba(245,166,35,0.08)",
                  "& .MuiListItemIcon-root": { color: AMBER },
                  "& .nav-label": { color: "#E8EAF0" },
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 34,
                  color: MUTED,
                  transition: "color 0.18s",
                  "& svg": { fontSize: "1rem" },
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.title}
                className="nav-label"
                primaryTypographyProps={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.75rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: MUTED,
                  transition: "color 0.18s",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default NavListDrawer;
