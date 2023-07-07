import React, { useState } from "react";

import "./login.css";
import { Col, Container, Form, FormGroup, Input, Row } from "reactstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Container className="container">
        <Row className="container__row">
          <Col lg="6" className="m-auto mt-5 text-center">
            <h3 className="">Login</h3>

            <Form className="auth__form mt-5" onSubmit={signIn}>
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
                  value={email}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>

              <button type="submit" className="auth__btn">
                Login
              </button>
              <p>
                No tienes una cuenta?
                <Link to="/signup"> Create una cuenta</Link>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
