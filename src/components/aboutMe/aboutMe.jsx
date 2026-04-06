import { Avatar, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { motion } from "framer-motion";

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

const AMBER = "#F5A623";
const AMBER_DIM = "rgba(245,166,35,0.09)";
const AMBER_BORDER = "rgba(245,166,35,0.24)";
const SECTION_BG = "#1E1F27";
const CARD_BG = "#252631";
const TEXT = "#E8EAF0";
const MUTED = "#7A7D8C";
const BORDER = "rgba(255,255,255,0.07)";

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

const iconStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};
const iconItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

function AboutMe() {
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
          <Typography
            sx={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.62rem",
              color: AMBER,
              letterSpacing: "0.22em",
            }}
          >
            01 /
          </Typography>
          <Box
            sx={{ width: 5, height: 5, bgcolor: AMBER, borderRadius: "50%", flexShrink: 0 }}
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
            SOBRE MÍ
          </Typography>
          <Box sx={{ flex: 1, height: "1px", bgcolor: BORDER }} />
        </Box>
      </motion.div>

      {/* Bio: avatar + text */}
      <Grid container spacing={{ xs: 4, md: 5 }} alignItems="center" sx={{ mb: { xs: 5, md: 7 } }}>
        <Grid xs={12} md={4} sx={{ display: "flex", justifyContent: "center" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
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
                  background: `linear-gradient(135deg, ${AMBER}, #FF6B35)`,
                  zIndex: 0,
                },
              }}
            >
              <Avatar
                alt="Cristian Castaño"
                src={perfilAi}
                sx={{
                  width: { xs: 140, sm: 170, md: 200 },
                  height: { xs: 140, sm: 170, md: 200 },
                  position: "relative",
                  zIndex: 1,
                  border: `4px solid ${SECTION_BG}`,
                }}
              />
            </Box>
          </motion.div>
        </Grid>

        <Grid xs={12} md={8}>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <Typography
              sx={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: { xs: "0.92rem", md: "1rem" },
                lineHeight: 1.95,
                color: MUTED,
                fontWeight: 400,
              }}
            >
              Desarrollador Full Stack con más de 4 años de experiencia
              construyendo aplicaciones web para distintos contextos y
              necesidades. Me he formado de manera autodidacta y a través de
              proyectos reales. He desarrollado soluciones que van desde
              sistemas de gestión institucional hasta plataformas SaaS propias,
              adaptándome a cada stack según el problema a resolver. Disfruto
              construir productos con impacto real y me desenvuelvo bien tanto
              en equipos como de manera independiente.
            </Typography>
          </motion.div>
        </Grid>
      </Grid>

      {/* Tech section header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mb: { xs: 3, md: 4 },
          }}
        >
          <Typography
            sx={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.62rem",
              color: AMBER,
              letterSpacing: "0.22em",
            }}
          >
            02 /
          </Typography>
          <Box
            sx={{ width: 5, height: 5, bgcolor: AMBER, borderRadius: "50%", flexShrink: 0 }}
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
            TECNOLOGÍAS
          </Typography>
          <Box sx={{ flex: 1, height: "1px", bgcolor: BORDER }} />
        </Box>
      </motion.div>

      {/* Icons grid */}
      <motion.div
        variants={iconStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
      >
        <Grid container spacing={1.5} justifyContent="flex-start">
          {iconsData.map((icon) => (
            <Grid key={icon.label} xs={4} sm={3} md={2}>
              <motion.div variants={iconItem}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1.2,
                    p: { xs: 1.5, md: 2 },
                    borderRadius: "10px",
                    border: `1px solid ${BORDER}`,
                    bgcolor: CARD_BG,
                    transition: "all 0.22s ease",
                    cursor: "default",
                    "&:hover": {
                      bgcolor: AMBER_DIM,
                      border: `1px solid ${AMBER_BORDER}`,
                      transform: "translateY(-4px)",
                      boxShadow: `0 8px 24px rgba(245,166,35,0.12)`,
                    },
                  }}
                >
                  <Avatar
                    alt={icon.label}
                    src={icon.icon}
                    variant="square"
                    sx={{
                      width: { xs: 34, md: 46 },
                      height: { xs: 34, md: 46 },
                      "& img": { objectFit: "contain" },
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: { xs: "0.58rem", md: "0.66rem" },
                      color: MUTED,
                      textAlign: "center",
                      lineHeight: 1.2,
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
    </Box>
  );
}

export default AboutMe;
