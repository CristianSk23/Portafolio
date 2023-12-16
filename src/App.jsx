import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import  NavBarLanding  from "../src/assets/Components/navBar/Navbar";
function App() {
  return (
    <>
      <div>
        <NavBarLanding />
      </div>
      <h1>CRISTIAN CASTAÑO</h1>
      <div>
        <p>SOBRE MI</p>
      </div>
    </>
  );
}

export default App;
