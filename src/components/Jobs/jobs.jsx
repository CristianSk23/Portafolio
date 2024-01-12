import React from "react";
import "./styles.css";
import {
  Box,
  Container,
  Paper,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Grid,
} from "@mui/material";
import imageTech from "../Design/Tech/ft1.jpg";

const Jobs = () => {
  return (
    <Paper>
      <Container elevation={4}>
        <Box
          sx={{
            height: "1080px",
            marginTop: "30px",
            paddingTop: "60px",
            borderWidth: "60px ",
          }}
        >
          <Box>
            <Typography
              variant="subtitle2"
              sx={{ textAlign: "center", fontSize: "2.5rem" }}
            >
              Portafolio
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "center", fontSize: "1.5rem" }}
            >
              Info portafolio
            </Typography>
          </Box>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 1, md: 6, lg: 5 }}
          >
            <Grid item xs={4}>
              <Card
                sx={{
                  maxWidth: 345,
                  marginTop: "60px",
                  width: "310px",
                  height: "387px",
                }}
              >
                <CardMedia
                  sx={{ height: 203 }}
                  image={imageTech}
                  title="TechNook"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    TechNook
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    TechNook, una plataforma E-Commerce cuidadosamente creada
                    por un equipo de 8 desarrolladores.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Mas info</Button>
                </CardActions>
              </Card>
            </Grid>
            {/* Card Sobre TechNook */}
            <Grid item xs={4}>
              <Card
                sx={{
                  maxWidth: 345,
                  marginTop: "60px",
                  width: "310px",
                  height: "387px",
                }}
              >
                <CardMedia
                  sx={{ height: 203 }}
                  image={imageTech}
                  title="TechNook"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Web sobre Videojuegos
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    Aplicación web para amantes de videojuegos, permite explorar
                    y gestionar información de juegos mediante integración con
                    la API de Rawg.io.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Mas info</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                sx={{
                  maxWidth: 345,
                  marginTop: "60px",
                  width: "310px",
                  height: "387px",
                }}
              >
                <CardMedia
                  sx={{ height: 203 }}
                  image={imageTech}
                  title="TechNook"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Web sobre Videojuegos
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    Aplicación web para amantes de videojuegos, permite explorar
                    y gestionar información de juegos mediante integración con
                    la API de Rawg.io.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Mas info</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
          {/* Card Sobre TechNook */}
        </Box>
      </Container>
    </Paper>
  );
};

export default Jobs;
