import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
  styled,
  Chip,
} from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
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
import LaunchIcon from "@mui/icons-material/Launch";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": { padding: theme.spacing(2) },
  "& .MuiDialogActions-root": { padding: theme.spacing(1) },
}));

const InfoJobs = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [indexText, setIndexText] = useState(0);

  const info = [
    {
      id: 0,
      title: "TechNook",
      label:
        "TechNook, una plataforma E-Commerce cuidadosamente creada por un equipo de 8 desarrolladores, se presenta como un destino único para entusiastas de la tecnología. En mi rol como desarrollador backend, contribuí significativamente a la funcionalidad del sistema, centrándome en la gestión de productos, usuarios e historial de transacciones.",
      video: videoTechNook,
      multiVid: true,
      urlPage: "https://technookstore.up.railway.app/",
      urlGithub: [
        "https://github.com/CristianSk23/PF-Client",
        "https://github.com/micaortiz/PF-Server",
      ],
      titleGit: ["Repositorio Frontend", "Repositorio Backend"],
      tags: ["E-Commerce", "Team Project", "Backend"],
    },
    {
      id: 1,
      title: "Web sobre Videojuegos",
      label:
        "Aplicación web orientada a los amantes de los videojuegos, que permite explorar y gestionar información de videojuegos mediante la integración con la API de Rawg.io. La plataforma brinda a los usuarios la capacidad de buscar videojuegos, filtrar resultados, ver detalles y crear tarjetas personalizadas con información de sus juegos favoritos.",
      video: videoWebVideogames,
      multiVid: true,
      urlGithub: "https://github.com/CristianSk23/ProyectoIndividual",
      tags: ["React", "Node.js", "API Integration"],
    },
    {
      id: 2,
      title: "Desarrollo de Videojuegos",
      label:
        "Explora mi contribución a 6 emocionantes prototipos de videojuegos desarrollados durante mi empleo como desarrollador. Estos proyectos destacan mi habilidad en el uso de herramientas como Unity y el lenguaje de programación C#, con foco en experiencias 2D.",
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
        "Colaboré en el desarrollo de algoritmos para la creación de jugadores, organizándolos eficientemente en forma de lista y aportando la funcionalidad de asignar islas de manera aleatoria a cada jugador.",
        "Aporté al desarrollo del sistema de carga de información para las islas asignadas a cada jugador.",
        "Ayudé en el desarrollo de un prototipo de videojuego como proyecto de grado. Me encargué de implementar algoritmos para el movimiento del personaje en un entorno 3D, así como la creación de animaciones y un sistema de recolección de elementos.",
        "Ayudé en la creación de un minijuego con funcionalidad de arrastrar y soltar, implementando un algoritmo que verifica la posición precisa de los elementos.",
      ],
      multiVid: false,
      tags: ["Unity", "C#", "Game Dev"],
    },
  ];

  const currentInfo = info[parseInt(id)];

  const handleClickOpen = (index) => {
    setOpen(true);
    setIndexText(index);
  };

  const handleClose = () => setOpen(false);

  const newWindowPage = () => {
    if (currentInfo.urlPage) window.open(currentInfo.urlPage);
  };

  const newWindowGithub = (url) => window.open(url);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `linear-gradient(135deg, rgba(13,17,23,0.97) 0%, rgba(13,17,23,0.93) 100%), url(${wllpaper})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        {/* Title & tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="overline"
            sx={{
              color: "primary.light",
              letterSpacing: "0.2em",
              display: "block",
              mb: 1,
              fontSize: "0.72rem",
            }}
          >
            PROYECTO
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              mb: 3,
              background: "linear-gradient(135deg, #F8FAFC 40%, #94A3B8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "2rem", sm: "2.8rem", md: "3.5rem" },
            }}
          >
            {currentInfo.title}
          </Typography>

          {/* Tags */}
          {currentInfo.tags && (
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 4 }}>
              {currentInfo.tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  sx={{
                    bgcolor: "rgba(37,99,235,0.1)",
                    color: "#60A5FA",
                    border: "1px solid rgba(37,99,235,0.22)",
                    fontWeight: 500,
                    fontSize: "0.78rem",
                  }}
                />
              ))}
            </Box>
          )}
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              lineHeight: 1.9,
              mb: 5,
              fontSize: { xs: "1rem", md: "1.1rem" },
              maxWidth: 800,
            }}
          >
            {currentInfo.label}
          </Typography>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 6 }}>
            {/* GitHub buttons */}
            {currentInfo.id !== 2 &&
              (Array.isArray(currentInfo.urlGithub) ? (
                currentInfo.urlGithub.map((url, index) => (
                  <Button
                    key={index}
                    onClick={() => newWindowGithub(url)}
                    startIcon={<GitHubIcon />}
                    variant="contained"
                    sx={{ cursor: "pointer" }}
                  >
                    {currentInfo.titleGit[index]}
                  </Button>
                ))
              ) : (
                <Button
                  onClick={() => newWindowGithub(currentInfo.urlGithub)}
                  startIcon={<GitHubIcon />}
                  variant="contained"
                  sx={{ cursor: "pointer" }}
                >
                  Repositorio
                </Button>
              ))}

            {/* Live page button */}
            {currentInfo.urlPage && (
              <Button
                onClick={newWindowPage}
                startIcon={<LaunchIcon />}
                variant="outlined"
                sx={{
                  cursor: "pointer",
                  borderColor: "rgba(255,255,255,0.15)",
                  color: "text.primary",
                  "&:hover": {
                    borderColor: "primary.main",
                    bgcolor: "rgba(37,99,235,0.08)",
                  },
                }}
              >
                Ver sitio web
              </Button>
            )}
          </Box>
        </motion.div>

        {/* Video section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          {currentInfo.multiVid ? (
            <Box
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
              }}
            >
              <video width="100%" height="auto" controls autoPlay loop>
                <source src={currentInfo.video} type="video/mp4" />
              </video>
            </Box>
          ) : (
            <Grid container spacing={3}>
              {currentInfo.video.map((video, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Box
                    sx={{
                      borderRadius: 2,
                      overflow: "hidden",
                      border: "1px solid rgba(255,255,255,0.08)",
                      bgcolor: "rgba(22,27,34,0.85)",
                      transition: "border-color 0.2s",
                      "&:hover": { borderColor: "rgba(37,99,235,0.35)" },
                    }}
                  >
                    <video width="100%" height="auto" controls autoPlay loop>
                      <source src={video} type="video/mp4" />
                    </video>
                    <Box sx={{ p: 1.5 }}>
                      <Button
                        variant="outlined"
                        size="small"
                        fullWidth
                        startIcon={<PlayCircleOutlineIcon />}
                        onClick={() => handleClickOpen(index)}
                        sx={{
                          cursor: "pointer",
                          borderColor: "rgba(255,255,255,0.1)",
                          color: "text.secondary",
                          fontSize: "0.78rem",
                          "&:hover": {
                            borderColor: "primary.main",
                            color: "primary.light",
                            bgcolor: "rgba(37,99,235,0.08)",
                          },
                        }}
                      >
                        Ver descripción
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          )}
        </motion.div>
      </Container>

      {/* Info dialog */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="game-info-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2, pr: 6 }} id="game-info-dialog-title">
          {currentInfo.titleDesc && currentInfo.titleDesc[indexText]}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "text.secondary",
            cursor: "pointer",
            "&:hover": { color: "text.primary" },
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography sx={{ lineHeight: 1.8, color: "text.secondary" }}>
            {currentInfo.descriptionVg && currentInfo.descriptionVg[indexText]}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}
            variant="contained"
            sx={{ cursor: "pointer" }}
          >
            Continuar
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </Box>
  );
};

export default InfoJobs;
