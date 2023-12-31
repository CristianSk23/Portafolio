import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";
import "./styles.css";

import { DiJavascript1 } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiNodejs } from "react-icons/di";
import { DiPostgresql } from "react-icons/di";
import { DiUnitySmall } from "react-icons/di";

import Grid from "@mui/material/Unstable_Grid2";

function Home() {
  return (
    <Paper elevation={4}>
      <Container>
        <div className="contenHome">
          <div id="contenImage"></div>
          <h5 id="infoPersonal">
            un amante de la programación con un año de experiencia en el
            desarrollo de videojuegos y ahora sumergido en el mundo del
            desarrollo web. Estoy en pleno curso de aprender más sobre el mágico
            universo del desarrollo de software.
          </h5>
          <div id="contenSkills">
            <Typography variant="h3" sx={{ flexGrow: 1 }}>
              SKILLS
            </Typography>

            <div id="contenIcons">
              <Box sx={{ width: "100%" }}>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid xs={4}>
                    <DiJavascript1 id="designIcon" />
                  </Grid>
                  <Grid xs={4}>
                    <DiReact id="designIcon"/>
                  </Grid>
                  <Grid xs={4}>
                    <DiNodejs id="designIcon"/>
                  </Grid>
                  <Grid xs={4}>
                    <DiPostgresql id="designIcon"/>
                  </Grid>
                  <Grid xs={4}>
                    <DiUnitySmall id="designIcon"/>
                  </Grid>
                </Grid>
              </Box>
            </div>
          </div>
        </div>
      </Container>
    </Paper>
  );
}

export default Home;
