import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Drawer,
  Grid,
  IconButton,
  Paper,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import videoTechNook from "../Design/JobsVid/PanelAdministrativo.mp4";
import videoWebVideogames from "../Design/JobsVid/paginaDeInicio.mp4";

import gameDv1 from "../Design/JobsVid/gameDeveloper/Vid1.mp4";
import gameDv2 from "../Design/JobsVid/gameDeveloper/Vid2.mp4";
import gameDv3 from "../Design/JobsVid/gameDeveloper/Vid5.mp4";
import gameDv4 from "../Design/JobsVid/gameDeveloper/Vid6.mp4";
import gameDv5 from "../Design/JobsVid/gameDeveloper/Vid8.mp4";
import gameDv6 from "../Design/JobsVid/gameDeveloper/Vid9.mp4";

import wllpaper from "../Design/wllpaper3.jpg";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";

const InfoJobs = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [indexText, setIndexText] = useState(0);

  const info = [
    {
      id: 0,
      title: "TechNook",
      label:
        "TechNook, una plataforma E-Commerce cuidadosamente creada por un equipo de 8 desarrolladores, se presenta como un destino único para entusiastas de la tecnología. En mi rol como desarrollador backend, contribuí significativamente a la funcionalidad del sistema, centrándome en la gestión de productos, usuarios e historial de transacciones ",
      video: videoTechNook,
      multiVid: true,
      urlPage: "https://technookstore.up.railway.app/",
      urlGithub: [
        "https://github.com/CristianSk23/PF-Client",
        "https://github.com/micaortiz/PF-Server",
      ],
    },
    {
      id: 1,
      title: "Web sobre Videojuegos",
      label:
        "Aplicación web orientada a los amantes de los videojuegos, que permite explorar y gestionar información de videojuegos mediante la integración con la API de Rawg.io. La plataforma brinda a los usuarios la capacidad de buscar videojuegos, filtrar resultados, ver detalles y crear tarjetas personalizadas con información de sus juegos favoritos.",
      video: videoWebVideogames,
      multiVid: true,
      urlGithub: "https://github.com/CristianSk23/ProyectoIndividual",
    },
    {
      id: 2,
      title: "Desarrollo de Videojuegos",
      label:
        "Explora mi contribución a 6 emocionantes prototipos de videojuegos desarrollados durante mi empleo como desarrollador de videojuegos. Estos proyectos destacan mi habilidad en el uso de herramientas como Unity y el lenguaje de programación C#. Gran parte de los videojuegos se enfocan en experiencias 2D, demostrando mi destreza en este espacio",
      video: [gameDv1, gameDv2, gameDv3, gameDv4, gameDv5, gameDv6],
      titleDesc: [
        "El Silencio del Bambú",
        "Abezul",
        "Continente",
        "Continente",
        "Covid20",
        "Enigma",
      ],
      descriptionVg: [
        "Colaboré en el desarrollo de un prototipo de juego de mesa con dados y movimientos secuenciales. Implementé animaciones atractivas usando Unity y LeanTween, optimizando el rendimiento y resolviendo desafíos técnicos.",
        "Contribuí al desarrollo de un sistema de diálogo, implementando animaciones con Unity Animation y LeanTween. Además, desarrollé scripts para cargar información, optimizando la eficiencia del flujo de datos en el proyecto.",
        "Colaboré en el desarrollo de algoritmos para la creación de jugadores, organizándolos eficientemente en forma de lista y aportando la funcionalidad de asignar islas de manera aleatoria a cada jugador",
        "Aporté al desarrollo del sistema de carga de información para las islas asignadas a cada jugador",
        "Ayudé en el desarrollo de un prototipo de videojuego como proyecto de grado en el campo de la tecnología como productor multimedia. Me encargué de implementar algoritmos para el movimiento del personaje en un entorno 3D, así como la creación de animaciones y la implementación de un sistema de recolección de elementos.",
        "Ayudé en la creación de un minijuego con funcionalidad de arrastrar y soltar, implementando un algoritmo que verifica la posición precisa de los elementos.",
      ],
      multiVid: false,
    },
  ];

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));

  const handleClickOpen = (index) => {
    setOpen(true);
    setIndexText(index);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const newWindowPage = () => {
    if (info[id].urlPage) {
      window.open(info[id].urlPage);
    }
  };
  const newWindowGithub = (url) => {
    window.open(url);
  };

  return (
    <Paper
      sx={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${wllpaper})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container
        sx={{
          height: "1200px",
          marginTop: "30px",
          paddingTop: "30px",
          borderWidth: "60px ",
          "@media (max-width:600px)": {
            height: "1920px",
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
              marginTop: "150px",
              "@media (max-width:600px)": {
                marginTop: "260px",
                marginLeft: "0px",
              },
            }}
          >
            {Array.isArray(info[id].urlGithub) ? (
              info[id].urlGithub.map((url, index) => (
                <Button
                  key={index}
                  onClick={() => newWindowGithub(url)}
                  startIcon={<GitHubIcon />}
                  variant="contained"
                >
                  GitHub
                </Button>
              ))
            ) : (
              <Button
                onClick={() => newWindowGithub(info[id].urlGithub)}
                startIcon={<GitHubIcon />}
                variant="contained"
              >
                Github
              </Button>
            )}
          </Box>

          <Box
            sx={{
              width: "100%",
              height: "80px",
              marginTop: "50px",
              marginLeft: "0px",
              "@media (max-width:600px)": {
                width: "310px",
                marginTop: "260px",
                marginLeft: "0px",
              },
            }}
          >
            {info[id].multiVid ? (
              <>
                <Button
                  variant={info[id].urlPage ? "contained" : "disabled"}
                  onClick={newWindowPage}
                  sx={{ marginBottom: "5%", marginTop: "-5%" }}
                >
                  Web
                </Button>

                <video width="100%" height="auto" controls autoPlay loop>
                  <source src={info[id].video} type="video/mp4" />
                </video>
              </>
            ) : (
              <Grid
                container
                rowSpacing={{ xs: 8, sm: 1, md: 2, lg: 15 }}
                columnSpacing={{ xs: 1, sm: 1, md: 2, lg: 10 }}
              >
                {info[id].video.map((video, index) => (
                  <Grid
                    key={index}
                    item
                    xs={8}
                    sm={6}
                    md={4}
                    lg={4}
                    sx={{
                      "@media (max-width:600px)": {
                        marginLeft: "60px",
                      },
                    }}
                  >
                    <video
                      key={index}
                      width="100%"
                      height="auto"
                      controls
                      autoPlay
                      loop
                    >
                      <source src={video} type="video/mp4" />
                    </video>
                    <Button
                      variant="contained"
                      sx={{
                        width: { xs: "25%", sm: "80%", md: "60%", lg: "30%" },
                        marginLeft: "30%",
                        marginTop: "5%",
                      }}
                      onClick={() => handleClickOpen(index)}
                    >
                      Info
                    </Button>
                  </Grid>
                ))}
                <BootstrapDialog
                  onClose={handleClose}
                  aria-labelledby="customized-dialog-title"
                  open={open}
                >
                  <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    {info[id].titleDesc[indexText]}
                  </DialogTitle>
                  <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                      position: "absolute",
                      right: 8,
                      top: 8,
                      color: (theme) => theme.palette.grey[500],
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                  <DialogContent dividers>
                    <Typography gutterBottom>
                      {info[id].descriptionVg[indexText]}
                    </Typography>
                  </DialogContent>
                  <DialogActions>
                    <Button autoFocus onClick={handleClose} variant="contained">
                      Continuar
                    </Button>
                  </DialogActions>
                </BootstrapDialog>
              </Grid>
            )}
          </Box>
        </Box>
      </Container>
    </Paper>
  );
};

export default InfoJobs;
