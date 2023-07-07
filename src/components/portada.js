import { Link } from "react-router-dom";

export default function Portada() {
  return (
    <div className="portada" style={{ overflow: "hidden", height: "88vh" }}>
      <div className="logoPortada">
        <img
          src="/logo1.PNG"
          alt=""
          style={{ objectFit: "fill", marginTop: "5rem" }}
        />
        <h2>Las películas que querés, donde las necesitas.</h2>
        {/* <button> <Link to={`/Peliculas`} className="link">provisorio a pelis</Link></button> */}
        <button
          style={{
            marginTop: "1rem",
            padding: ".5rem 3rem",
            borderRadius: "5%",
            outline: ".3px solid #fff",
            fontWeight: "bold",
          }}
        >
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
