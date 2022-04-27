import React from "react";
import styled from "styled-components";
// import { SignIn } from "../firebase";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
function Login({ setUser }) {
  const SignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        let user = result.user;
        const newUser = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        };
        localStorage.setItem("user", JSON.stringify(newUser));
        setUser(newUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <Container>
      <Content>
        <AmazonLogo src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" alt="Logo" />
        <h1> Sign In Amazon</h1>
        <LoginButton onClick={SignIn}>Sign In With Google</LoginButton>
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f8f8f8;
  display: grid;
  place-items: center;
`;
const Content = styled.div`
  padding: 100px;
  background-color: white;
  box-shadow: 0 1px 3px grey;
  border-radius: 5px;
  text-align: center;
`;
const AmazonLogo = styled.img`
  height: 100px;
  margin-bottom: 40px;
`;
const LoginButton = styled.button`
  background-color: #f0c14b;
  cursor: pointer;
  margin-top: 50px;
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  font-size: 16px;
`;
