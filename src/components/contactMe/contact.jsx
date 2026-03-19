import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import wllpaper from "../Design/wllpaper3.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  const urlGit = "https://github.com/CristianSk23";
  const urlLinke = "https://www.linkedin.com/in/cristian-castano23/";
  const email = "cristian200127@gmail.com";

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(135deg, rgba(13,17,23,0.97) 0%, rgba(13,17,23,0.93) 100%), url(${wllpaper})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        py: { xs: 14, md: 20 },
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Typography
            variant="overline"
            sx={{
              color: "primary.light",
              letterSpacing: "0.2em",
              display: "block",
              mb: 1,
              fontSize: "0.72rem",
            }}
          >
            CONTACTO
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 3,
              background: "linear-gradient(135deg, #F8FAFC 40%, #94A3B8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Trabajemos Juntos
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              maxWidth: 500,
              mx: "auto",
              mb: 6,
              lineHeight: 1.9,
              fontSize: "1.05rem",
            }}
          >
            Estoy entusiasmado con la posibilidad de colaborar en proyectos
            increíbles. Si algo de mi portafolio te llama la atención, no dudes
            en escribirme.
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<GitHubIcon />}
              href={urlGit}
              target="_blank"
              sx={{ cursor: "pointer", px: 4 }}
            >
              GitHub
            </Button>

            <Button
              variant="contained"
              size="large"
              color="secondary"
              startIcon={<LinkedInIcon />}
              href={urlLinke}
              target="_blank"
              sx={{ cursor: "pointer", px: 4 }}
            >
              LinkedIn
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={<EmailIcon />}
              href={`mailto:${email}`}
              sx={{
                borderColor: "rgba(255,255,255,0.15)",
                color: "text.primary",
                cursor: "pointer",
                px: 4,
                "&:hover": {
                  borderColor: "primary.main",
                  bgcolor: "rgba(37,99,235,0.08)",
                },
              }}
            >
              Email
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;
