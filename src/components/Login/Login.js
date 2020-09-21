import React, { useContext, useState } from "react";
import googleIcon from "../../image/icon/google.png";
import fbIcon from "../../image/icon/fb.png"

import './Login.css';
import "firebase/auth";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  handleFBSignIn,
  handleGoogleSignIn,
  handleSignOut,
  initializeLoginFramework,
  resetPassword,
  signInWithEmailAndPassword,
} from "./LoginManager.js";
import { Container } from "react-bootstrap";

function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSingedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
  });
  initializeLoginFramework();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || {
    from: {
      pathname: "/",
    },
  };

  const googleSignIn = () => {
    handleGoogleSignIn().then((result) => {
      handleRespose(result, true);
    });
  };
  const fbSignIn = () => {
    handleFBSignIn().then((result) => {
      handleRespose(result, true);
    });
  };
  const signOut = () => {
    handleSignOut().then((result) => {
      handleRespose(result, false);
    });
  };

  const handleRespose = (result, redirect) => {
    setUser(result);
    setLoggedInUser(result);
    if (redirect) {
      history.replace(from);
    }
  };

  const handleBlur = (event) => {
    let isFieldValid = true;
    if (event.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
    }
    if (event.target.name === "password") {
      const isPasswordValid = event.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(event.target.value.length);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = {
        ...user,
      };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
  };
  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(user.name, user.email, user.password).then(
        (result) => {
          handleRespose(result, true);
        }
      );
    }
    if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password).then((result) => {
        handleRespose(result, true);
      });
    }
    e.preventDefault();
  };

  return (    
      <Container className="login-container text-center pt-5">     
        <hr/>
          <h4> Login </h4>
          <input type="checkbox" name="newUser" onChange={() => setNewUser(!newUser)} id="" />
          <label htmlFor="newUser"> <h6> Create an account</h6> </label>
            <form onSubmit={handleSubmit}>   
                {newUser && ( <input type="text" onBlur={handleBlur} name="name"
                placeholder="your name" required  /> )}
                <br />
                <input type="text" onBlur={handleBlur} name="email"
                placeholder="your email address" required />
                <br />
                <input type="password" onBlur={handleBlur}  name="password"
                placeholder="your password" required />
                <br />
                <input type="submit" value={newUser ? "Create an account" : "Log in"} />
            </form><br/>
          <button onClick={() => resetPassword(user.email)}> Forget or Reset password </button>
          <p style={{ color: "red", }} >  {user.error} </p>
          {user.success && ( <p style={{ color: "green", }} >
          User {newUser ? "created" : "logged In"} successfully </p> )}         
          <hr/><span style={{ color: "black", fontWeight:"700"}}>OR</span><hr/>
          {user.isSignedIn ? ( <button onClick={signOut}> sign out </button> ) :
          ( <button onClick={googleSignIn}>
          <img src={googleIcon} alt="" className="icon"/> Continue with Google</button>)}
          <br /><br/>
          <button onClick={fbSignIn}> 
          <img src={fbIcon} alt="" className="icon"/>Continue with Facebook
          </button>
          {user.isSignedIn && ( <div><p> Welcome, {user.name} </p> <p> {user.email} </p>
          <img src={user.photo} alt="" /> </div> )}
        <hr/>
      </Container>
    
  );
}

export default Login;
