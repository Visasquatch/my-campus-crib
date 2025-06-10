import React from "react";
import SearchBar from "./components/searchbar.jsx";
import { Outlet } from 'react-router-dom';
import './App.css';

function Home() {


  return (
    <div align="center">
      <section className="openText">
        <div className="open1">Your Campus, Your Comfort</div>
        <div className="open2">
          Book student housing close to top universities in Nigeria – quick, easy, and comfortable.
        </div>
      </section>
      <SearchBar />
      <br /> <br />
      <div className="cards">
        <div className="card">
          <img
            src="https://img.icons8.com/?size=100&id=79387&format=png&color=000000"
            alt="graduation hat"
            style={{ width: "10%", height: "auto", paddingRight: "0" }}
          />
          <div style={{ display: "flex", flexDirection: "column", width: "auto" }}>
            <header>10+ Universities</header>
            <p>Supporting students across multiple universities nationwide with quality housing options.</p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://img.icons8.com/?size=100&id=8021&format=png&color=000000"
            alt="graduation hat"
            style={{ width: "10%", height: "auto", paddingRight: "0" }}
          />
          <div style={{ display: "flex", flexDirection: "column", width: "auto" }}>
            <header>Multiple Beds</header>
            <p>Choose from a variety of room options, from shared rooms to private suites.</p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://img.icons8.com/?size=100&id=7880&format=png&color=000000"
            alt="graduation hat"
            style={{ width: "10%", height: "auto", paddingRight: "0" }}
          />
          <div style={{ display: "flex", flexDirection: "column", width: "auto" }}>
            <header>Major Cities</header>
            <p>Find housing in Nigeria’s top student locations, close to your campus and city life.</p>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default Home;