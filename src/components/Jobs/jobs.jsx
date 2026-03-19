import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
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
import wllpaper from "../Design/wllpaper4.jpg";

// Each card manages its own image rotation independently
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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      style={{ height: "100%", display: "flex" }}
    >
      <Card
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          bgcolor: "rgba(22,27,34,0.88)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(10px)",
          transition: "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
          cursor: "default",
          "&:hover": {
            borderColor: "rgba(37,99,235,0.4)",
            boxShadow: "0 20px 48px rgba(0,0,0,0.5)",
            transform: "translateY(-6px)",
          },
        }}
      >
        {/* Image with dot indicators */}
        <Box sx={{ position: "relative", overflow: "hidden" }}>
          <CardMedia
            component="img"
            height="200"
            image={info.image[imgIndex]}
            alt={info.title}
            sx={{
              objectFit: "cover",
              transition: "opacity 0.4s ease",
            }}
          />
          {/* Dot indicators */}
          <Box
            sx={{
              position: "absolute",
              bottom: 10,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: 0.8,
            }}
          >
            {info.image.map((_, i) => (
              <Box
                key={i}
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  bgcolor: i === imgIndex ? "primary.main" : "rgba(255,255,255,0.35)",
                  transition: "background-color 0.3s",
                  boxShadow: i === imgIndex ? "0 0 6px rgba(37,99,235,0.8)" : "none",
                }}
              />
            ))}
          </Box>
        </Box>

        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Typography
            gutterBottom
            variant="h6"
            sx={{ fontWeight: 700, color: "text.primary", mb: 1, lineHeight: 1.3 }}
          >
            {info.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", lineHeight: 1.7 }}
          >
            {info.label}
          </Typography>
        </CardContent>

        <CardActions sx={{ p: 2, pt: 0 }}>
          <Button
            component={Link}
            to={`/info/${info.id}`}
            size="small"
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{ cursor: "pointer" }}
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
        backgroundImage: `linear-gradient(135deg, rgba(10,14,20,0.97) 0%, rgba(10,14,20,0.94) 100%), url(${wllpaper})`,
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
            MIS PROYECTOS
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              textAlign: "center",
              mb: 2,
              background: "linear-gradient(135deg, #F8FAFC 40%, #94A3B8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Portafolio
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "text.secondary",
              maxWidth: 580,
              mx: "auto",
              mb: 8,
              lineHeight: 1.8,
            }}
          >
            Durante mi trayectoria he llevado a cabo proyectos web y de
            videojuegos, consolidando habilidades en soluciones creativas y
            eficientes.
          </Typography>
        </motion.div>

        {/* Cards */}
        <Grid container spacing={4}>
          {infoJobs.map((info, index) => (
            <Grid item xs={12} sm={6} md={4} key={info.id} sx={{ display: "flex" }}>
              <JobCard info={info} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Jobs;
