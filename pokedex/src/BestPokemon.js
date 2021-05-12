import React from "react";


const BestPokemon = (props) => {
    //const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
    return (
    <div>
      <p>My favourite Pokemon is Charizard</p>
      <ul>
      {props.abilities.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
    </div>
    )
  }

  export default BestPokemon;