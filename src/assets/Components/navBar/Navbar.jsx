import { AppBar, IconButton, List, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link, animateScroll as scroll } from "react-scroll";
import InfoIcon from "@mui/icons-material/Info";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import BuildIcon from "@mui/icons-material/Build";
import MenuIcon from "@mui/icons-material/Menu";

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
              activeClass="active"
              smooth={true}
              duration={500}
              offset={-70}
            >
              {text}
            </Link>
          ))}
        </List>
        <IconButton edge="end" className={classes.menuButton}>
          <MenuIcon ></MenuIcon>
        </IconButton>
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
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    "& a": {
      color: "#333",
      fontSize: "1.4rem",
      fontWeight: "bold",
      marginLeft: theme.spacing(3),
    },
    "& a:hover": {
      cursor: "pointer",
      color: "DarkSlateBlue",
      borderBottom: " 3px solid Indigo",
    },
  },
  menuButton: {
    display: "none",
    /* color: "tomato",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },*/
  }, 
}));
export default NavBar;
