import React from "react";
import { makeStyles, } from "@mui/styles";

const About = ({ title, dark, id }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectionDark}`}>
      <div>
        <div className="perfil-image"></div>
        <div id="name">
          <h2>Cristian Castaño</h2>
          <p>Desarrollador</p>
        </div>
      </div>
      <h1>SOBRE MI</h1>
      <div>
        <p>
          ¡Hola! Soy Cristian Castaño, un desarrollador con un año de
          experiencia en el mundo de los videojuegos. Actualmente, estoy inmerso
          en mi formación en análisis y desarrollo de software y completé con
          éxito un Bootcamp de Desarrollo Web. Mi fascinación por la creación
          digital me ha guiado hacia la fusión de mis habilidades en el
          desarrollo de videojuegos con la versatilidad del desarrollo web. Me
          encanta explorar nuevas tecnologías y enfoques para seguir creciendo
          como profesional.
        </p>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
  },
  sectionDark: {
    background: "#560bad",
    color: '#ffff'
  },
}));

export default About;
