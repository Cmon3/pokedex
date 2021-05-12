import React from "react";
import { useState } from "react";



function CaughtPokemon(props) {
  const [caught, setCaught] = useState([]);
    function catchPokemon() {
    setCaught(caught.concat("Pikachu"));
    }//const date = new Date().toLocaleDateString();
    return (
    <div>
      <button onClick={catchPokemon}>Catch another!</button>
      <p>Caught {caught.length} Pokemon on {props.date}</p> 
      <ul>
        {caught.map((pokemon, index) => {
        return <li key={index}>{pokemon}</li>;//pokemon is the same as caught 
      })}
      </ul>
    </div>
    )
}




export default CaughtPokemon;