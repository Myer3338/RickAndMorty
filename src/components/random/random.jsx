import { async } from 'q'
import React,{ useState, useEffect } from 'react'
import RandomContainer from '../random/randomContainer/randomContainer'

const RandomFuncion = () => {
    const [random,setPersonajes] = 
    useState([])
    useEffect(() => { consumeApiPersonaje() }, [] )

    const consumeApiPersonaje = async() => {
        const data = await fetch("https://rickandmortyapi.com/api/character")
        const dataJson = await data.json()
        setPersonajes(dataJson.results)        
    }    

  return ( 
    <main className="randomCharacters">
    <RandomContainer randomPersonaje={random} /> 
    </main>)
}
export default RandomFuncion

