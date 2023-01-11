import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Navbar";
import SearchBar from "./components/Searchbar";
import { searchPokemon } from "./api";

const onSearchHandler = async (pokemon) => {
  const result = await searchPokemon(pokemon)
  console.log(result)
}
function App() {
  return (
    <div>
      <NavBar />
      <SearchBar 
        onSearch={onSearchHandler}
      />
      <div className="App">
      </div>
    </div>
  );
}

export default App;
