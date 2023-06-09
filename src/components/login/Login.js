import React, { useState } from "react";

import "./login.css";
import { Col, Container, Form, FormGroup, Input, Row } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

//firebase
import { auth } from "../../firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
//mensajeria
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      console.log("login: ", user);

      setLoading(false);
      toast.success("Inicio exitoso");
      navigate("/peliculas");
    } catch (error) {
      setLoading(false);
      toast.success(error.message);
    }
  };

  return (
    <>
      <Container className="container_">
        <Row className="container__row">
          {loading ? (
            <Col lg="12" className="text-center">
              <h5 className="fw-bold">Loading...</h5>{" "}
            </Col>
          ) : (
            <Col lg="6" className="m-auto mt-5 text-center">
              <h3 className="">Login</h3>

              <Form className="auth__form mt-5" onSubmit={signIn}>
                <FormGroup className="form__group">
                  <Input
                    type="email"
                    placeholder="Introducir email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>

                <FormGroup className="form__group">
                  <Input
                    type="password"
                    placeholder="Introducir password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>

                <button type="submit" className="auth__btn">
                  Login
                </button>
                <Link
                  to="/"
                  className="auth__btn"
                  style={{
                    textDecoration: "none",
                    padding: ".8rem 2rem",
                    marginLeft: ".5rem",
                    outline: "none",
                    background: "red",
                  }}
                >
                  Cancel
                </Link>
                <p>
                  No tienes una cuenta?
                  <Link to="/signup"> Create una cuenta</Link>
                </p>
              </Form>
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
};

export default Login;
