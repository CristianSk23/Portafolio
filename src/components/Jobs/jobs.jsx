import React from "react";
import "./styles.css";
import { Container, Paper } from "@mui/material";
const Jobs = () => {
  return (
    <Paper>
      <Container elevation={4}>
        <div className="contenJobs">
          <h3 id="titleJobs">
            {" "}
            <code>&lt;Portafolio&gt;</code>
          </h3>
        </div>
      </Container>
    </Paper>
  );
};

export default Jobs;
