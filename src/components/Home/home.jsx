import { Avatar, Box, Container, Paper, Typography } from "@mui/material";
import React from "react";
import "./styles.css";

import perfil from "../Design/Perfil.jpg";
import perfilAi from "../Design/perfilAi.jpg";

function Home() {
  return (
    <Paper elevation={4}>
      <Container>
        <div className="contenHome">
          <div id="contenImage">
            <Typography
              variant="h1"
              sx={{
                flexGrow: 1,
                fontSize: "4rem",
                textAlign: "center",
                marginTop: "200px",
                "@media (max-width:600px)": {
                  height: "100px",
                  width: "100%",
                  fontSize: "1.6rem",
                  marginTop: "-20px",
                  marginLeft: "0px",
                },
              }}
            >
              ¡HOLA! Soy Cristian Castaño <br></br>{" "}
              <strong>Desarrollador FullStack</strong>
            </Typography>
          </div>
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
