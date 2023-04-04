import React,{ useState, useEffect } from 'react'
import CharacterContainer from '../personajesContainer/characterContainer'
import '../../../pages/characters/personajesContainer/characterContainer.scss'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const CharactersFuncion = () => {
  const [pages, setPages] = useState(0);
  const [personajes,setPersonajes] = useState([])
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  useEffect(() => { consumeApiPersonaje() }, [page] )

    const consumeApiPersonaje = async () => {
        const data = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        const dataJson = await data.json()
        setPages(dataJson.info.pages);
        setPersonajes(dataJson.results)        
    }    

  return ( <>
    <CharacterContainer personajes={personajes} /> 
    <Stack spacing={2}>
    <Pagination count={pages} page={page} onChange={handleChange} />
    </Stack>
    </>)
}
export default CharactersFuncion