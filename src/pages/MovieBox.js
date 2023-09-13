import React from "react";
import Rating from "../assets/Rating.png";

const API_IMG = "https://image.tmdb.org/t/p/w500/";
const MovieBox = ({
  titel,
  poster_path,
  vote_average,
  release_date,
  overview,
  popularity,
}) => {
  return (
    <>
      <div className="col-lg-3">
        <div className="card text-center bg-s mb-3">
          <div className="card-body">
            <img className="card-img-top" src={API_IMG + poster_path} />
            <img src={Rating} className="icon px-2 py-1" alt="Rating" />
          </div>
          <h1>Titel</h1>

          <img src={API_IMG + poster_path}></img>
          <img src={Rating} className="icon px-2 py-1" alt="Rating" />
          <p>{overview}</p>
        </div>
      </div>
    </>
  );
};
export default MovieBox;
