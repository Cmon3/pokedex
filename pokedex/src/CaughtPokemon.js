import React from "react";
import { useState } from "react";



function CaughtPokemon(props) {
  const [caught, setCaught] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");

    const handleInputChange = (event) => {
      if  (event.target.value !== "" ) {
        setPokemonNameInput(event.target.value)
      } 
    }

    function catchPokemon() {
     
    setCaught(caught.concat(pokemonNameInput));
    setPokemonNameInput("")
    }//const date = new Date().toLocaleDateString();
    return (
    <div>
      <input type="text" value={pokemonNameInput} onChange={handleInputChange}/>
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