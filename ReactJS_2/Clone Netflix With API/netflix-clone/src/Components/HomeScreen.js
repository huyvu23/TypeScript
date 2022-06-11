import React from 'react'
import Row from "./Row";
import requests from "../requests";
import Banner from "./Banner";
import Nav from "./Nav";

function HomeScreen() {
  return (
    <>
     <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} isLargeRow={true}></Row>
      <Row title="Trending Now" fetchURL={requests.fetchTrending}></Row>
      <Row title="Top Rate" fetchURL={requests.fetchTopRated}></Row>
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}></Row>
      <Row title="Horror" fetchURL={requests.fetchHorrorMovies}></Row>
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies}></Row>
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries}></Row>
    </>
  )
}

export default HomeScreen