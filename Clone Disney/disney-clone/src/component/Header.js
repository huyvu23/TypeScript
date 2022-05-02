import React, { useEffect } from "react";
import styled from "styled-components";

import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { selectUserName, selectUserPhoto, setUserLogin, setSignOut } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        // ! ES6 thay usehistory bằng useNavigate
        navigate("/");
      }
    });
  }, []);

  const signIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      let user = result.user;
      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
      // ! ES6 thay usehistory bằng useNavigate
      navigate("/");
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());
      navigate("/login");
    });
  };
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      {!userName ? (
        <LoginContainer>
          <Login onClick={signIn}>Login</Login>
        </LoginContainer>
      ) : (
        <>
          <NavMenu>
            <Link to="/">
              <img src="/images/home-icon.svg" alt="home" />
              <span>HOME</span>
            </Link>

            <a href="#">
              <img src="/images/search-icon.svg" />
              <span>SEARCH</span>
            </a>
            <a href="#">
              <img src="/images/watchlist-icon.svg" />
              <span>WATCHLIST</span>
            </a>
            <a href="#">
              <img src="/images/original-icon.svg" />
              <span>ORIGINAL</span>
            </a>
            <a href="#">
              <img src="/images/movie-icon.svg" />
              <span>MOVIE</span>
            </a>
            <a href="#">
              <img src="/images/series-icon.svg" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <UserImg
            onClick={signOut}
            // src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-1/275201451_756348222012438_2623977013746518092_n.jpg?stp=dst-jpg_p160x160&_nc_cat=105&ccb=1-5&_nc_sid=7206a8&_nc_ohc=fx-hgPH82DIAX8crC3h&_nc_ht=scontent.fhan2-4.fna&oh=00_AT9GQq0QK9zsVTpCZjqQsGG_blSc04SA6d6MX6IS33j69w&oe=626579EE"
            src={userPhoto}
          />
        </>
      )}
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    color: white;
    text-decoration: none;
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      // ! Khoảng cách các chữ
      letter-spacing: 1.42px;
      position: relative;
      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
`;

const UserImg = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  cursor: pointer;
`;

const LoginContainer = styled.div`
  flex: 1;
  justify-content: end;
  display: flex;
`;

const Login = styled.div`
  border: 1px solid white;
  border-radius: 4px;
  padding: 8px 16px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease 0s;
  &:hover {
    color: black;
    background-color: #f9f9f9;
    border-color: transparent;
  }
`;
