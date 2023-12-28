import { Button, Container, Drawer } from "@mui/material";
import React, { useState } from "react";
import NavListDrawer from "./navListDrawer";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}></Button>
      <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
        <NavListDrawer />
      </Drawer>
      {/*  <NavListDrawer />; */}
    </>
  );
};

export default NavBar;
