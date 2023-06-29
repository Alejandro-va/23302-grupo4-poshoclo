import {Navbar,Nav,Container} from "react-bootstrap"
import {Outlet,Link} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useEffect, useState } from "react";
import movieApi from "../common/api/movieApi";

const NavbarPelis=()=>{
	

	//registro lo que escribe el usuario
	const [search, setSearch] = useState("");
	const searcher = (e) =>{
		setSearch(e.target.value)
		console.log(e.target)
	}

	//traigo de la api
	const [movies, setMovies] = useState([]);
  
	useEffect (() =>{
		(movieApi.get(`/3/search/movie?query=${search}`))
		.then(response => setMovies(response.data.results))
	}, [search]) 
	console.log(movies.results)


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
		  	value={search} onChange={searcher}
			type="search"
			placeholder="Search"
			className="me-2"
			aria-label="Search"
		  />
		  <Button variant="outline-success">Search</Button>
		</Form>
	  </Navbar.Collapse>
	</Container>
	<div className="results">
	{movies.map((el) => (
          <li> 
              { <img  src={"https://image.tmdb.org/t/p/w500/" + el.poster_path} width="100px" alt="" />}
          </li>))}
	</div>
  </Navbar>
  


);
}
export default NavbarPelis

