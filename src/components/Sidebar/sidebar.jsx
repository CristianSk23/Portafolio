import {
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArticleIcon from "@mui/icons-material/Article";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CheckIcon from "@mui/icons-material/Check";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useState } from "react";

import perfilAi from "../Design/perfilAi.jpg";
import cvLink from "../Home/cvPdf/Cristian_CastanoCV.pdf";

const AMBER = "#F5A623";
const AMBER_DIM = "rgba(245,166,35,0.09)";
const AMBER_BORDER = "rgba(245,166,35,0.24)";
const BG = "#1C1D24";
const TEXT = "#E8EAF0";
const MUTED = "#7A7D8C";
const BORDER = "rgba(255,255,255,0.07)";

const email = "cristiancp.dev@gmail.com";

const navItems = [
  { label: "Sobre Mí", key: "about" },
  { label: "Portafolio", key: "portfolio" },
  { label: "Contacto", key: "contact" },
];

const skills = [
  "HTML", "CSS", "JavaScript", "PHP",
  "React.js", "Node.js", "Tailwind", "MUI",
  "Java", "C#", "Unity",
];

const linkBtnSx = {
  flex: 1,
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: "0.65rem",
  letterSpacing: "0.05em",
  textTransform: "none",
  color: MUTED,
  border: `1px solid ${BORDER}`,
  bgcolor: "rgba(255,255,255,0.025)",
  py: "7px",
  "&:hover": {
    bgcolor: "rgba(255,255,255,0.07)",
    borderColor: "rgba(255,255,255,0.16)",
    color: TEXT,
  },
};

export default function Sidebar({ activeSection, setActiveSection }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <Box
      component={motion.aside}
      initial={{ opacity: 0, x: -24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      sx={{
        bgcolor: BG,
        border: `1px solid ${BORDER}`,
        borderRadius: "16px",
        p: "22px",
        height: "calc(100vh - 48px)",
        overflowY: "auto",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": { display: "none" },
        display: "flex",
        flexDirection: "column",
        gap: "18px",
      }}
    >
      {/* ── Profile ── */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "11px",
          pt: 1,
        }}
      >
        {/* Avatar with amber conic ring */}
        <Box
          sx={{
            position: "relative",
            display: "inline-flex",
            "&::before": {
              content: '""',
              position: "absolute",
              inset: -3,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${AMBER} 0%, #FF6B35 50%, ${AMBER} 100%)`,
              zIndex: 0,
            },
          }}
        >
          <Avatar
            alt="Cristian Castaño"
            src={perfilAi}
            sx={{
              width: 92,
              height: 92,
              border: `3px solid ${BG}`,
              position: "relative",
              zIndex: 1,
            }}
          />
        </Box>

        {/* Name */}
        <Typography
          sx={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "1.5rem",
            letterSpacing: "0.06em",
            color: TEXT,
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          Cristian Castaño
        </Typography>

        {/* Role badge */}
        <Box
          sx={{
            px: "14px",
            py: "4px",
            bgcolor: AMBER_DIM,
            border: `1px solid ${AMBER_BORDER}`,
            borderRadius: "20px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.65rem",
              color: AMBER,
              minWidth: 116,
              textAlign: "center",
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

      <Divider sx={{ borderColor: BORDER }} />

      {/* ── Section nav ── */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "3px" }}>
        {navItems.map((item) => (
          <Button
            key={item.key}
            onClick={() => setActiveSection(item.key)}
            sx={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.68rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              justifyContent: "flex-start",
              px: "12px",
              py: "8px",
              borderRadius: "8px",
              color: activeSection === item.key ? AMBER : MUTED,
              bgcolor:
                activeSection === item.key ? AMBER_DIM : "transparent",
              border: `1px solid ${
                activeSection === item.key ? AMBER_BORDER : "transparent"
              }`,
              transition: "all 0.2s ease",
              "&:hover": {
                bgcolor: AMBER_DIM,
                color: AMBER,
                borderColor: AMBER_BORDER,
              },
            }}
          >
            {item.label}
          </Button>
        ))}
      </Box>

      <Divider sx={{ borderColor: BORDER }} />

      {/* ── Contact info ── */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {/* Email */}
        <Box
          onClick={copyEmail}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "11px",
            cursor: "pointer",
            p: "8px",
            borderRadius: "8px",
            transition: "all 0.2s",
            "&:hover": { bgcolor: "rgba(255,255,255,0.04)" },
          }}
        >
          <Box
            sx={{
              width: 34,
              height: 34,
              borderRadius: "8px",
              bgcolor: AMBER_DIM,
              border: `1px solid ${AMBER_BORDER}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            {copied ? (
              <CheckIcon sx={{ fontSize: "0.9rem", color: "#4ADE80" }} />
            ) : (
              <EmailOutlinedIcon sx={{ fontSize: "0.9rem", color: AMBER }} />
            )}
          </Box>
          <Box sx={{ overflow: "hidden", minWidth: 0 }}>
            <Typography
              sx={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.52rem",
                color: MUTED,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                mb: "2px",
              }}
            >
              Email
            </Typography>
            <Typography
              sx={{
                fontSize: "0.68rem",
                color: copied ? "#4ADE80" : TEXT,
                lineHeight: 1.3,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {copied ? "¡Copiado!" : email}
            </Typography>
          </Box>
        </Box>

        {/* Location */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "11px",
            p: "8px",
          }}
        >
          <Box
            sx={{
              width: 34,
              height: 34,
              borderRadius: "8px",
              bgcolor: "rgba(255,255,255,0.04)",
              border: `1px solid ${BORDER}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <LocationOnOutlinedIcon
              sx={{ fontSize: "0.9rem", color: MUTED }}
            />
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.52rem",
                color: MUTED,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                mb: "2px",
              }}
            >
              Ubicación
            </Typography>
            <Typography sx={{ fontSize: "0.68rem", color: TEXT, lineHeight: 1.3 }}>
              Colombia
            </Typography>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ borderColor: BORDER }} />

      {/* ── Action buttons ── */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "7px" }}>
        <Box sx={{ display: "flex", gap: "7px" }}>
          <Button
            href="https://github.com/CristianSk23"
            target="_blank"
            startIcon={<GitHubIcon sx={{ fontSize: "0.88rem !important" }} />}
            sx={linkBtnSx}
          >
            GitHub
          </Button>
          <Button
            href="https://www.linkedin.com/in/cristian-castano23/"
            target="_blank"
            startIcon={<LinkedInIcon sx={{ fontSize: "0.88rem !important" }} />}
            sx={{
              ...linkBtnSx,
              color: "#60A5FA",
              bgcolor: "rgba(37,99,235,0.06)",
              borderColor: "rgba(37,99,235,0.22)",
              "&:hover": {
                bgcolor: "rgba(37,99,235,0.13)",
                borderColor: "rgba(37,99,235,0.4)",
                color: "#93C5FD",
              },
            }}
          >
            LinkedIn
          </Button>
        </Box>
        <Button
          href={cvLink}
          download="Cristian_Castano_CV.pdf"
          startIcon={<ArticleIcon sx={{ fontSize: "0.88rem !important" }} />}
          fullWidth
          sx={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.68rem",
            letterSpacing: "0.06em",
            textTransform: "none",
            color: "#14151A",
            bgcolor: AMBER,
            fontWeight: 700,
            py: "8px",
            "&:hover": { bgcolor: "#FFB833", boxShadow: `0 0 18px rgba(245,166,35,0.35)` },
          }}
        >
          Descargar CV
        </Button>
      </Box>

      <Divider sx={{ borderColor: BORDER }} />

      {/* ── Tech stack ── */}
      <Box>
        <Typography
          sx={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.55rem",
            color: MUTED,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            mb: "10px",
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
                transition: "all 0.2s",
                "&:hover": {
                  bgcolor: AMBER_DIM,
                  borderColor: AMBER_BORDER,
                  color: AMBER,
                },
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
