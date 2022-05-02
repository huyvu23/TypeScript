import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import db from "../firebase";

function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        console.log("doc", doc);
        if (doc.exists) {
          setMovie(doc.data());
        } else {
          console.log("no such document in firebase 🔥");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

  return (
    <Container>
      {movie && (
        <>
          <Background>
            <img src={movie.backgroundImg} alt="error" />
          </Background>
          <ImageTitle>
            <img src={movie.titleImg} alt="error" />
          </ImageTitle>
          <Controls>
            <PlayButton>
              <img src="/images/play-icon-black.png" alt="error" />
              <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
              <img src="/images/play-icon-white.png" alt="error" />
              <span>TRAILER</span>
            </TrailerButton>
            <AddButton>
              <span> +</span>
            </AddButton>
            <GroupWatchButton>
              <img src="/images/group-icon.png" alt="error" />
            </GroupWatchButton>
          </Controls>
          <SubTitle>{movie.subTitle}</SubTitle>
          <Description>{movie.description}</Description>
        </>
      )}
    </Container>
  );
}

export default Details;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vh + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  margin-top: 100px;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  padding: 0 24px;
  margin-right: 22px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  border: none;
  background-color: rgb(249, 249, 249);
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background-color: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  color: rgb(249, 249, 249);
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
`;

const AddButton = styled.button`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  span {
    font-size: 30px;
    color: white;
  }
`;

const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  margin-top: 26px;
  font-size: 15px;
  min-height: 20px;
`;

const Description = styled.div`
  line-height: 1.4;
  margin-top: 16px;
  font-size: 20px;
  max-width: 600px;
`;
