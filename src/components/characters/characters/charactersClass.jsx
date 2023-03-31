import React, { Component } from 'react'
import CharacterContainer from '../../templates/personajesContainer/characterContainer'
import './characters.scss'

class CharacterClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            personajes : []
        }
    }

    componentDidMount(){
        fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json() )
        .then(data => this.setState({ personajes: data.results }))
    }

    render(){
        const {personajes} = this.state
        return(
            
            <CharacterContainer personajes={personajes} />

        )
    }
}

export default CharacterClass