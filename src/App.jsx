import NavBar from "../src/assets/Components/navBar/Navbar";
import { makeStyles } from "@mui/styles";
import Contact from "./assets/Components/contact/Contact";
import MyWork from "./assets/Components/myWork/MyWork";
import About from "./assets/Components/about_flder/About";
import { ThemeProvider, createTheme } from "@mui/material";
//import { createMuiTheme } from "@material-ui/core/styles";

const theme = createTheme();
function App() {
  const classes = useStyles();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <NavBar />
        <About id="about" title="Sobre Mi" dark={true} />
        <Contact id="contac" title="Contáctame" dark={false} />
        <MyWork id="myWork" title="Mis trabajos" dark={true} />
      </ThemeProvider>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default App;
