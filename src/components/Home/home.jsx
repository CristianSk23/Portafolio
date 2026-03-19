import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Avatar,
  Chip,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArticleIcon from "@mui/icons-material/Article";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import fotoPerfil from "../Design/perfilAi.jpg";
import React, { useState } from "react";
import cvLink from "./cvPdf/Cristian_Castano_Cv.pdf";
import wallpaper from "../Design/wllpaper3.jpg";

const email = "cristian200127@gmail.com";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "React.js",
  "Node.js",
  "Bootstrap",
  "Material UI",
  "C#",
  "Unity",
];

function Home() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `linear-gradient(135deg, rgba(13,17,23,0.92) 0%, rgba(13,17,23,0.85) 100%), url(${wallpaper})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        display: "flex",
        alignItems: "center",
        py: { xs: 10, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          {/* Left: Avatar + email */}
          <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* Avatar with gradient ring */}
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
                  src={fotoPerfil}
                  sx={{
                    width: { xs: 160, sm: 190, md: 210 },
                    height: { xs: 160, sm: 190, md: 210 },
                    position: "relative",
                    zIndex: 1,
                    border: "4px solid #0D1117",
                  }}
                />
              </Box>
            </motion.div>

            {/* Copy email */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Button
                onClick={copyEmail}
                startIcon={copied ? <CheckIcon /> : <ContentCopyIcon />}
                sx={{
                  mt: 3,
                  px: 2.5,
                  py: 1,
                  borderRadius: 2,
                  border: "1px solid rgba(255,255,255,0.1)",
                  bgcolor: "rgba(255,255,255,0.03)",
                  color: copied ? "success.main" : "text.secondary",
                  fontSize: "0.75rem",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    border: "1px solid rgba(37,99,235,0.5)",
                    bgcolor: "rgba(37,99,235,0.08)",
                    color: "primary.light",
                  },
                }}
              >
                {copied ? "Correo copiado!" : email}
              </Button>
            </motion.div>
          </Grid>

          {/* Right: Info */}
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* Subtitle label */}
              <Typography
                variant="overline"
                sx={{
                  color: "primary.light",
                  letterSpacing: "0.2em",
                  mb: 1,
                  display: "block",
                  fontSize: "0.72rem",
                }}
              >
                FULL STACK DEVELOPER
              </Typography>

              {/* Animated name */}
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  mb: 1,
                  background: "linear-gradient(135deg, #F8FAFC 30%, #94A3B8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                  minHeight: { xs: "2.8rem", md: "3.6rem" },
                }}
              >
                <TypeAnimation
                  sequence={[
                    "Cristian Castaño",
                    3000,
                    "Full Stack Dev",
                    2500,
                    "Game Developer",
                    2000,
                  ]}
                  wrapper="span"
                  speed={55}
                  repeat={Infinity}
                />
              </Typography>

              {/* Description */}
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.8,
                  mb: 4,
                  maxWidth: 560,
                  fontSize: { xs: "0.95rem", md: "1.05rem" },
                }}
              >
                Desarrollador Full Stack con base sólida en programación
                orientada a objetos, desarrollo web y creación de videojuegos.
                Autodidacta, colaborativo y motivado por la mejora continua.
              </Typography>

              {/* Social buttons */}
              <Box
                sx={{
                  display: "flex",
                  gap: 1.5,
                  flexWrap: "wrap",
                  mb: 5,
                }}
              >
                <Button
                  variant="contained"
                  startIcon={<GitHubIcon />}
                  href="https://github.com/CristianSk23"
                  target="_blank"
                  sx={{ cursor: "pointer" }}
                >
                  GitHub
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<LinkedInIcon />}
                  href="https://www.linkedin.com/in/cristian-castano23/"
                  target="_blank"
                  sx={{ cursor: "pointer" }}
                >
                  LinkedIn
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<ArticleIcon />}
                  download="Cristian_Castano_Cv.pdf"
                  href={cvLink}
                  sx={{
                    borderColor: "rgba(255,255,255,0.15)",
                    color: "text.primary",
                    cursor: "pointer",
                    "&:hover": {
                      borderColor: "primary.main",
                      bgcolor: "rgba(37,99,235,0.08)",
                    },
                  }}
                >
                  Descargar CV
                </Button>
              </Box>

              {/* Skills chips */}
              <Typography
                variant="overline"
                sx={{
                  color: "text.secondary",
                  letterSpacing: "0.2em",
                  mb: 2,
                  display: "block",
                  fontSize: "0.7rem",
                }}
              >
                TECNOLOGÍAS
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.05, duration: 0.3 }}
                  >
                    <Chip
                      label={skill}
                      size="small"
                      sx={{
                        bgcolor: "rgba(37,99,235,0.1)",
                        color: "#60A5FA",
                        border: "1px solid rgba(37,99,235,0.22)",
                        fontWeight: 500,
                        fontSize: "0.78rem",
                        cursor: "default",
                        transition: "all 0.2s ease",
                        "&:hover": {
                          bgcolor: "rgba(37,99,235,0.2)",
                          border: "1px solid rgba(37,99,235,0.45)",
                        },
                      }}
                    />
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Home;
