import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const AMBER = "#F5A623";
const AMBER_DIM = "rgba(245,166,35,0.09)";
const AMBER_BORDER = "rgba(245,166,35,0.24)";
const SECTION_BG = "#1E1F27";
const CARD_BG = "#252631";
const TEXT = "#E8EAF0";
const MUTED = "#7A7D8C";
const BORDER = "rgba(255,255,255,0.07)";

const JobCard = ({ info, index }) => {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % info.image.length);
    }, 3500 + index * 700);
    return () => clearInterval(id);
  }, [info.image.length, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      style={{ height: "100%", display: "flex" }}
    >
      <Card
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          bgcolor: CARD_BG,
          border: `1px solid ${BORDER}`,
          borderRadius: "12px",
          boxShadow: "none",
          transition: "border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease",
          cursor: "default",
          "&:hover": {
            borderColor: AMBER_BORDER,
            boxShadow: `0 16px 40px rgba(0,0,0,0.4), 0 0 0 1px ${AMBER_BORDER}`,
            transform: "translateY(-5px)",
          },
        }}
      >
        {/* Image with dot indicators */}
        <Box sx={{ position: "relative", overflow: "hidden", borderRadius: "12px 12px 0 0" }}>
          <CardMedia
            component="img"
            height="190"
            image={info.image[imgIndex]}
            alt={info.title}
            sx={{ objectFit: "cover", transition: "opacity 0.35s ease" }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 10,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: 0.7,
            }}
          >
            {info.image.map((_, i) => (
              <Box
                key={i}
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  bgcolor: i === imgIndex ? AMBER : "rgba(255,255,255,0.3)",
                  transition: "background-color 0.3s",
                  boxShadow:
                    i === imgIndex
                      ? `0 0 6px rgba(245,166,35,0.8)`
                      : "none",
                }}
              />
            ))}
          </Box>
        </Box>

        <CardContent sx={{ flexGrow: 1, p: "20px" }}>
          <Typography
            sx={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "1.15rem",
              letterSpacing: "0.04em",
              color: TEXT,
              mb: 1,
              lineHeight: 1.2,
            }}
          >
            {info.title}
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "0.82rem",
              color: MUTED,
              lineHeight: 1.7,
            }}
          >
            {info.label}
          </Typography>
        </CardContent>

        <CardActions sx={{ p: "16px", pt: 0 }}>
          <Button
            component={Link}
            to={`/info/${info.id}`}
            size="small"
            endIcon={<ArrowForwardIcon sx={{ fontSize: "0.85rem !important" }} />}
            sx={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.68rem",
              letterSpacing: "0.06em",
              textTransform: "none",
              color: AMBER,
              border: `1px solid ${AMBER_BORDER}`,
              bgcolor: AMBER_DIM,
              px: 2,
              py: 0.6,
              "&:hover": {
                bgcolor: "rgba(245,166,35,0.16)",
                borderColor: AMBER,
                boxShadow: `0 0 14px rgba(245,166,35,0.2)`,
              },
            }}
          >
            Ver proyecto
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  );
};

const Jobs = ({ infoJobs }) => {
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
            mb: 1.5,
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
            03 /
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
            PORTAFOLIO
          </Typography>
          <Box sx={{ flex: 1, height: "1px", bgcolor: BORDER }} />
        </Box>

        <Typography
          sx={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "0.88rem",
            color: MUTED,
            mb: { xs: 3.5, md: 4.5 },
            lineHeight: 1.7,
            maxWidth: 540,
          }}
        >
          Durante mi trayectoria he llevado a cabo proyectos web y de
          videojuegos, consolidando habilidades en soluciones creativas y
          eficientes.
        </Typography>
      </motion.div>

      {/* Cards */}
      <Grid container spacing={2.5}>
        {infoJobs.map((info, index) => (
          <Grid item xs={12} sm={6} md={4} key={info.id} sx={{ display: "flex" }}>
            <JobCard info={info} index={index} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Jobs;
