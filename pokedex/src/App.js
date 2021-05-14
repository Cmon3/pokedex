/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

//import React from "react"; NOT NECESSARY IN NEW VERSION

import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
//import PokemonMoves from "./PokemonMoves";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";

function App() {
  function logWhenClicked() {
    console.log("Hello, is working")
  }
  return (
    <div>
    <Logo handleClick={logWhenClicked} appName="Pokedex"/>
    <BestPokemon abilities={["Anticipation", "Adaptability", "Run-Away"]}/>
    <CaughtPokemon number={30} date={new Date().toLocaleDateString()}/>
    <PokemonMovesSelector />
    <PokemonCity />
    </div>
  )
}

 


/*const Logo = () => {
  const appName = "Pokedex";
  return (<header>
    <h1>Welcome to the {appName}</h1>
    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"></img>
    </header>)
}*/

/*const BestPokemon = () => {
  const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
  return (
  <div>
    <p>My favourite Pokemon is Charizard</p>
    <ul>
    {abilities.map((name, index) => (
      <li key={index}>{name}</li>
    ))}
  </ul>
  </div>
  )
}*/

/*function CaughtPokemon() {
  const date = new Date().toLocaleDateString();
  return <p>Caught 0 Pokemon on {date}</p>
}*/

export default App;
