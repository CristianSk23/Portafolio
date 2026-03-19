import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

const NavListDrawer = ({ navArrayLinks, setOpen }) => {
  return (
    <Box sx={{ width: 240 }}>
      {/* Drawer brand header */}
      <Box
        sx={{
          px: 3,
          py: 2.5,
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: "1.2rem",
            background: "linear-gradient(135deg, #2563EB, #7C3AED)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          CC
        </Typography>
      </Box>

      <List sx={{ pt: 1 }}>
        {navArrayLinks.map((item) => (
          <ListItem disablePadding key={item.title}>
            <ListItemButton
              component="a"
              href={item.path}
              onClick={() => setOpen(false)}
              sx={{
                px: 3,
                py: 1.5,
                cursor: "pointer",
                transition: "background 0.2s",
                "&:hover": {
                  bgcolor: "rgba(37,99,235,0.1)",
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 36, color: "primary.main" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.title}
                primaryTypographyProps={{
                  fontWeight: 500,
                  fontSize: "0.95rem",
                  color: "text.primary",
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
