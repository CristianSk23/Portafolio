import { Container } from "@mui/material";
import NavBar from "./components/NavBar/navBar";
import Home from "./components/Home/home";
import Jobs from "./components/Jobs/jobs";

import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/contactMe/contact";

function App() {
  const navArrayLinks = [
    {
      title: "Sobre Mi",
      path: "#/",
      icon: <InfoIcon />,
    },
    {
      title: "Portafolio",
      path: "#Portafolio",
      icon: <WorkIcon />,
    },
    {
      title: "Contáctame",
      path: "#Contactame",
      icon: <ConnectWithoutContactIcon />,
    },
  ];

  return (
    <>
      <NavBar navArrayLinks={navArrayLinks} />
      <Container sx={{ mt: 5 }}>
        {/*         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SobreMi" element={<AboutMe />} />
          <Route path="/Portafolio" element={<Jobs />} />
          <Route path="/Contactame" element={<Contact />} />
        </Routes> */}
        <div id="/">
          <Home />
        </div>
        <div id="Portafolio">
          <Jobs />
        </div>
        <div id="Contactame">
          <Contact />
        </div>
      </Container>
    </>
  );
}

export default App;
