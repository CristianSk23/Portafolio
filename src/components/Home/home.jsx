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
  const iconsData = [
    {
      icon: jsIcon,
      label: "JavaScript",
    },
    {
      icon: reactIcon,
      label: "React.Js",
    },
    {
      icon: nodeIcon,
      label: "Node.Js",
    },
    {
      icon: reduxIcon,
      label: "Redux.Js",
    },
    {
      icon: cssIcon,
      label: "Css",
    },
    {
      icon: htmlIcon,
      label: "Html",
    },
    {
      icon: materialIcon,
      label: "MaterialUi",
    },
    {
      icon: csharpIcon,
      label: "C#",
    },
    {
      icon: bootstrapIcon,
      label: "Bootstrap",
    },
    {
      icon: unityIcon,
      label: "Unity",
    },
    {
      icon: githubIcon,
      label: "Github",
    },
  ];
  return (
    <Paper elevation={4}>
      <Container>
        <div className="contenHome">
          <div id="contenImage">
            <Typography
              variant="h1"
              sx={{
                flexGrow: 1,
                fontSize: "3.5rem",
                textAlign: "initial",
                "@media (max-width:600px)": {
                  fontSize: "1.5rem",
                  paddingTop: "20px",
                  paddingBottom: "10px",
                },
              }}
            >
              ¡HOLA! Soy Cristian Castaño <br></br>{" "}
              <strong>Desarrollador FullStack</strong>
            </Typography>
          </div>
          <h5 id="infoPersonal"></h5>
          <Typography
            variant="h5"
            sx={{
              flexGrow: 1,
              fontSize: "2rem",
              textAlign: "initial",
              paddingTop: "20px",
              paddingBottom: "10px",
              "@media (max-width:600px)": {
                fontSize: "1.5rem",
                paddingTop: "10px",
                paddingBottom: "5px",
              },
            }}
          >
            Un amante de la programación con un año de experiencia en el
            desarrollo de videojuegos y ahora sumergido en el mundo del
            desarrollo web. Estoy en pleno curso de aprender más sobre el mágico
            universo del desarrollo de software.
          </Typography>

          <div id="contenSkills">
            <Typography
              variant="h3"
              sx={{
                flexGrow: 1,
                fontSize: "2.5rem",
                textAlign: "left",
                paddingTop: "20px",
                paddingBottom: "10px",
              }}
            >
              Tecnologías
            </Typography>
          </div>
          <div id="contenIcons">
            <Box sx={{ width: "100%" }}>
              <Grid
                container
                rowSpacing={8}
                columnSpacing={{ xs: 1, sm: 1, md: 2 }}
              >
                {iconsData.map((icon, index) => (
                  <Grid key={index} item xs={4} sm={6} md={4} lg={3}>
                    <div
                      id="icons"
                      style={{ backgroundImage: `url(${icon.icon})` }}
                    ></div>
                    <div id="designText">
                      <Typography
                        variant="h5"
                        sx={{
                          flexGrow: 1,
                          fontSize: "1.6rem",
                          textAlign: "center",
                          paddingLeft: "15%",
                          "@media (max-width:600px)": {
                            fontSize: "1rem",
                            paddingLeft: "35%",
                          },
                        }}
                      >
                        {icon.label}
                      </Typography>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </div>
        </div>
      </Container>
    </Paper>
  );
}

export default Home;
