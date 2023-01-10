import React from "react";

const Logoimg =
  "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
const NavBar = () => {
  return (
    <nav>
      <div>
        <img alt="PokeAPI-Logo" src={Logoimg} className="navbar-img" />
      </div>
    </nav>
  )
}

export default NavBar;
