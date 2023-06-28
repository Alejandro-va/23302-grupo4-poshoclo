import {Navbar,Nav,Container} from "react-bootstrap"
import {Outlet,Link} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarPelis=()=>{

return(
	<Navbar expand="lg" className="bg-body-tertiary">
	<Container fluid>
	  <Navbar.Brand as={Link} to="/">PoshoClo</Navbar.Brand>
	  <Navbar.Toggle aria-controls="navbarScroll" />
	  <Navbar.Collapse id="navbarScroll">
		<Nav
		  className="me-auto my-2 my-lg-0"
		  style={{ maxHeight: '100px' }}
		  navbarScroll
		>
          <Nav.Link as={Link} to="/Peliculas">Peliculas</Nav.Link>
		</Nav>
		<Form className="d-flex">
		  <Form.Control
			type="search"
			placeholder="Search"
			className="me-2"
			aria-label="Search"
		  />
		  <Button variant="outline-success">Search</Button>
		</Form>
	  </Navbar.Collapse>
	</Container>
  </Navbar>
);
}
export default NavbarPelis

