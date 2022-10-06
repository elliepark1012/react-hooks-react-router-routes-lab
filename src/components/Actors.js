import React from "react";
import { actors } from "../data";

function Actors() {
  console.log(actors)
  return  (
  <div>
  {actors.map((actor) => 
   ( <div>
     <h2>{actor.name}</h2> 
     <ul>
  {actor.movies.map((movie) => <li>{movie}</li>) }
   </ul>
   </div>)
    )
    
  }</div>
  );
}

export default Actors;
