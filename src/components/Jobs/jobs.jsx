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
// Import of images for the card
//* Images the TechNook web
import imageTech1 from "../Design/Tech/ft1.jpg";
import imageTech2 from "../Design/Tech/ft2.jpg";
import imageTech3 from "../Design/Tech/ft3.jpg";
//* Images the web of videogames
import imageVg1 from "../Design/Tech/ft4VG.jpg";
import imageVg2 from "../Design/Tech/ft5VG.jpg";
import imageVg3 from "../Design/Tech/ft6VG.jpg";
//* Game developer Images
import imageGD1 from "../Design/Tech/ft7GD.jpg";
import imageGD2 from "../Design/Tech/ft9GD.jpg";
import imageGD3 from "../Design/Tech/ft10GD.jpg";

import InfoJobs from "../InfoJobs/infoJobs";
import { Link } from "react-router-dom";

const Jobs = () => {
  const infoJobs = [
    {
      title: "TechNook",
      label:
        "TechNook, una plataforma E-Commerce cuidadosamente creada por un equipo de 8 desarrolladores.",
      image: [imageTech1, imageTech2, imageTech3],
    },
    {
      title: "Web sobre Videojuegos",
      label:
        " Aplicación web para amantes de videojuegos, permite explorar y gestionar información de juegos",
      image: [imageVg1, imageVg2, imageVg3],
    },
    {
      title: "Desarrollo de Videojuegos",
      label: "Galeria de Proyectos como desarrollador de Videojuegos.",
      image: [imageGD1, imageGD2, imageGD3],
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const showNextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % infoJobs[currentImageIndex].image.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(showNextImage, 10000); // Cambiar cada 5 segundos

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Paper>
      <Container elevation={4}>
        <Box
          sx={{
            height: "1080px",
            marginTop: "30px",
            paddingTop: "60px",
            borderWidth: "60px ",
            "@media (max-width:600px)": {
              height: "1450px",
            },
          }}
        >
          <Box>
            <Typography
              variant="subtitle2"
              sx={{ textAlign: "center", fontSize: "2.5rem" }}
            >
              Portafolio
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "center", fontSize: "1.5rem" }}
            >
              Info portafolio
            </Typography>
          </Box>
          <Grid
            container
            rowSpacing={5}
            columnSpacing={{ xs: 2, sm: 1, md: 2, lg: 5 }}
            sx={{ marginTop: "60px" }}
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
                      width: "330px",
                      height: "330px",
                      marginTop: "30px",
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
                    <Link to="/info">
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
