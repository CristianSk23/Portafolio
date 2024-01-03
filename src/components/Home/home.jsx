import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";
import "./styles.css";

import Grid from "@mui/material/Unstable_Grid2";
import jsIcon from "../Design/icons/js.png";
import reactIcon from "../Design/icons/react.png";
import nodeIcon from "../Design/icons/nodejs.png";
import reduxIcon from "../Design/icons/redux.png";
import cssIcon from "../Design/icons/css.png";
import htmlIcon from "../Design/icons/html.png";
import materialIcon from "../Design/icons/MaterialUi.png";
import csharpIcon from "../Design/icons/c-sharp.png";
import bootstrapIcon from "../Design/icons/bootstrap.png";
import unityIcon from "../Design/icons/unity.png";
import githubIcon from "../Design/icons/github.png";

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
              Tecnologías
            </Typography>

            <div id="contenIcons">
              <Box sx={{ width: "100%" }}>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid xs={3}>
                    <div
                      id="icons"
                      style={{ backgroundImage: `url(${jsIcon})` }}
                    >
                      <p>JavaScript</p>
                    </div>
                  </Grid>
                  <Grid xs={3}>
                    <div
                      id="icons"
                      style={{ backgroundImage: `url(${reactIcon})` }}
                    >
                      <p>React.Js</p>
                    </div>
                  </Grid>
                  <Grid xs={3}>
                    <div
                      id="icons"
                      style={{ backgroundImage: `url(${nodeIcon})` }}
                    >
                      <p>Node.Js</p>
                    </div>
                  </Grid>
                  <Grid xs={3}>
                    <div
                      id="icons"
                      style={{ backgroundImage: `url(${reduxIcon})` }}
                    >
                      {" "}
                      <p>Redux.Js</p>
                    </div>
                  </Grid>
                  <Grid xs={3}>
                    <div
                      id="icons"
                      style={{ backgroundImage: `url(${cssIcon})` }}
                    >
                      {" "}
                      <p>Css</p>
                    </div>
                  </Grid>
                  <Grid xs={3}>
                    <div
                      id="icons"
                      style={{ backgroundImage: `url(${htmlIcon})` }}
                    >
                      {" "}
                      <p>Html</p>
                    </div>
                  </Grid>

                  <Grid xs={3}>
                    <div
                      id="icons"
                      style={{ backgroundImage: `url(${materialIcon})` }}
                    >
                      {" "}
                      <p>MaterialUi</p>
                    </div>
                  </Grid>
                  <Grid xs={3}>
                    <div
                      id="icons"
                      style={{ backgroundImage: `url(${csharpIcon})` }}
                    >
                      {" "}
                      <p>C#</p>
                    </div>
                  </Grid>
                  <Grid xs={3}>
                    <div
                      id="icons"
                      style={{ backgroundImage: `url(${bootstrapIcon})` }}
                    >
                      {" "}
                      <p>Bootstrap</p>
                    </div>
                  </Grid>
                  <Grid xs={3}>
                    <div
                      id="icons"
                      style={{ backgroundImage: `url(${unityIcon})` }}
                    >
                      {" "}
                      <p>Unity</p>
                    </div>
                  </Grid>
                  <Grid xs={3}>
                    <div
                      id="icons"
                      style={{ backgroundImage: `url(${githubIcon})` }}
                    >
                      {" "}
                      <p>Github</p>
                    </div>
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
