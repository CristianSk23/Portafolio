import React from "react";
import { makeStyles } from "@mui/styles";
const MyWork = ({ title, dark, id }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectionDark}`}>
  <div>MyWork</div>
  </div>
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
  },
  sectionDark: {
    background: "#560bad",
    color: "#ffff",
  },
}));

export default MyWork;
