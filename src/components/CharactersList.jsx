import React from 'react';
import Character from './Character';

const CharactersList = (props) => {
  const{characters = []} = props;


  return <div className='characters_list'>
      {
        characters.length ?
            characters.map(character=>(
                <Character key={character.id} {...character}/>
            ))
            :(<div>Nothing found</div>)
      }
  </div>;
};

export default CharactersList;
