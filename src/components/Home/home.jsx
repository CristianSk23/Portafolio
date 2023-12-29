import { Container, Paper } from "@mui/material";
import React from "react";
import "./styles.css";

function Home() {
  return (
    <Paper elevation={4}>
      <Container>
        <div className="contenHome">
          <h1>Portafolio</h1>
          Home
        </div>
      </Container>
    </Paper>
  );
}

export default Home;
