import {
  Box,
  Button,
  Container,
  Drawer,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import videoTechNook from "../Design/JobsVid/PanelAdministrativo.mp4";

const InfoJobs = () => {
  const { id } = useParams();

  const info = [
    {
      id: 0,
      title: "TechNook",
      label:
        "TechNook, una plataforma E-Commerce cuidadosamente creada por un equipo de 8 desarrolladores, se presenta como un destino único para entusiastas de la tecnología. En mi rol como desarrollador backend, contribuí significativamente a la funcionalidad del sistema, centrándome en la gestión de productos, usuarios e historial de transacciones ",
      video: videoTechNook,
    },
    {
      id: 1,
      title: "Web sobre Videojuegos",
      label:
        "Aplicación web orientada a los amantes de los videojuegos, que permite explorar y gestionar información de videojuegos mediante la integración con la API de Rawg.io. La plataforma brinda a los usuarios la capacidad de buscar videojuegos, filtrar resultados, ver detalles y crear tarjetas personalizadas con información de sus juegos favoritos.",
      /*  image: [imageVg1, imageVg2, imageVg3], */
    },
    {
      id: 2,
      title: "Desarrollo de Videojuegos",
      label:
        "Explora mi contribución a 6 emocionantes prototipos de videojuegos desarrollados durante mi empleo como desarrollador de videojuegos. Estos proyectos destacan mi habilidad en el uso de herramientas como Unity y el lenguaje de programación C#. Gran parte de los videojuegos se enfocan en experiencias 2D, demostrando mi destreza en este espacio",
      /*  image: [imageGD1, imageGD2, imageGD3], */
    },
  ];

  return (
    <Paper>
      <Container
        sx={{
          height: "1200px",
          marginTop: "30px",
          paddingTop: "30px",
          borderWidth: "60px ",
          "@media (max-width:600px)": {
            height: "1450px",
          },
        }}
      >
        <Box>
          <Typography
            variant="subtitle2"
            sx={{
              fontSize: "2.6rem",
              width: "100%",
              height: "80px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "@media (max-width:600px)": {
                fontSize: "1.8rem",
                width: "100%",
                height: "100px",
                marginTop: "0px",
                marginBottom: "10px",
                marginLeft: "0px",
                alignItems: "initial",
                justifyContent: "inital",
              },
            }}
          >
            {info[id].title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.8rem",
              width: "100%",
              height: "80px",
              marginTop: "30px",
              "@media (max-width:600px)": {
                fontSize: "1.2rem",
                width: "100%",
                height: "100px",
                marginTop: "0px",
                marginBottom: "10px",
                marginLeft: "0px",
                alignItems: "initial",
                justifyContent: "inital",
              },
            }}
          >
            {info[id].label}
          </Typography>
          <Box
            sx={{
              width: "100%",
              height: "80px",
              marginTop: "230px",
              marginLeft: "5px",
              "@media (max-width:600px)": {
                width: "100%",
                height: "80px",
                marginTop: "260px",
                marginLeft: "0px",
              },
            }}
          >
            <Button variant="contained">Web</Button>
            <video width="100%" height="auto" controls>
              <source src={info[id].video} type="video/mp4" />
            </video>
          </Box>
        </Box>
      </Container>
    </Paper>
  );
};

export default InfoJobs;
