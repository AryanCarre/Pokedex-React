import React from "react";

const Pokemon = (props) => {
  const { pokemon } = props;
  const onHeartclick = () => {
    alert("favoritou");
  };
  const heart = "❤️";
  return (
    <div className="pokemon-card">
      <div className="pokemon-image-container">
        <img
          alt={pokemon.name}
          src={pokemon.sprites.front_default}
          className="pokemon-image"
        />
      </div>
      <div className="car-body">
        <div className="card-top">
            <h3>{pokemon.name} </h3>
            <div>#{pokemon.id}</div>
        </div>
        <div className="card-bot">
            <div className="pokemon-type">
            {pokemon.types.map((type, index) => {
                return (
                <div key={index} className="pokemon-type-text">
                    {type.type.name}
                </div>
                );
            })}
            </div>
            <button className="pokemon-fav-btn" onClick={onHeartclick}>
            {heart}
            </button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
