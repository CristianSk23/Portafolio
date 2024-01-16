import { Container } from "@mui/material";
import NavBar from "./components/NavBar/navBar";
import Home from "./components/Home/home";
import Jobs from "./components/Jobs/jobs";
import About from "./components/aboutMe/aboutMe";
import InfoJobs from "./components/InfoJobs/infoJobs";

import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

// Import of images for the card
//* Images the TechNook web
import imageTech1 from "./components/Design/Tech/ft1.jpg";
import imageTech2 from "./components/Design/Tech/ft2.jpg";
import imageTech3 from "./components/Design/Tech/ft3.jpg";
//* Images the web of videogames
import imageVg1 from "./components/Design/Tech/ft4VG.jpg";
import imageVg2 from "./components/Design/Tech/ft5VG.jpg";
import imageVg3 from "./components/Design/Tech/ft6VG.jpg";
//* Game developer Images
import imageGD1 from "./components/Design/Tech/ft7GD.jpg";
import imageGD2 from "./components/Design/Tech/ft9GD.jpg";
import imageGD3 from "./components/Design/Tech/ft10GD.jpg";

import Contact from "./components/contactMe/contact";
import "./StylesA.css";
import {
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";

function App() {
  
  const navArrayLinks = [
    {
      title: "Sobre Mi",
      path: "#SobreMi",
      icon: <InfoIcon color="secondary" />,
    },
    {
      title: "Portafolio",
      path: "#Portafolio",
      icon: <WorkIcon color="secondary" />,
    },
    {
      title: "Contáctame",
      path: "#Contactame",
      icon: <ConnectWithoutContactIcon color="secondary" />,
    },
  ];

  //* Information for card
  const infoJobs = [
    {
      id: 0,
      title: "TechNook",
      label:
        "TechNook, una plataforma E-Commerce cuidadosamente creada por un equipo de 8 desarrolladores.",
      image: [imageTech1, imageTech2, imageTech3],
    },
    {
      id: 1,
      title: "Web sobre Videojuegos",
      label:
        " Aplicación web para amantes de videojuegos, permite explorar y gestionar información de juegos",
      image: [imageVg1, imageVg2, imageVg3],
    },
    {
      id: 2,
      title: "Desarrollo de Videojuegos",
      label: "Galeria de Proyectos como desarrollador de Videojuegos.",
      image: [imageGD1, imageGD2, imageGD3],
    },
  ];

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      <NavBar navArrayLinks={navArrayLinks} onNavigate={handleNavigation} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div id="/">
                <Home />
              </div>
              <div id="SobreMi">
                <About />
              </div>
              <div id="Portafolio">
                <Jobs infoJobs={infoJobs} />
              </div>
              <div id="Contactame">
                <Contact />
              </div>
            </>
          }
        />
        <Route path="/info/:id" element={<InfoJobs />} />
      </Routes>
    </>
  );
}

export default App;
