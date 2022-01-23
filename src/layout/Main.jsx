import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CharactersList from '../components/CharactersList';
import Filter from '../components/Filter';
import Nav from '../components/Nav';
import Preloader from '../components/Preloader';

const Main = () => {

  const [characters, setChars] = useState()
  const [isLoading, setLoading] = useState(true)
  const [pagesInfo, setPagesInfo] = useState(true)
  const [currentUrl, setUrl] = useState('https://rickandmortyapi.com/api/character')
  const [currentPage, setCurrentPage] = useState(1)


  useEffect(() => {
      fetch(currentUrl)
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

  useEffect(() => {
     let urlQueryParams = new URL(currentUrl);
     setCurrentPage(urlQueryParams.searchParams.get('page') ? urlQueryParams.searchParams.get('page') : 1)
     
  }, [currentUrl]);

  const goNextPage = (url)=>{
    setUrl(url)
    setLoading(true)
    fetch(url)
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
  }

  const filter = (getParam,value) =>{

    let urlQueryParams = new URL(currentUrl);
    urlQueryParams.searchParams.delete('page')
    urlQueryParams.searchParams.set(getParam, value)
    setUrl(urlQueryParams.href)
    setLoading(true)
    fetch(urlQueryParams.href)
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
  }


  return (
    <main>
      <Filter filter={filter} characters={characters}/>
      <Nav currentPage={currentPage} pagesInfo={pagesInfo} goNextPage={goNextPage}/>
      <Container maxWidth="xl" sx={{p: 1, color:"#fff"}}>

      {
        
        isLoading ?  <Preloader/> : <CharactersList characters={characters} />

      }

          


      </Container>
       <Nav currentPage={currentPage} pagesInfo={pagesInfo} goNextPage={goNextPage}/>

    </main>
  )
};

export default Main;
