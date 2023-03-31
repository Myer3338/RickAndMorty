import React,{ useState, useEffect } from 'react'
import CharacterContainer from '../personajesContainer/characterContainer'
import '../../../pages/characters/personajesContainer/characterContainer.scss'

const CharactersFuncion = () => {
    const [personajes,setPersonajes] = 
    useState([])
    useEffect(() => { consumeApiPersonaje() }, [] )

    const consumeApiPersonaje = async () => {
        const data = await fetch("https://rickandmortyapi.com/api/character")
        const dataJson = await data.json()
        setPersonajes(dataJson.results)        
    }    

  return ( <CharacterContainer personajes={personajes} /> )
}
export default CharactersFuncion