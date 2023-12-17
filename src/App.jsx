import "bootstrap/dist/css/bootstrap.min.css";
import NavBarLanding from "../src/assets/Components/navBar/Navbar";

function App() {
  return (
    <div>
      <div>
        <NavBarLanding />
      </div>
      <div className="container">
        <div>
          <div className="perfil-image"></div>
          <h2 id="name">Cristian Castaño</h2>
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
