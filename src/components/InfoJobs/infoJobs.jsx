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
import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ZoomInIcon from "@mui/icons-material/ZoomIn";

const AMBER = "#F5A623";
const AMBER_DIM = "rgba(245,166,35,0.09)";
const AMBER_BORDER = "rgba(245,166,35,0.24)";
const SECTION_BG = "#1E1F27";
const CARD_BG = "#252631";
const TEXT = "#E8EAF0";
const MUTED = "#7A7D8C";
const BORDER = "rgba(255,255,255,0.07)";

/* ── Styled dialog for game descriptions ── */
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    background: CARD_BG,
    border: `1px solid ${BORDER}`,
    borderRadius: "12px",
  },
  "& .MuiDialogContent-root": { padding: theme.spacing(2) },
  "& .MuiDialogActions-root": { padding: theme.spacing(1) },
}));

/* ─────────────────────────────────────────────────────────────────
   IMAGE GALLERY
───────────────────────────────────────────────────────────────── */
function ImageGallery({ images }) {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);
  const [lightbox, setLightbox] = useState(false);

  const goTo = useCallback(
    (i) => {
      setDir(i > active ? 1 : -1);
      setActive(i);
    },
    [active]
  );

  const prev = (e) => {
    e?.stopPropagation();
    goTo((active - 1 + images.length) % images.length);
  };
  const next = (e) => {
    e?.stopPropagation();
    goTo((active + 1) % images.length);
  };

  /* Keyboard navigation in lightbox */
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") setLightbox(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, active]);

  const slide = {
    enter: (d) => ({ x: d * 48, opacity: 0 }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
    },
    exit: (d) => ({
      x: -d * 48,
      opacity: 0,
      transition: { duration: 0.2, ease: "easeIn" },
    }),
  };

  return (
    <>
      {/* ── Section label ── */}
      <Box
        sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
      >
        <Typography
          sx={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.6rem",
            color: AMBER,
            letterSpacing: "0.18em",
            opacity: 0.8,
          }}
        >
          // capturas
        </Typography>
        <Box sx={{ flex: 1, height: "1px", bgcolor: BORDER }} />
        <Typography
          sx={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.58rem",
            color: MUTED,
            opacity: 0.6,
          }}
        >
          {active + 1}&nbsp;/&nbsp;{images.length}
        </Typography>
      </Box>

      {/* ── Main image ── */}
      <Box
        onClick={() => setLightbox(true)}
        sx={{
          position: "relative",
          borderRadius: "10px",
          overflow: "hidden",
          bgcolor: CARD_BG,
          border: `1px solid ${BORDER}`,
          cursor: "zoom-in",
          userSelect: "none",
          "& .img-hover-overlay": { opacity: 0, transition: "opacity 0.22s" },
          "&:hover .img-hover-overlay": { opacity: 1 },
          "&:hover": { borderColor: AMBER_BORDER },
          transition: "border-color 0.22s",
        }}
      >
        {/* Image with slide animation */}
        <Box
          sx={{ position: "relative", height: { xs: 220, sm: 320, md: 420 }, overflow: "hidden" }}
        >
          <AnimatePresence mode="wait" custom={dir}>
            <motion.img
              key={active}
              src={images[active]}
              alt={`Screenshot ${active + 1}`}
              custom={dir}
              variants={slide}
              initial="enter"
              animate="center"
              exit="exit"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
              draggable={false}
            />
          </AnimatePresence>
        </Box>

        {/* Hover overlay */}
        <Box
          className="img-hover-overlay"
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.55) 100%)",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            pb: 2,
            pointerEvents: "none",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.8,
              px: 1.8,
              py: 0.6,
              border: `1px solid ${AMBER_BORDER}`,
              bgcolor: "rgba(245,166,35,0.12)",
              borderRadius: "6px",
              backdropFilter: "blur(6px)",
            }}
          >
            <ZoomInIcon sx={{ fontSize: "0.85rem", color: AMBER }} />
            <Typography
              sx={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.62rem",
                color: AMBER,
                letterSpacing: "0.08em",
              }}
            >
              Ver completa
            </Typography>
          </Box>
        </Box>

        {/* Prev / Next arrows */}
        {images.length > 1 && (
          <>
            <IconButton
              onClick={prev}
              size="small"
              sx={{
                position: "absolute",
                left: 10,
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: "rgba(14,15,20,0.72)",
                border: `1px solid ${BORDER}`,
                color: MUTED,
                width: 34,
                height: 34,
                backdropFilter: "blur(4px)",
                transition: "all 0.18s",
                "&:hover": {
                  bgcolor: AMBER_DIM,
                  borderColor: AMBER_BORDER,
                  color: AMBER,
                },
              }}
            >
              <ChevronLeftIcon sx={{ fontSize: "1.1rem" }} />
            </IconButton>
            <IconButton
              onClick={next}
              size="small"
              sx={{
                position: "absolute",
                right: 10,
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: "rgba(14,15,20,0.72)",
                border: `1px solid ${BORDER}`,
                color: MUTED,
                width: 34,
                height: 34,
                backdropFilter: "blur(4px)",
                transition: "all 0.18s",
                "&:hover": {
                  bgcolor: AMBER_DIM,
                  borderColor: AMBER_BORDER,
                  color: AMBER,
                },
              }}
            >
              <ChevronRightIcon sx={{ fontSize: "1.1rem" }} />
            </IconButton>
          </>
        )}
      </Box>

      {/* ── Thumbnail strip ── */}
      {images.length > 1 && (
        <Box
          sx={{
            display: "flex",
            gap: "8px",
            mt: "10px",
            overflowX: "auto",
            pb: "4px",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {images.map((img, i) => (
            <Box
              key={i}
              component="img"
              src={img}
              alt={`thumb-${i}`}
              onClick={() => goTo(i)}
              sx={{
                width: { xs: 60, sm: 76 },
                height: { xs: 44, sm: 54 },
                objectFit: "cover",
                borderRadius: "6px",
                flexShrink: 0,
                cursor: "pointer",
                border: `2px solid ${i === active ? AMBER : "transparent"}`,
                opacity: i === active ? 1 : 0.45,
                boxShadow:
                  i === active ? `0 0 10px rgba(245,166,35,0.4)` : "none",
                transition: "all 0.2s ease",
                "&:hover": { opacity: 0.85 },
              }}
            />
          ))}
        </Box>
      )}

      {/* ── Lightbox ── */}
      <Dialog
        open={lightbox}
        onClose={() => setLightbox(false)}
        maxWidth={false}
        PaperProps={{
          sx: {
            bgcolor: "transparent",
            boxShadow: "none",
            overflow: "visible",
            m: 0,
          },
        }}
        BackdropProps={{
          sx: {
            bgcolor: "rgba(0,0,0,0.93)",
            backdropFilter: "blur(8px)",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AnimatePresence mode="wait" custom={dir}>
            <motion.img
              key={`lb-${active}`}
              src={images[active]}
              alt={`Fullscreen ${active + 1}`}
              custom={dir}
              variants={slide}
              initial="enter"
              animate="center"
              exit="exit"
              style={{
                maxWidth: "88vw",
                maxHeight: "84vh",
                objectFit: "contain",
                display: "block",
                borderRadius: "8px",
                boxShadow: "0 40px 100px rgba(0,0,0,0.7)",
              }}
              draggable={false}
            />
          </AnimatePresence>

          {/* Close */}
          <IconButton
            onClick={() => setLightbox(false)}
            sx={{
              position: "fixed",
              top: 16,
              right: 16,
              bgcolor: "rgba(20,21,26,0.85)",
              border: `1px solid ${BORDER}`,
              color: MUTED,
              backdropFilter: "blur(6px)",
              "&:hover": { color: TEXT, borderColor: "rgba(255,255,255,0.22)" },
            }}
          >
            <CloseIcon sx={{ fontSize: "1.1rem" }} />
          </IconButton>

          {/* Counter */}
          <Box
            sx={{
              position: "fixed",
              bottom: 20,
              left: "50%",
              transform: "translateX(-50%)",
              px: 2,
              py: 0.5,
              bgcolor: "rgba(20,21,26,0.8)",
              border: `1px solid ${BORDER}`,
              borderRadius: "20px",
              backdropFilter: "blur(6px)",
            }}
          >
            <Typography
              sx={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.62rem",
                color: MUTED,
                letterSpacing: "0.1em",
              }}
            >
              {active + 1}&nbsp;/&nbsp;{images.length}
            </Typography>
          </Box>

          {/* Lightbox prev/next */}
          {images.length > 1 && (
            <>
              <IconButton
                onClick={prev}
                sx={{
                  position: "fixed",
                  left: { xs: 8, md: 20 },
                  top: "50%",
                  transform: "translateY(-50%)",
                  bgcolor: "rgba(20,21,26,0.75)",
                  border: `1px solid ${BORDER}`,
                  color: MUTED,
                  backdropFilter: "blur(4px)",
                  "&:hover": { color: AMBER, borderColor: AMBER_BORDER },
                }}
              >
                <ChevronLeftIcon />
              </IconButton>
              <IconButton
                onClick={next}
                sx={{
                  position: "fixed",
                  right: { xs: 8, md: 20 },
                  top: "50%",
                  transform: "translateY(-50%)",
                  bgcolor: "rgba(20,21,26,0.75)",
                  border: `1px solid ${BORDER}`,
                  color: MUTED,
                  backdropFilter: "blur(4px)",
                  "&:hover": { color: AMBER, borderColor: AMBER_BORDER },
                }}
              >
                <ChevronRightIcon />
              </IconButton>
            </>
          )}
        </Box>
      </Dialog>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────
   INFOJOBS
───────────────────────────────────────────────────────────────── */
const InfoJobs = ({ infoJobsData = [] }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [indexText, setIndexText] = useState(0);

  /* Images come from App.jsx infoJobsData */
  const projectImages = infoJobsData[parseInt(id)]?.image ?? [];

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
      tags: ["Node.js", "React", "PostgreSQL", "OAuth", "Bootstrap", "MercadoPago"],
    },
    {
      id: 1,
      title: "Web sobre Videojuegos",
      label:
        "Aplicación web orientada a los amantes de los videojuegos, que permite explorar y gestionar información de videojuegos mediante la integración con la API de Rawg.io. La plataforma brinda a los usuarios la capacidad de buscar videojuegos, filtrar resultados, ver detalles y crear tarjetas personalizadas.",
      video: videoWebVideogames,
      multiVid: true,
      urlGithub: "https://github.com/CristianSk23/ProyectoIndividual",
      tags: ["Node.js", "React", "PostgreSQL", "CSS"],
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
      tags: ["Unity", "C#", "Blender"],
    },
    {
      id: 3,
      title: "Topin",
      period: "Nov 2025 – Actualidad",
      label:
        "Plataforma SaaS de gestión para restaurantes actualmente en fase de adopción comercial, con clientes reales en proceso de incorporación. Incluye módulos de gestión de mesas, pedidos, señalización digital en tiempo real para Smart TV y panel administrativo completo.",
      video: null,
      multiVid: false,
      tags: ["Node.js", "Express", "React", "PostgreSQL", "Socket.IO", "Tailwind"],
    },
    {
      id: 4,
      title: "Agenda Cultural — SENA",
      period: "Nov 2024 – Ago 2025",
      label:
        "Colaboré en el diseño y desarrollo de un aplicativo web de reservas de ambientes institucionales para el SENA. Incluye autenticación por roles, validación de disponibilidad en tiempo real, flujo de aprobación por estados y calendario público con temática mensual.",
      video: null,
      multiVid: false,
      tags: ["Laravel", "PHP", "MySQL"],
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
        {/* ── Title ── */}
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
              mb: currentInfo.period ? 1 : 2.5,
            }}
          >
            {currentInfo.title}
          </Typography>

          {currentInfo.period && (
            <Typography
              sx={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.65rem",
                color: AMBER,
                letterSpacing: "0.12em",
                mb: 2.5,
                opacity: 0.85,
              }}
            >
              {currentInfo.period}
            </Typography>
          )}

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

        {/* ── Description ── */}
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

        {/* ── Action buttons ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.5 }}
        >
          <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap", mb: 5 }}>
            {currentInfo.id !== 2 &&
              currentInfo.urlGithub &&
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

        {/* ── Image Gallery ── */}
        {projectImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.55 }}
          >
            <Box sx={{ mb: 5 }}>
              <ImageGallery images={projectImages} />
            </Box>
          </motion.div>
        )}

        {/* ── Video section ── */}
        {currentInfo.video && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: projectImages.length > 0 ? 0.38 : 0.3, duration: 0.55 }}
          >
            {/* Video section label */}
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
            >
              <Typography
                sx={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.6rem",
                  color: AMBER,
                  letterSpacing: "0.18em",
                  opacity: 0.8,
                }}
              >
                // demo
              </Typography>
              <Box sx={{ flex: 1, height: "1px", bgcolor: BORDER }} />
            </Box>

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
        )}
      </Box>

      {/* ── Game description dialog ── */}
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
