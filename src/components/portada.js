import { Link } from "react-router-dom";

export default function Portada() {
  return (
    <div className="portada">
      <div className="logoPortada">
        <img src="/logo1.PNG" alt="" />
        <h2>Las películas que querés, donde las necesitas.</h2>
        {/* <button> <Link to={`/Peliculas`} className="link">provisorio a pelis</Link></button> */}
        <button>
          {" "}
          <Link to={`/login`} className="link">
            Login
          </Link>
        </button>
      </div>
      <div className="fondoPortada">
        <img src="/fondo inicio.png" alt="" />
      </div>
    </div>
  );
}
