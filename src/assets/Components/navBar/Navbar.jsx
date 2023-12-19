import { AppBar, List, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link, animateScroll as scroll } from "react-scroll";
import InfoIcon from "@mui/icons-material/Info";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import BuildIcon from "@mui/icons-material/Build";

const links = [
  {
    id: "about",
    text: "Sobre Mi.",
    icon: <InfoIcon />,
  },
  {
    id: "contact",
    text: "Contáctame.",
    icon: <ConnectWithoutContactIcon />,
  },
  {
    id: "myWork",
    text: "Mis Trabajos.",
    icon: <BuildIcon />,
  },
];

function NavBar() {
  const classes = useStyles();
  return (
    <AppBar position="sticky" className={classes.rootNav}>
      <Toolbar className={classes.toolbar}>
        <List className={classes.menu}>
          {links.map(({ id, text }, index) => (
            <Link
              key={index}
              to={id}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              {text}
            </Link>
          ))}
        </List>
      </Toolbar>
    </AppBar>
  );
}

const useStyles = makeStyles((theme) => ({
  toolbar: {
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#4CC9F0",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  menu: {
    "& a": {
      color: "#333",
      fontSize: "1.4rem",
      fontWeight: "bold",
      marginLeft: theme.spacing(3),
    },
  },
}));
export default NavBar;
