import React from "react";
import { movies } from "../data";

function Movies() {
  console.log(movies);
  return (
  <div>
   <h1>Movies Page</h1>
   {movies.map((movie) => 
   <div>
   <h2>{`Title: ${movie.title}`}</h2>
   <h2>{`Time: ${movie.time}`}</h2>
   <ul>
  {movie.genres.map((genre) => <li>{genre}</li>) }
   </ul>
   </div>
   )}
    <div>

    </div>
   
  </div>
  );
}

export default Movies;
