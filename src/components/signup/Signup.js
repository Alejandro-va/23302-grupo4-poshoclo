import React, { useState } from "react";

import "./signup.css";
import { Col, Container, Form, FormGroup, Input, Row } from "reactstrap";
import { Link } from "react-router-dom";

//firebase
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";
import { auth, storage, db } from "../../firebase.config";

//mensajeria
import { toast } from "react-toastify";
//router-dom
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  /**********************************
   * firebase
   **********************************/
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
      const user = await userCredential.user;

      //SUBIENDO IMAGENES
      //creo una referencia al objeto de almacenamiento en Firebase Storage
      const storageRef = ref(storage, `images/${Date.now() + username}`);
      //iniciando carga de la imagen tomando 2 parametros: la referencia y el archivo de "file" del imput
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          toast.error(error.message);
        },
        () => {
          //obteniendo la URL de descarga del archivo recién cargado en Firebase Storage
          //Toma como argumento una referencia al archivo, que en este caso se obtiene a través de "uploadTask.snapshot.ref".
          //"getDownloadURL()" devuelve una promesa que se resuelve con la URL de descarga del archivo
          //El parámetro downloadURL en la función de devolución de llamada representa la URL de descarga del archivo.
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            //actualizacion de perfil de ususario
            await updateProfile(user, {
              displayName: username,
              photoURL: downloadURL,
            });

            //almacenar datos de usuario en firestore database
            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: username,
              email,
              photoURL: downloadURL,
            });
          });
        }
      );

      setLoading(false);
      toast.success("Account created");
      navigate("/login");
      console.log(user);
    } catch (error) {
      setLoading(false);
      console.log(error.message);
      toast.error("algo salio mal");
    }
  };

  return (
    <>
      <Container className="container">
        <Row className="container__row">
          {loading ? (
            <Col lg="12" className="text-center">
              <h5 className="fw-bold">Loading....</h5>
            </Col>
          ) : (
            <Col lg="6" className="m-auto mt-5 text-center">
              <h3 className="">Signup</h3>

              <Form className="auth__form mt-5" onSubmit={signup}>
                <FormGroup className="form__group">
                  <Input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
          )}
        </Row>
      </Container>
    </>
  );
};

export default Signup;
