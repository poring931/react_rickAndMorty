import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CharactersList from '../components/CharactersList';

const Main = () => {

  const [characters, setChars] = useState()
  const [isLoading, setLoading] = useState(true)
  const [pagesInfo, setPagesInfo] = useState(true)
  // [isLoading, setLoading] = useState(true)

  useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character`)
            .then(response => response.json())
            .then(data => {
              setChars(data.results)
              setPagesInfo(data.info)
              setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
    console.log('component did mount');
  }, []);


  return (
    <main>
    
      <Container maxWidth="xl" sx={{p: 10, color:"#fff"}}>
          <CharactersList characters={characters}/>
      </Container>
    </main>
  )
};

export default Main;
