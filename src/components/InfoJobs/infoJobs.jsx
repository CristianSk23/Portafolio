import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
  styled,
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

import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const AMBER = "#F5A623";
const AMBER_DIM = "rgba(245,166,35,0.09)";
const AMBER_BORDER = "rgba(245,166,35,0.24)";
const SECTION_BG = "#1E1F27";
const CARD_BG = "#252631";
const TEXT = "#E8EAF0";
const MUTED = "#7A7D8C";
const BORDER = "rgba(255,255,255,0.07)";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    bgcolor: CARD_BG,
    background: CARD_BG,
    border: `1px solid ${BORDER}`,
    borderRadius: "12px",
  },
  "& .MuiDialogContent-root": { padding: theme.spacing(2) },
  "& .MuiDialogActions-root": { padding: theme.spacing(1) },
}));

const InfoJobs = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
        "Aplicación web orientada a los amantes de los videojuegos, que permite explorar y gestionar información de videojuegos mediante la integración con la API de Rawg.io. La plataforma brinda a los usuarios la capacidad de buscar videojuegos, filtrar resultados, ver detalles y crear tarjetas personalizadas.",
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
  const handleClickOpen = (index) => { setOpen(true); setIndexText(index); };
  const handleClose = () => setOpen(false);
  const newWindowPage = () => { if (currentInfo.urlPage) window.open(currentInfo.urlPage); };
  const newWindowGithub = (url) => window.open(url);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#14151A",
        py: { xs: 4, md: 5 },
        px: { xs: 2, md: 4 },
      }}
    >
      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Button
          onClick={() => navigate(-1)}
          startIcon={<ArrowBackIcon sx={{ fontSize: "0.9rem !important" }} />}
          sx={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.68rem",
            letterSpacing: "0.06em",
            textTransform: "none",
            color: MUTED,
            border: `1px solid ${BORDER}`,
            mb: 3,
            px: 2,
            py: 0.7,
            "&:hover": { color: TEXT, borderColor: "rgba(255,255,255,0.18)" },
          }}
        >
          Volver
        </Button>
      </motion.div>

      <Box
        sx={{
          bgcolor: SECTION_BG,
          border: `1px solid ${BORDER}`,
          borderRadius: "16px",
          p: { xs: 3, md: "40px" },
          maxWidth: 1100,
        }}
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
            <Typography
              sx={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.62rem",
                color: AMBER,
                letterSpacing: "0.22em",
              }}
            >
              PROYECTO /
            </Typography>
            <Box sx={{ flex: 1, height: "1px", bgcolor: BORDER }} />
          </Box>

          <Typography
            sx={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: { xs: "2.2rem", md: "3.2rem" },
              letterSpacing: "0.04em",
              color: TEXT,
              lineHeight: 1,
              mb: 2.5,
            }}
          >
            {currentInfo.title}
          </Typography>

          {/* Tags */}
          {currentInfo.tags && (
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 3.5 }}>
              {currentInfo.tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  sx={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.65rem",
                    bgcolor: AMBER_DIM,
                    color: AMBER,
                    border: `1px solid ${AMBER_BORDER}`,
                    height: 24,
                  }}
                />
              ))}
            </Box>
          )}
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.55 }}
        >
          <Typography
            sx={{
              fontFamily: "'Manrope', sans-serif",
              color: MUTED,
              lineHeight: 1.9,
              mb: 4,
              fontSize: { xs: "0.9rem", md: "1rem" },
              maxWidth: 760,
            }}
          >
            {currentInfo.label}
          </Typography>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.5 }}
        >
          <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap", mb: 5 }}>
            {currentInfo.id !== 2 &&
              (Array.isArray(currentInfo.urlGithub) ? (
                currentInfo.urlGithub.map((url, index) => (
                  <Button
                    key={index}
                    onClick={() => newWindowGithub(url)}
                    startIcon={<GitHubIcon sx={{ fontSize: "0.9rem !important" }} />}
                    sx={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.7rem",
                      letterSpacing: "0.05em",
                      textTransform: "none",
                      color: MUTED,
                      border: `1px solid ${BORDER}`,
                      bgcolor: "rgba(255,255,255,0.03)",
                      px: 2.5,
                      py: 0.9,
                      cursor: "pointer",
                      "&:hover": { bgcolor: "rgba(255,255,255,0.07)", color: TEXT },
                    }}
                  >
                    {currentInfo.titleGit[index]}
                  </Button>
                ))
              ) : (
                <Button
                  onClick={() => newWindowGithub(currentInfo.urlGithub)}
                  startIcon={<GitHubIcon sx={{ fontSize: "0.9rem !important" }} />}
                  sx={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.7rem",
                    letterSpacing: "0.05em",
                    textTransform: "none",
                    color: MUTED,
                    border: `1px solid ${BORDER}`,
                    bgcolor: "rgba(255,255,255,0.03)",
                    px: 2.5,
                    py: 0.9,
                    cursor: "pointer",
                    "&:hover": { bgcolor: "rgba(255,255,255,0.07)", color: TEXT },
                  }}
                >
                  Repositorio
                </Button>
              ))}

            {currentInfo.urlPage && (
              <Button
                onClick={newWindowPage}
                startIcon={<LaunchIcon sx={{ fontSize: "0.9rem !important" }} />}
                sx={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.7rem",
                  letterSpacing: "0.05em",
                  textTransform: "none",
                  color: "#14151A",
                  bgcolor: AMBER,
                  fontWeight: 700,
                  px: 2.5,
                  py: 0.9,
                  cursor: "pointer",
                  "&:hover": { bgcolor: "#FFB833" },
                }}
              >
                Ver sitio web
              </Button>
            )}
          </Box>
        </motion.div>

        {/* Video section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.55 }}
        >
          {currentInfo.multiVid ? (
            <Box
              sx={{
                borderRadius: "10px",
                overflow: "hidden",
                border: `1px solid ${BORDER}`,
                boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
              }}
            >
              <video width="100%" height="auto" controls autoPlay loop>
                <source src={currentInfo.video} type="video/mp4" />
              </video>
            </Box>
          ) : (
            <Grid container spacing={2}>
              {currentInfo.video.map((video, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Box
                    sx={{
                      borderRadius: "10px",
                      overflow: "hidden",
                      border: `1px solid ${BORDER}`,
                      bgcolor: CARD_BG,
                      transition: "border-color 0.22s",
                      "&:hover": { borderColor: AMBER_BORDER },
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
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "0.65rem",
                          textTransform: "none",
                          letterSpacing: "0.04em",
                          cursor: "pointer",
                          color: MUTED,
                          borderColor: BORDER,
                          "&:hover": {
                            borderColor: AMBER_BORDER,
                            color: AMBER,
                            bgcolor: AMBER_DIM,
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
      </Box>

      {/* Dialog */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="game-info-dialog-title"
        open={open}
      >
        <DialogTitle
          sx={{
            m: 0,
            p: "16px 20px",
            pr: 6,
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "1.2rem",
            letterSpacing: "0.04em",
            color: TEXT,
            bgcolor: CARD_BG,
          }}
          id="game-info-dialog-title"
        >
          {currentInfo.titleDesc && currentInfo.titleDesc[indexText]}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: MUTED,
            cursor: "pointer",
            "&:hover": { color: TEXT },
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers sx={{ bgcolor: CARD_BG, borderColor: BORDER }}>
          <Typography
            sx={{
              fontFamily: "'Manrope', sans-serif",
              lineHeight: 1.85,
              color: MUTED,
              fontSize: "0.9rem",
            }}
          >
            {currentInfo.descriptionVg && currentInfo.descriptionVg[indexText]}
          </Typography>
        </DialogContent>
        <DialogActions sx={{ bgcolor: CARD_BG, borderTop: `1px solid ${BORDER}` }}>
          <Button
            autoFocus
            onClick={handleClose}
            sx={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.68rem",
              textTransform: "none",
              color: "#14151A",
              bgcolor: AMBER,
              fontWeight: 700,
              px: 2.5,
              "&:hover": { bgcolor: "#FFB833" },
            }}
          >
            Continuar
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </Box>
  );
};

export default InfoJobs;
