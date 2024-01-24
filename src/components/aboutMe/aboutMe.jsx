import { Avatar, Box, Container, Paper, Typography } from "@mui/material";
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
import perfil from "../Design/Perfil.jpg";
import perfilAi from "../Design/perfilAi.jpg";

import wllpaper from "../Design/wllpaper3.jpg";

function AboutMe() {
  const iconsData = [
    {
      icon: htmlIcon,
      label: "Html",
    },
    {
      icon: cssIcon,
      label: "Css",
    },
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
      icon: materialIcon,
      label: "MaterialUi",
    },
    {
      icon: bootstrapIcon,
      label: "Bootstrap",
    },
    {
      icon: csharpIcon,
      label: "C#",
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
          <div id="contenInfo">
            <div id="iconAvatar">
              <Avatar
                alt="Cristian Castaño"
                src={perfilAi}
                sx={{
                  width: 250,
                  height: 250,
                  marginTop: "60px",
                  "@media (max-width:600px)": {
                    width: 100,
                    height: 100,
                    marginTop: "0px",
                    marginBottom: "10px",
                    marginLeft: "110px",
                  },
                }}
              />
            </div>
            <Typography
              variant="body1"
              sx={{
                flexGrow: 1,
                width: "auto",
                height: "311px",
                fontSize: "1.6rem",
                textAlign: "center",
                marginLeft: "400px",
                marginTop: "-250px",
                marginBottom: "90px",
                "@media (max-width:600px)": {
                  fontSize: "1.1rem",
                  paddingTop: "10px",
                  paddingBottom: "5px",
                  marginTop: "0px",
                  marginLeft: "10px",
                  marginBottom: "0px",
                  width: "auto",
                  height: "350px",
                },
              }}
            >
              Apasionado desarrollador con experiencia en el
              fascinante mundo de los videojuegos y una inmersión actual en el
              emocionante campo del desarrollo web. Siempre en busca de desafíos
              que impulsen el crecimiento profesional. Actualmente aprendiendo
              sobre el desarrollo de software, ansioso por contribuir a
              proyectos innovadores y aprender continuamente en esta apasionante
              travesía tecnológica.
            </Typography>
          </div>
          <div id="contenSkills">
            <Typography
              variant="subtitle2"
              sx={{
                flexGrow: 1,
                fontSize: "2.5rem",
                textAlign: "center",
                marginTop: "-110px",
                marginLeft: "450px",
                marginBottom: "40px",
                "@media (max-width:600px)": {
                  marginLeft: "-20px",
                  marginTop: "10px",
                },
              }}
            >
              Tecnologías
            </Typography>
          </div>
          <div id="contenIcons">
            <Box
              sx={{
                width: "auto",
                marginLeft: "40%",
                "@media (max-width:600px)": {
                  marginLeft: "20px",
                },
              }}
            >
              <Grid
                container
                rowSpacing={{ xs: 2, sm: 3, md: 3, lg: 5 }}
                columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1 }}
              >
                {iconsData.map((icon, index) => (
                  <Grid key={index} item xs={4} sm={6} md={3} lg={3}>
                    <div>
                      <Avatar
                        alt="Icons"
                        src={icon.icon}
                        sx={{
                          width: 80,
                          height: 80,
                          marginTop: "20px",
                          "@media (max-width:600px)": {
                            width: 50,
                            height: 50,
                            marginTop: "2px",
                          },
                        }}
                      />
                    </div>
                    <div id="designText">
                      <Typography
                        variant="inherit"
                        sx={{
                          flexGrow: 1,
                          fontSize: "1.6rem",
                          textAlign: "center",
                          marginTop: "10px",
                          width: "80px",
                          height: "30px",
                          "@media (max-width:600px)": {
                            width: "50px",
                            height: "30px",
                            fontSize: "1rem",
                            textAlign: "center",
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
        </Box>
      </Container>
    </Paper>
  );
}

export default AboutMe;
