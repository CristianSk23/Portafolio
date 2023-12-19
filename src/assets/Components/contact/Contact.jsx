import React from 'react'
import { makeStyles } from "@mui/styles";
const Contact = ({ title, dark, id }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectionDark}`}>
    <div>Contact</div>
    </div>
  )
}



const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
  },
  sectionDark: {
    background: "#560bad",
    color: '#ffff'
  },
}));

export default Contact