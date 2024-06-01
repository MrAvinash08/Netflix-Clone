import axios from "axios";
import { useEffect, useState } from "react";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

import "./style.css";

function MoviesDetails(props) {
  const [moviesInfo, setMoviesInfo] = useState([]);
  const [fetchId, setFetchID] = useState("");

  useEffect(() => {
    axios
      // eslint-disable-next-line react/prop-types
      .get(props.url)
      .then((output) => {
        setMoviesInfo(output.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }); // Added an empty dependency array to ensure this runs only once
  //
  const getmovieDetails = (movieName) => {
    movieTrailer(movieName)
      .then((Output) => {
        const myVideoId = new URLSearchParams(new URL(Output).search).get("v");
        setFetchID(myVideoId);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // eslint-disable-next-line no-undef
  const specialOptions = {
    width: "100%",
    height: "400px",
  };

  return (
    <div>
      <div className="container">
        <h1>{props.name}</h1>

        {moviesInfo.map((i) => {
          return (
            <img
              onClick={() => {
                getmovieDetails(i.title);
              }}
              key={i.id} // Add unique key here
              src={`http://image.tmdb.org/t/p/w500${i.poster_path}`} // Corrected poster path URL
              alt={i.title} // Added alt attribute for accessibility
            />
          );
        })}
      </div>
      {fetchId ? <YouTube opts={specialOptions} videoId={fetchId} /> : null}
    </div>
  );
}

export default MoviesDetails;
