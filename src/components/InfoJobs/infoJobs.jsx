import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";

const InfoJobs = () => {
  return (
    <Paper>
      <Container>
        <Box
          sx={{
            height: "1080px",
            marginTop: "30px",
            paddingTop: "60px",
            borderWidth: "60px ",
            "@media (max-width:600px)": {
              height: "1450px",
            },
          }}
        >
          <Typography variant="subtitle2">Informacion del Proyecto</Typography>
        </Box>
      </Container>
    </Paper>
  );
};

export default InfoJobs;
