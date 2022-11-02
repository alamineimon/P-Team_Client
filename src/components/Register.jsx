import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";
import { AuthContext } from "../contexts/AuthProvider";




const auth = getAuth(app);


const Register = () => {


  const { createUser, providerLogin } = useContext(AuthContext);



  const googleProvider = new GoogleAuthProvider();
  const signInwithGoogle = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  };
  
  const githubProvider = new GithubAuthProvider();
  const githuWithGoogle = () => {
    providerLogin( githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  };


  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset()
      })
      .catch((error) => {
        console.log("error:", error);
      });
    

  };









  return (
    <div>
      <h1 className="mt-5 text-center">Please Register </h1>
      <Form   onSubmit = { handleSubmit }  className="col-4 mx-auto ">
        <Form.Group className="mb-3" >
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            name="name"
            id="name"
            type="text"
            placeholder="Enter Your Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            id="email"
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            id="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" >
          <p>
            Alladdy have an account ? <Link to="/login"> Sing in</Link>
          </p>
        </Form.Group>
        <Button variant="primary" type="submit">
          Register Now
        </Button>
        <div className="mt-3 mb-5 ">
          <Button onClick={signInwithGoogle} variant="dark" className="me-3">
            <FcGoogle /> Login
          </Button>
          <Button onClick={githuWithGoogle} variant="dark">
            <BsGithub /> Login
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Register;
