import React from "react";
import { directors } from "../data";

function Directors() {
  console.log(directors)
  return  (
  <div>
  {directors.map((director) => 
   ( <div>
     <h2>{director.name}</h2> 
     <ul>
  {director.movies.map((movie) => <li>{movie}</li>) }
   </ul>
   </div>)
    )
    
  }</div>
  );
}

export default Directors;
