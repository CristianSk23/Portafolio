import { Box, Button } from "@mui/material";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import NavBar from "./components/NavBar/navBar";
import Home from "./components/Home/home";
import Jobs from "./components/Jobs/jobs";
import About from "./components/aboutMe/aboutMe";
import InfoJobs from "./components/InfoJobs/infoJobs";
import Contact from "./components/contactMe/contact";
import Sidebar from "./components/Sidebar/sidebar";

import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

import imageTech1 from "./components/Design/Tech/ft1.jpg";
import imageTech2 from "./components/Design/Tech/ft2.jpg";
import imageTech3 from "./components/Design/Tech/ft3.jpg";
import imageVg1 from "./components/Design/Tech/ft4VG.jpg";
import imageVg2 from "./components/Design/Tech/ft5VG.jpg";
import imageVg3 from "./components/Design/Tech/ft6VG.jpg";
import imageGD1 from "./components/Design/Tech/ft7GD.jpg";
import imageGD2 from "./components/Design/Tech/ft9GD.jpg";
import imageGD3 from "./components/Design/Tech/ft10GD.jpg";

import "./StylesA.css";

const AMBER = "#F5A623";
const AMBER_DIM = "rgba(245,166,35,0.09)";
const AMBER_BORDER = "rgba(245,166,35,0.24)";
const MUTED = "#7A7D8C";
const TEXT = "#E8EAF0";
const BORDER = "rgba(255,255,255,0.07)";

const tabs = [
  { key: "about", label: "Sobre Mí" },
  { key: "portfolio", label: "Portafolio" },
  { key: "contact", label: "Contacto" },
];

function TabNav({ activeSection, setActiveSection }) {
  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "#1C1D24",
        border: `1px solid ${BORDER}`,
        borderRadius: "12px",
        p: "5px",
        gap: "4px",
        mb: "20px",
      }}
    >
      {tabs.map((tab) => (
        <Button
          key={tab.key}
          onClick={() => setActiveSection(tab.key)}
          sx={{
            flex: 1,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.7rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            py: "9px",
            borderRadius: "8px",
            color:
              activeSection === tab.key ? "#14151A" : MUTED,
            bgcolor:
              activeSection === tab.key ? AMBER : "transparent",
            fontWeight: activeSection === tab.key ? 700 : 400,
            transition: "all 0.22s ease",
            "&:hover": {
              bgcolor:
                activeSection === tab.key
                  ? AMBER
                  : "rgba(255,255,255,0.05)",
              color:
                activeSection === tab.key ? "#14151A" : TEXT,
            },
          }}
        >
          {tab.label}
        </Button>
      ))}
    </Box>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState("about");

  const navArrayLinks = [
    {
      title: "Sobre Mi",
      path: "#SobreMi",
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
        "Aplicación web para amantes de los videojuegos, permite explorar y gestionar información de juegos",
      image: [imageVg1, imageVg2, imageVg3],
    },
    {
      id: 2,
      title: "Desarrollo de Videojuegos",
      label: "Galería de Proyectos como desarrollador de Videojuegos.",
      image: [imageGD1, imageGD2, imageGD3],
    },
  ];

  const navigate = useNavigate();
  const handleNavigation = (path) => navigate(path);

  return (
    <>
      {/* ── Mobile NavBar (hidden on desktop) ── */}
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <NavBar
          navArrayLinks={navArrayLinks}
          onNavigate={handleNavigation}
        />
      </Box>

      {/* ── Page layout ── */}
      <Box
        sx={{
          bgcolor: "#14151A",
          minHeight: "100vh",
          p: { xs: 0, md: "24px" },
        }}
      >
        <Box
          sx={{
            display: { xs: "block", md: "flex" },
            gap: "20px",
            alignItems: "flex-start",
            maxWidth: 1280,
            mx: "auto",
          }}
        >
          {/* ── Sidebar (desktop only) ── */}
          <Box
            sx={{
              width: "274px",
              flexShrink: 0,
              display: { xs: "none", md: "block" },
              position: "sticky",
              top: "24px",
            }}
          >
            <Sidebar
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          </Box>

          {/* ── Main content ── */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    {/* Mobile: all sections scroll */}
                    <Box
                      sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column" }}
                    >
                      <div id="home">
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
                    </Box>

                    {/* Desktop: tab-based one section at a time */}
                    <Box sx={{ display: { xs: "none", md: "block" } }}>
                      <TabNav
                        activeSection={activeSection}
                        setActiveSection={setActiveSection}
                      />
                      {activeSection === "about" && <About />}
                      {activeSection === "portfolio" && (
                        <Jobs infoJobs={infoJobs} />
                      )}
                      {activeSection === "contact" && <Contact />}
                    </Box>
                  </>
                }
              />
              <Route path="/info/:id" element={<InfoJobs />} />
            </Routes>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default App;
