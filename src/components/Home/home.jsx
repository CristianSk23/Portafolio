/* Mobile-only profile card — on desktop the Sidebar replaces this */
import {
  Avatar,
  Box,
  Button,
  Chip,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArticleIcon from "@mui/icons-material/Article";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

import perfilAi from "../Design/perfilAi.jpg";
import cvLink from "./cvPdf/Cristian_CastanoCV.pdf";

const AMBER = "#F5A623";
const AMBER_DIM = "rgba(245,166,35,0.09)";
const AMBER_BORDER = "rgba(245,166,35,0.24)";
const BG = "#1C1D24";
const TEXT = "#E8EAF0";
const MUTED = "#7A7D8C";
const BORDER = "rgba(255,255,255,0.07)";

const email = "cristiancp.dev@gmail.com";

const skills = [
  "HTML", "CSS", "JavaScript", "PHP",
  "React.js", "Node.js", "Tailwind", "MUI",
  "Java", "C#", "Unity",
];

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

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
        bgcolor: BG,
        borderBottom: `1px solid ${BORDER}`,
        px: { xs: 3, sm: 4 },
        py: 5,
      }}
    >
      <motion.div variants={stagger} initial="hidden" animate="show">
        {/* Avatar + name */}
        <motion.div variants={item}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2.5,
              mb: 3,
            }}
          >
            <Box
              sx={{
                position: "relative",
                flexShrink: 0,
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: -3,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${AMBER}, #FF6B35)`,
                  zIndex: 0,
                },
              }}
            >
              <Avatar
                alt="Cristian Castaño"
                src={perfilAi}
                sx={{
                  width: 72,
                  height: 72,
                  border: `3px solid ${BG}`,
                  position: "relative",
                  zIndex: 1,
                }}
              />
            </Box>

            <Box>
              <Typography
                sx={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "1.6rem",
                  letterSpacing: "0.05em",
                  color: TEXT,
                  lineHeight: 1,
                }}
              >
                Cristian Castaño
              </Typography>
              <Box
                sx={{
                  mt: 0.6,
                  px: "12px",
                  py: "3px",
                  bgcolor: AMBER_DIM,
                  border: `1px solid ${AMBER_BORDER}`,
                  borderRadius: "20px",
                  display: "inline-flex",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.62rem",
                    color: AMBER,
                    minWidth: 112,
                  }}
                >
                  <TypeAnimation
                    sequence={[
                      "Full Stack Dev",
                      2500,
                      "Game Developer",
                      2000,
                      "Autodidacta",
                      2000,
                    ]}
                    wrapper="span"
                    speed={60}
                    repeat={Infinity}
                  />
                </Typography>
              </Box>
            </Box>
          </Box>
        </motion.div>

        {/* Description */}
        <motion.div variants={item}>
          <Typography
            sx={{
              fontFamily: "'Manrope', sans-serif",
              color: MUTED,
              lineHeight: 1.85,
              mb: 3,
              fontSize: "0.9rem",
            }}
          >
            Desarrollador Full Stack con base sólida en programación orientada
            a objetos, desarrollo web y creación de videojuegos. Autodidacta,
            colaborativo y motivado por la mejora continua.
          </Typography>
        </motion.div>

        {/* Buttons */}
        <motion.div variants={item}>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
            <Button
              href="https://github.com/CristianSk23"
              target="_blank"
              startIcon={<GitHubIcon sx={{ fontSize: "0.9rem !important" }} />}
              sx={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.68rem",
                textTransform: "none",
                color: MUTED,
                border: `1px solid ${BORDER}`,
                bgcolor: "rgba(255,255,255,0.03)",
                px: 2,
                py: 0.8,
                "&:hover": { bgcolor: "rgba(255,255,255,0.07)", color: TEXT },
              }}
            >
              GitHub
            </Button>
            <Button
              href="https://www.linkedin.com/in/cristian-castano23/"
              target="_blank"
              startIcon={<LinkedInIcon sx={{ fontSize: "0.9rem !important" }} />}
              sx={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.68rem",
                textTransform: "none",
                color: "#60A5FA",
                border: "1px solid rgba(37,99,235,0.22)",
                bgcolor: "rgba(37,99,235,0.06)",
                px: 2,
                py: 0.8,
                "&:hover": { bgcolor: "rgba(37,99,235,0.12)" },
              }}
            >
              LinkedIn
            </Button>
            <Button
              href={cvLink}
              download="Cristian_Castano_CV.pdf"
              startIcon={<ArticleIcon sx={{ fontSize: "0.9rem !important" }} />}
              sx={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.68rem",
                textTransform: "none",
                color: "#14151A",
                bgcolor: AMBER,
                fontWeight: 700,
                px: 2,
                py: 0.8,
                "&:hover": { bgcolor: "#FFB833" },
              }}
            >
              Descargar CV
            </Button>
            <Button
              onClick={copyEmail}
              startIcon={
                copied ? (
                  <CheckIcon sx={{ fontSize: "0.82rem !important" }} />
                ) : (
                  <ContentCopyIcon sx={{ fontSize: "0.82rem !important" }} />
                )
              }
              sx={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.65rem",
                textTransform: "none",
                color: copied ? "#4ADE80" : MUTED,
                border: "1px solid",
                borderColor: copied
                  ? "rgba(74,222,128,0.28)"
                  : BORDER,
                px: 2,
                py: 0.8,
                transition: "all 0.22s",
                "&:hover": { bgcolor: "rgba(255,255,255,0.04)" },
              }}
            >
              {copied ? "¡Copiado!" : email}
            </Button>
          </Box>
        </motion.div>

        {/* Skills */}
        <motion.div variants={item}>
          <Typography
            sx={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.55rem",
              color: MUTED,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              mb: 1.2,
            }}
          >
            // Stack
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {skills.map((s) => (
              <Chip
                key={s}
                label={s}
                size="small"
                sx={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.58rem",
                  height: 22,
                  bgcolor: "rgba(255,255,255,0.04)",
                  color: MUTED,
                  border: `1px solid ${BORDER}`,
                  cursor: "default",
                }}
              />
            ))}
          </Box>
        </motion.div>
      </motion.div>
    </Box>
  );
}

export default Home;
