import React, { useEffect, useState } from "react";
import "./styles.css";
import {
  Box,
  Container,
  Paper,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Grid,
} from "@mui/material";

import { Link } from "react-router-dom";

import wllpaper from "../Design/wllpaper4.jpg";

const Jobs = ({ infoJobs }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const showNextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % infoJobs[currentImageIndex].image.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(showNextImage, 10000); // change of 10 seconds

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    <Paper
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
            borderWidth: "60px ",
            "@media (max-width:600px)": {
              height: "1560px",
            },
          }}
        >
          <Box>
            <Typography
              variant="subtitle2"
              sx={{ textAlign: "center", fontSize: "3rem" }}
            >
              Portafolio
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                fontSize: "1.7rem",
                marginTop: "50px",
                "@media (max-width:600px)": {
                  fontSize: "1.2rem",
                },
              }}
            >
              Durante mi trayectoria en el mundo del desarrollo, he llevado a
              cabo diversos proyectos web y de desarrollo de videojuegos,
              consolidando un conjunto sólido de habilidades. Mi enfoque se
              centra en la implementación de soluciones creativas y eficientes,
              destacando la versatilidad para abordar desafíos técnicos.
            </Typography>
          </Box>
          <Grid
            container
            rowSpacing={5}
            columnSpacing={{ xs: 2, sm: 1, md: 2, lg: 5 }}
            sx={{ marginTop: "5px" }}
          >
            {infoJobs.map((info, index) => (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    maxWidth: 345,
                    marginTop: "60px",
                    width: "310px",
                    height: "387px",
                    "@media (max-width:600px)": {
                      width: "320px",
                      height: "320px",
                      marginTop: "1px",
                    },
                  }}
                >
                  <CardMedia
                    sx={{
                      height: 203,
                      objectFit: "contain",
                      "@media (max-width:600px)": {
                        height: 150,
                      },
                    }}
                    image={info.image[currentImageIndex]}
                    title="info"
                  />

                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        fontSize: "1.4rem",
                        "@media (max-width:600px)": {
                          fontSize: "1.2rem",
                        },
                      }}
                    >
                      {info.title}
                    </Typography>
                    {/* information the card */}
                    <Typography
                      variant="body2"
                      color="text.primary"
                      sx={{
                        "@media (max-width:600px)": {
                          fontSize: "0.8rem",
                        },
                      }}
                    >
                      {info.label}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to={`/info/${index}`}>
                      <Button size="small">Mas info</Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Paper>
  );
};

export default Jobs;

/* mediante integración con la API de Rawg.io. */
