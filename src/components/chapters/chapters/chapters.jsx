import { async } from 'q'
import React,{ useState, useEffect } from 'react'
import ChapterContainer from '../capitulosContainer/chapterContainer'
import '../../../pages/chapters/chapters/chapter.scss'

const Chapters = () => {
    const [capitulos,setCapitulos] = 
    useState([])
    useEffect(() => { consumeApiCapitulos() }, [] )

    const consumeApiCapitulos = async() => {
        const data = await fetch("https://rickandmortyapi.com/api/episode")
        const dataJson = await data.json()
        setCapitulos(dataJson.results)        
    }    

  return ( <ChapterContainer capitulos={capitulos} /> )
}
export default Chapters