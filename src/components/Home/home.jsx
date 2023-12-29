import { Container, Paper } from "@mui/material";
import React from "react";
import "./styles.css";

function Home() {
  return (
    <Paper elevation={4}>
      <Container>
        <div className="contenHome">
          <h1>¡Hola! Soy Cristian Stiven Castaño.</h1>
          <h5>
            un amante de la programación con un año de experiencia en el
            desarrollo de videojuegos y ahora sumergido en el mundo del
            desarrollo web. Estoy en pleno curso de aprender más sobre el mágico
            universo del desarrollo de software.
          </h5>
        </div>
      </Container>
    </Paper>
  );
}

export default Home;
