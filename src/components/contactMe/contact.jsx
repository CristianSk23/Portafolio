import React from "react";
import { Box, Container, Paper, Typography } from "@mui/material";
import "./styles.css";
import wllpaper from "../Design/wllpaper3.jpg";
const Contact = () => {
  return (
    <Paper
      elevation={4}
      sx={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${wllpaper})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        <Box
          sx={{
            height: "1080px",
            paddingTop: "60px",
          }}
        >
          <Typography variant="subtitle2">Contactame</Typography>
        </Box>
      </Container>
    </Paper>
  );
};

export default Contact;
