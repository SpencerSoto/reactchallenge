import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [characters, setCharacters] = useState([
      { id: 1, name: 'Rick Sanchez' , status: 'Alive' , image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg" }
  ]);


    useEffect(() => {
      fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(data => setCharacters(data.results))
    }, []); // run once on mount 

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Rick and Morty Characters</h1>
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

export default App;
