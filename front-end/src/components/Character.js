// Write your Character component here
import React from 'react';
// import "./component/Character.css";

const CharacterCard = (props) => {
    return (
      <article className="character__card">
        <img
          src={props.character.image}
          alt={props.character.name}
          title={props.character.name}
          className="character__card--img"
        />
        <h2 className="character__card--name">{props.character.name}</h2>
        <p className="character__card--species">{props.character.species}</p>
        {/* <Link>
          to={`/character-detail/${props.character.id}`}
          className="character__card--link"
          title="Go to character detail"
        >
          More info
        </Link> */}
      </article>
    );
  };
  export default CharacterCard;