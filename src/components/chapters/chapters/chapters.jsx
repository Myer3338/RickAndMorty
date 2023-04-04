import { async } from 'q'
import React, { useState, useEffect } from 'react'
import ChapterContainer from '../capitulosContainer/chapterContainer'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import '../../../pages/chapters/chapters/chapters.scss'

const Chapters = () => {
  const [pages, setPages] = useState(0);
  const [capitulos, setCapitulos] = useState([]);
  const [page, setPage] = React.useState(1);
  const handleChange = ( value) => {
    setPage(value);
  };
  useEffect(() => { consumeApiCapitulos() }, [page])
  const consumeApiCapitulos = async () => {
    const data = await fetch(`https://rickandmortyapi.com/api/episode?page=${page}`)
    const dataJson = await data.json()
    setPages(dataJson.info.pages);
    const caps = await Promise.all(dataJson.results.map(async (capitulo) => {
      let random = Math.round(Math.random() * (capitulo.characters.length - 1));
      const data = await fetch(capitulo.characters[random])
      const dataJson = await data.json();
      capitulo.image = dataJson.image;
      return capitulo;
    }));
    setCapitulos(caps);
  }

  return (<>
    <ChapterContainer capitulos={capitulos} />
    <Stack spacing={2}>
      <Pagination count={pages} page={page} onChange={handleChange} />
    </Stack>
  </>)
}
export default Chapters