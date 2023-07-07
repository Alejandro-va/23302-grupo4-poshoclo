import { Navbar, Nav, Container } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";

import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../feactures/movies/moviesSlice";

const NavbarPelis = () => {
  const dispatch = useDispatch();

  //registro lo que escribe el usuario
  const search = useSelector((state) => state.storeMovie.search);
  const searcher = (e) => {
    dispatch(setSearch(e.target.value));
    console.log(e.target);
  };

  return (
    <Navbar expand="lg" className="barraNav" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img src="/logo1.PNG" width={"130px"} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
            /* className="d-inline-block align-top" */
          >
            <Nav.Link
            className="portadaPeliculas"
              as={Link}
              to="/Peliculas"
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}
            >
              Peliculas
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              value={search}
              onChange={searcher}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
        </Navbar.Collapse>

        {/* sacar esto de aca */}
      </Container>
    </Navbar>
  );
};
export default NavbarPelis;
