import { Avatar, Box, Container, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

import Grid from "@mui/material/Unstable_Grid2";

import jsIcon from "../Design/icons/js.png";
import reactIcon from "../Design/icons/react.png";
import nodeIcon from "../Design/icons/nodejs.png";
import reduxIcon from "../Design/icons/redux.png";
import cssIcon from "../Design/icons/css.png";
import htmlIcon from "../Design/icons/html.png";
import materialIcon from "../Design/icons/MaterialUi.png";
import csharpIcon from "../Design/icons/c-sharp.png";
import bootstrapIcon from "../Design/icons/bootstrap.png";
import unityIcon from "../Design/icons/unity.png";
import githubIcon from "../Design/icons/github.png";
import perfilAi from "../Design/perfilAi.jpg";
import wllpaper from "../Design/wllpaper3.jpg";

const iconsData = [
  { icon: htmlIcon, label: "HTML" },
  { icon: cssIcon, label: "CSS" },
  { icon: jsIcon, label: "JavaScript" },
  { icon: reactIcon, label: "React.js" },
  { icon: nodeIcon, label: "Node.js" },
  { icon: reduxIcon, label: "Redux" },
  { icon: materialIcon, label: "Material UI" },
  { icon: bootstrapIcon, label: "Bootstrap" },
  { icon: csharpIcon, label: "C#" },
  { icon: unityIcon, label: "Unity" },
  { icon: githubIcon, label: "GitHub" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const iconVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

function AboutMe() {
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(135deg, rgba(13,17,23,0.96) 0%, rgba(13,17,23,0.92) 100%), url(${wllpaper})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        py: { xs: 10, md: 14 },
      }}
    >
      <Container maxWidth="lg">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="overline"
            sx={{
              color: "primary.light",
              letterSpacing: "0.2em",
              display: "block",
              textAlign: "center",
              mb: 1,
              fontSize: "0.72rem",
            }}
          >
            CONÓCEME
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              textAlign: "center",
              mb: 8,
              background: "linear-gradient(135deg, #F8FAFC 40%, #94A3B8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Sobre Mí
          </Typography>
        </motion.div>

        {/* Bio: avatar + text */}
        <Grid container spacing={6} alignItems="center" sx={{ mb: 10 }}>
          <Grid xs={12} md={4} sx={{ display: "flex", justifyContent: "center" }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box
                sx={{
                  position: "relative",
                  display: "inline-block",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: -4,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #2563EB, #7C3AED)",
                    zIndex: 0,
                  },
                }}
              >
                <Avatar
                  alt="Cristian Castaño"
                  src={perfilAi}
                  sx={{
                    width: { xs: 150, sm: 180, md: 220 },
                    height: { xs: 150, sm: 180, md: 220 },
                    position: "relative",
                    zIndex: 1,
                    border: "4px solid #0D1117",
                  }}
                />
              </Box>
            </motion.div>
          </Grid>

          <Grid xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", md: "1.15rem" },
                  lineHeight: 1.9,
                  color: "text.secondary",
                }}
              >
                Apasionado desarrollador con experiencia en el fascinante mundo
                de los videojuegos y una inmersión actual en el emocionante
                campo del desarrollo web. Siempre en busca de desafíos que
                impulsen el crecimiento profesional. Actualmente aprendiendo
                sobre el desarrollo de software, ansioso por contribuir a
                proyectos innovadores y aprender continuamente en esta
                apasionante travesía tecnológica.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>

        {/* Technologies header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="overline"
            sx={{
              color: "primary.light",
              letterSpacing: "0.2em",
              display: "block",
              textAlign: "center",
              mb: 1,
              fontSize: "0.72rem",
            }}
          >
            STACK
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              textAlign: "center",
              mb: 6,
              color: "text.primary",
            }}
          >
            Tecnologías
          </Typography>
        </motion.div>

        {/* Tech icons grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <Grid container spacing={2} justifyContent="center">
            {iconsData.map((icon) => (
              <Grid key={icon.label} xs={4} sm={3} md={2}>
                <motion.div variants={iconVariant}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 1.5,
                      p: { xs: 1.5, md: 2 },
                      borderRadius: 2,
                      border: "1px solid rgba(255,255,255,0.06)",
                      bgcolor: "rgba(255,255,255,0.02)",
                      transition: "all 0.25s ease",
                      cursor: "default",
                      "&:hover": {
                        bgcolor: "rgba(37,99,235,0.1)",
                        border: "1px solid rgba(37,99,235,0.3)",
                        transform: "translateY(-4px)",
                        boxShadow: "0 8px 24px rgba(37,99,235,0.15)",
                      },
                    }}
                  >
                    <Avatar
                      alt={icon.label}
                      src={icon.icon}
                      variant="square"
                      sx={{
                        width: { xs: 38, md: 52 },
                        height: { xs: 38, md: 52 },
                        "& img": { objectFit: "contain" },
                      }}
                    />
                    <Typography
                      variant="caption"
                      sx={{
                        color: "text.secondary",
                        fontWeight: 500,
                        textAlign: "center",
                        fontSize: { xs: "0.65rem", md: "0.75rem" },
                      }}
                    >
                      {icon.label}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}

export default AboutMe;
