import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const AMBER = "#F5A623";
const AMBER_DIM = "rgba(245,166,35,0.09)";
const AMBER_BORDER = "rgba(245,166,35,0.24)";
const SECTION_BG = "#1E1F27";
const CARD_BG = "#252631";
const TEXT = "#E8EAF0";
const MUTED = "#7A7D8C";
const BORDER = "rgba(255,255,255,0.07)";

const urlGit = "https://github.com/CristianSk23";
const urlLinke = "https://www.linkedin.com/in/cristian-castano23/";
const email = "cristiancp.dev@gmail.com";

const Contact = () => {
  return (
    <Box
      sx={{
        bgcolor: SECTION_BG,
        border: `1px solid ${BORDER}`,
        borderRadius: { xs: 0, md: "16px" },
        p: { xs: 3, md: "40px" },
        mb: { xs: "12px", md: 0 },
      }}
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mb: { xs: 4, md: 5 },
          }}
        >
          <Box
            sx={{
              width: 5,
              height: 5,
              bgcolor: AMBER,
              borderRadius: "50%",
              flexShrink: 0,
            }}
          />
          <Typography
            sx={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: { xs: "1.8rem", md: "2.2rem" },
              letterSpacing: "0.05em",
              color: TEXT,
              lineHeight: 1,
            }}
          >
            CONTACTO
          </Typography>
          <Box sx={{ flex: 1, height: "1px", bgcolor: BORDER }} />
        </Box>
      </motion.div>

      {/* Contact card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Box
          sx={{
            bgcolor: CARD_BG,
            border: `1px solid ${BORDER}`,
            borderRadius: "12px",
            p: { xs: 3, md: "48px" },
            textAlign: "center",
            maxWidth: 560,
            mx: "auto",
          }}
        >
          {/* Amber dot */}
          <Box
            sx={{
              width: 10,
              height: 10,
              bgcolor: AMBER,
              borderRadius: "50%",
              mx: "auto",
              mb: 2.5,
              boxShadow: `0 0 16px rgba(245,166,35,0.6)`,
            }}
          />

          <Typography
            sx={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: { xs: "1.8rem", md: "2.4rem" },
              letterSpacing: "0.04em",
              color: TEXT,
              mb: 1.5,
              lineHeight: 1.1,
            }}
          >
            TRABAJEMOS JUNTOS
          </Typography>

          <Typography
            sx={{
              fontFamily: "'Manrope', sans-serif",
              color: MUTED,
              maxWidth: 400,
              mx: "auto",
              mb: 4,
              lineHeight: 1.85,
              fontSize: { xs: "0.88rem", md: "0.95rem" },
            }}
          >
            Estoy entusiasmado con la posibilidad de colaborar en proyectos
            increíbles. Si algo de mi portafolio te llama la atención, no dudes
            en escribirme.
          </Typography>

          {/* Buttons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 1.5,
              flexWrap: "wrap",
            }}
          >
            <Button
              startIcon={<GitHubIcon sx={{ fontSize: "1rem !important" }} />}
              href={urlGit}
              target="_blank"
              sx={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.72rem",
                letterSpacing: "0.06em",
                textTransform: "none",
                color: MUTED,
                border: `1px solid ${BORDER}`,
                bgcolor: "rgba(255,255,255,0.03)",
                px: 2.5,
                py: 1,
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.07)",
                  borderColor: "rgba(255,255,255,0.15)",
                  color: TEXT,
                },
              }}
            >
              GitHub
            </Button>

            <Button
              startIcon={<LinkedInIcon sx={{ fontSize: "1rem !important" }} />}
              href={urlLinke}
              target="_blank"
              sx={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.72rem",
                letterSpacing: "0.06em",
                textTransform: "none",
                color: "#60A5FA",
                border: "1px solid rgba(37,99,235,0.25)",
                bgcolor: "rgba(37,99,235,0.07)",
                px: 2.5,
                py: 1,
                "&:hover": {
                  bgcolor: "rgba(37,99,235,0.14)",
                  borderColor: "rgba(37,99,235,0.45)",
                },
              }}
            >
              LinkedIn
            </Button>

            <Button
              startIcon={<EmailIcon sx={{ fontSize: "1rem !important" }} />}
              href={`mailto:${email}`}
              sx={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.72rem",
                letterSpacing: "0.06em",
                textTransform: "none",
                color: "#14151A",
                bgcolor: AMBER,
                fontWeight: 700,
                px: 2.5,
                py: 1,
                "&:hover": {
                  bgcolor: "#FFB833",
                  boxShadow: `0 0 18px rgba(245,166,35,0.3)`,
                },
              }}
            >
              Enviar Email
            </Button>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Contact;
