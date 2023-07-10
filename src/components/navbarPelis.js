import { Navbar, Nav, Container } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";

import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../feactures/movies/moviesSlice";
import avatar from "../images/usuario1.jpg";

//auth
import useAuth from "../custom-hooks/useAuth";
import { useRef } from "react";

const NavbarPelis = () => {
  const dispatch = useDispatch();

  //auth usuario
  const { currentUser } = useAuth();
  //const Avatar = currentUser ? currentUser.photoURL : avatar;

  //registro lo que escribe el usuario
  const search = useSelector((state) => state.storeMovie.search);
  const searcher = (e) => {
    dispatch(setSearch(e.target.value));
    console.log(e.target);
  };

  //toggle
  const avatarActionsRef = useRef(null);
  const toggleProfileActions = () =>
    avatarActionsRef.current.classList.toggle("show_avatar_actions");
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
              style={{
                background: "rgba(0, 0, 0,0.4)",
              }}
            />
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
        </Navbar.Collapse>

        {/* sacar esto de aca */}
        <span className="avatar">
          <p>{currentUser.displayName}</p>
          <img
            src={currentUser ? currentUser.photoURL : avatar}
            alt=""
            onClick={toggleProfileActions}
          />

          <div
            className="avatar_actions"
            ref={avatarActionsRef}
            onClick={toggleProfileActions}
          >
            {currentUser ? (
              <span>Logout</span>
            ) : (
              <div>
                <Link to="/signup">Signup</Link>
                <Link to="/login">Login</Link>
              </div>
            )}
          </div>
        </span>
      </Container>
    </Navbar>
  );
};
export default NavbarPelis;
