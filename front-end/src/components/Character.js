// Write your Character component here
import React, { useEffect, useState } from 'react';
import React from 'react';
// import "./component/Character.css";

const CharacterCard = () => {
    const [characters, setCharacters] = useState([
        { id: 1, name: 'Rick Sanchez' , status: 'Alive' , image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg" }
    ]);
  
  
      useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/2')
        .then(res => res.json())
        .then(data => setCharacters(data.results))
      }, []); // run once on mount 
  
  
  
    return (
      <div className="App">
        <h1 className="Header">Single Character</h1>
        <h2 className="character">
          
  
        {characters.map((character)=> (
          <div key={character.id}>
           <p> {character.name}</p>
           <img src={character.image} alt="profile pic" />
            {/* {character.image} */}
             {character.status}
             {/* {character.gender} */}
            
            </div>
        ))}
       </h2> 
         
      </div>
      
    );
  }
  
  
  export default CharacterCard;