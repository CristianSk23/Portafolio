import "bootstrap/dist/css/bootstrap.min.css";
import NavBarLanding from "../src/assets/Components/navBar/Navbar";
import Image from "react-bootstrap/Image";

function App() {
  return (
    <div>
      <div>
        <NavBarLanding />
      </div>
      <div className="container">
        <div id="profile">
          <Image
            src="https://th.bing.com/th/id/OIP.UoKZ1EIG_m98nI96IwQF_gHaEK?rs=1&pid=ImgDetMain/200x180"
            roundedCircle
          />
        </div>
        <h1>SOBRE MI</h1>
        <div>
          <p>
            ¡Hola! Soy Cristian Castaño, un desarrollador con un año de
            experiencia en el mundo de los videojuegos. Actualmente, estoy
            inmerso en mi formación en análisis y desarrollo de software y
            completé con éxito un Bootcamp de Desarrollo Web. Mi fascinación por
            la creación digital me ha guiado hacia la fusión de mis habilidades
            en el desarrollo de videojuegos con la versatilidad del desarrollo
            web. Me encanta explorar nuevas tecnologías y enfoques para seguir
            creciendo como profesional.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
