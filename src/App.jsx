import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import { useState } from "react";
import { apiKey } from "./Utilis";

import MoviesDetails from "./MoviesDetails.jsx";

function App() {
  const [isLoggedIn, setLoggedOut] = useState(false);

  const logOut = () => {
    setLoggedOut(false);
    window.location.pathname = "/Login";
  };
  return (
    <>
      <Link to="/home">Home</Link>
      <Link to="/mobiles">Mobiles</Link>
      {isLoggedIn ? (
        <button onClick={logOut}>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}

      <Routes>
        <Route
          path="/login"
          element={<Login setLogout={setLoggedOut} />}
        ></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
      <MoviesDetails
        name="Trending Movies"
        url={`https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=${apiKey}`}
      />
      <MoviesDetails
        name="Comedy Movies"
        url={`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=35`}
      />
      <MoviesDetails
        name="Action Movies"
        url={`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=28`}
      />
      <MoviesDetails
        name="Horror Movies"
        url={`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=27`}
      />
      <MoviesDetails
        name="Romantic Movies"
        url={`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=99`}
      />
    </>
  );
}

export default App;
