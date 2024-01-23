import { Box, Button, Container, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import "./styles.css";
//Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArticleIcon from "@mui/icons-material/Article";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
//Links
import cvLink from "./cvPdf/Cristian_Castano_Cv.pdf";

const email = "cristian200127@gmail.com";
import wllpaper from "../Design/wllpaper3.jpg";

function Home() {
  const [copied, setCopied] = useState(false);
  const [iconChange, setIconChange] = useState(false);

  const urlGit = "https://github.com/CristianSk23";
  const newWindoGit = () => {
    window.open(urlGit);
  };
  const urlLinke = "https://www.linkedin.com/in/cristian-castano23/";
  const newWindoLinke = () => {
    window.open(urlLinke);
  };

  const copyEmail = async () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setIconChange(true);
      setTimeout(() => {
        setCopied(false), setIconChange(false);
      }, 5000);
    });
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
      <Container>
        <div className="contenHome">
          <Box
            sx={{
              paddingTop: "30px",
              marginLeft: "30%",
              "@media (max-width:600px)": {
                marginLeft: "2%",
              },
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                flexGrow: 1,
                fontSize: "4rem",
                textAlign: "center",
                marginTop: "300px",
                /*  marginLeft: "30%", */
                "@media (max-width:600px)": {
                  height: "100px",
                  width: "350px",
                  fontSize: "1.6rem",
                  marginTop: "150px",
                },
              }}
            >
              ¡HOLA! Soy Cristian Castaño
            </Typography>
          </Box>

          <div id="contenTitle">
            <ul>
              <li>
                <Typography
                  variant="subtitle2"
                  sx={{
                    flexGrow: 1,
                    fontSize: "2.5rem",
                    textAlign: "center",
                    marginTop: "-60px",
                    marginRight: "10%",
                    "@media (max-width:600px)": {
                      height: "100px",
                      width: "350px",
                      fontSize: "1.4rem",
                      marginTop: "-8px",
                      marginLeft: "-20px",
                    },
                  }}
                >
                  Desarrollador Web
                </Typography>
              </li>
              <li>
                {" "}
                <Typography
                  variant="subtitle2"
                  sx={{
                    flexGrow: 1,
                    fontSize: "2.5rem",
                    textAlign: "center",
                    /* marginTop: "300px", */
                    marginRight: "5%",
                    marginTop: "20px",
                    "@media (max-width:600px)": {
                      fontSize: "1.4rem",
                      height: "100px",
                      width: "350px",
                      marginTop: "-2px",
                      marginLeft: "-16px",
                    },
                  }}
                >
                  Desarrollador De videojuegos
                </Typography>{" "}
              </li>
              <li>
                {" "}
                <Typography
                  variant="subtitle2"
                  sx={{
                    flexGrow: 1,
                    fontSize: "2.5rem",
                    width: "800px",
                    textAlign: "center",
                     marginTop: "12px",
                    /*  marginRight: "20%", */
                    "@media (max-width:600px)": {
                      fontSize: "1.4rem",
                      height: "100px",
                      width: "350px",
                      marginTop: "-28px",
                      marginLeft: "-10px",
                    },
                  }}
                >
                  Desarrollador De Software <br /> en proceso...
                </Typography>
              </li>
            </ul>
          </div>
          <Box
            sx={{
              marginTop: "20px",
              marginLeft: "36%",
              "@media (max-width:600px)": {
                marginLeft: "10%",
                textAlign: "center",
                marginTop: "25px",
              },
            }}
          >
            {" "}
            <Typography
              variant="subtitle2"
              sx={{
                fontSize: "1.4rem",
                marginLeft: "25%",
                "@media (max-width:600px)": {
                  fontSize: "1rem",
                  marginBottom: "2px",
                  marginLeft: "0px",
                },
              }}
            >
              cristian200127@gmail.com
            </Typography>
            <Button
              onClick={copyEmail}
              variant="outlined"
              startIcon={iconChange ? <CheckIcon /> : <ContentCopyIcon />}
              sx={{
                color: "white",
                marginLeft: "55%",
                marginTop: "-55px",
                "@media (max-width:800px)": {
                  fontSize: "0.6rem",
                  marginLeft: "0px",
                  marginTop: "20px",
                  marginBottom: "30px",
                  width: "75px",
                  height: "25px",
                },
              }}
            >
              {copied ? "Copiado" : "Copiar"}
            </Button>
          </Box>
          <Box // Contain of the button´s group
            sx={{
              "& button": { m: 1 },
              marginTop: "20px",
              marginLeft: "53%",
              "@media (max-width:600px)": {
                marginTop: "-10px",
                marginLeft: "40px",
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
            <Button
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
            </Button>
          </Box>
        </div>
      </Container>
    </Paper>
  );
}

export default Home;

/*    id="icons"
                      style={{
                        backgroundImage: `url(${icon.icon})`,
                        width: "100%",
                        height: "100%",
                        margin: "20px",
                        backgroundSize: "contain",
                        backgroundRepeat: "norepeat",
                        backgroundPosition: "center",
                      }} */
