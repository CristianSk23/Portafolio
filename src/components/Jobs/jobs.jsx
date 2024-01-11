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
} from "@mui/material";


const Jobs = () => {
  return (
    <Paper>
      <Container elevation={4}>
        <Box sx={{ height: "1080px", marginTop: "30px", paddingTop: "60px" }}>
          <Typography variant="h3" sx={{ textAlign: "center" }}>
            Portafolio
          </Typography>
          <Box>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Box>
        </Box>
      </Container>
    </Paper>
  );
};

export default Jobs;
