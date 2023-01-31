import React, {useEffect, useState} from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import SearchBar from "./components/Searchbar";
import Pokedex from "./components/Pokedex";
import { getPokemon, getPokemonData } from "./api";


function App() {

  const [loading,setLoading] = useState(false);
  const [pokemons,setPokemons] = useState([]);
  const fetchPokemons = async () => {
    try{
      setLoading(true)
      const data = await getPokemon();
      const promises = data.results.map(async (pokemon) =>{
        return await getPokemonData(pokemon.url)
      });

      const results = await Promise.all(promises); 
      setPokemons(results);
      setLoading(false);
    }
    catch (error){
      console.log("fetchPokemons error: ", error);
    }
  }
  useEffect( () =>{
    console.log("carregou")
    fetchPokemons();
  }, [])
  return (
    <div>
      <NavBar />
      <SearchBar />
      <Pokedex pokemons={pokemons} loading={loading}/>
    </div>
  );
}

export default App;
