import { Container } from "@mui/material";
import NavBar from "./components/NavBar/navBar";
import Home from "./components/Home/home";
import Jobs from "./components/Jobs/jobs";
import About from "./components/aboutMe/aboutMe";
import InfoJobs from "./components/InfoJobs/infoJobs";

import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

import Contact from "./components/contactMe/contact";
import "./StylesA.css";
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

  return (
    <>
      <NavBar navArrayLinks={navArrayLinks} />

      <div id="/">
        <Home />
      </div>
      <div id="SobreMi">
        <About />
      </div>
      <div id="Portafolio">
        <Jobs />
      </div>
      <div id="Contactame">
        <Contact />
      </div>
    </>
  );
}

export default App;
