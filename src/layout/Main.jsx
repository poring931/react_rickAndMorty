import React, { useEffect, useState } from 'react';

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
                this.setState({ loading: false})
            })
    console.log('component did mount');
  }, []);


  return (
    <main>

    </main>
  )
};

export default Main;
