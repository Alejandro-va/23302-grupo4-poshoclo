import React, { useState } from "react";

import "./signup.css";
import { Col, Container, Form, FormGroup, Input, Row } from "reactstrap";
import { Link } from "react-router-dom";

//firebase
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  //auth firebase

  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      //Registrado
      const user = userCredential.user;
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Container className="container">
        <Row className="container__row">
          <Col lg="6" className="m-auto mt-5 text-center">
            <h3 className="">Signup</h3>

            <Form className="auth__form mt-5" onSubmit={signup}>
              <FormGroup className="form__group">
                <Input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.username)}
                />
              </FormGroup>

              <FormGroup className="form__group">
                <Input
                  type="email"
                  placeholder="Introducir email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="form__group">
                <Input
                  type="password"
                  placeholder="Introducir password"
                  autoComplete="on"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="form__group">
                <Input
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </FormGroup>

              <button type="submit" className="auth__btn">
                Create una cuenta
              </button>
              <p>
                Ya tienes una cuenta?
                <Link to="/login">Login</Link>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Signup;
