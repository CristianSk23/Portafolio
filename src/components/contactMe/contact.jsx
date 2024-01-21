import React from "react";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import "./styles.css";
import wllpaper from "../Design/wllpaper3.jpg";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArticleIcon from "@mui/icons-material/Article";

const Contact = () => {

  const urlGit = "https://github.com/CristianSk23";
  const newWindoGit = () => {
    window.open(urlGit);
  };
  const urlLinke = "https://www.linkedin.com/in/cristian-castano23/";
  const newWindoLinke = () => {
    window.open(urlLinke);
  };

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
      <Container elevation={4}>
        <Box
          sx={{
            height: "1080px",
            marginTop: "30px",
            paddingTop: "60px",
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              flexGrow: 1,
              fontSize: "3rem",
              textAlign: "center",
              marginTop: "15%",
              marginBottom: "15%",
              width: "200px",
              height: "30px",
              marginLeft: "40%",
              "@media (max-width:600px)": {
                width: "50px",
                height: "30px",
                fontSize: "2.5rem",
                textAlign: "center",
                marginLeft: "18%",
                marginBottom: "25%",
              },
            }}
          >
            Contáctame
          </Typography>
          <Box>
            <Typography
              variant="subtitle2"
              sx={{
                flexGrow: 1,
                fontSize: "2rem",
                textAlign: "center",
                marginTop: "70px",
                width: "auto",
                height: "30px",
                marginLeft: "5%",
                "@media (max-width:600px)": {
                  width: "auto",
                  height: "auto",
                  fontSize: "1.3rem",
                  textAlign: "center",
                  marginTop: "25px",
                  marginBottom: "90px",
                },
              }}
            >
              Estoy entusiasmado con la posibilidad de colaborar contigo en
              futuros proyectos. Creo que podemos lograr cosas increíbles
              juntos. Si algo en mi portafolio te llama la atención o tienes
              alguna idea en mente, estaré encantado de discutir cómo podemos
              trabajar juntos.
            </Typography>
          </Box>
          <Box // Contain of the button´s group
            sx={{
              "& button": { m: 1 },
              marginTop: "20%",
              marginLeft: "39%",
              "@media (max-width:600px)": {
                marginTop: "-10px",
                marginLeft: "20%",
              },
            }}
          >
            <Button
              variant="contained"
              startIcon={<GitHubIcon />}
              onClick={newWindoGit}
              sx={{
                color: "white",
                "@media (max-width:600px)": {
                  fontSize: "0.5rem",
                  width: "80px",
                  height: "30px",
                },
              }}
            >
              Github
            </Button>
            <Button
              variant="contained"
              startIcon={<LinkedInIcon />}
              onClick={newWindoLinke}
              sx={{
                marginLeft: "10px",
                color: "white",
                "@media (max-width:600px)": {
                  fontSize: "0.5rem",
                  width: "80px",
                  height: "30px",
                },
              }}
            >
              LinkedIn
            </Button>
            {/* <Button
              variant="contained"
              startIcon={<ArticleIcon />}
              download="Cristian_Castano_Cv.pdf"
              href={cvLink}
              sx={{
                marginLeft: "10px",
                color: "white",
                "@media (max-width:600px)": {
                  fontSize: "0.5rem",
                  width: "80px",
                  height: "30px",
                },
              }}
            >
              CV
            </Button> */}
          </Box>
        </Box>
      </Container>
    </Paper>
  );
};

export default Contact;
