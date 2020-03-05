import React, {Component} from 'react'
import Grass from './Grass.js'
import axios from 'axios'

class Finder extends Component {
    constructor(props){
        super(props)
        this.state = {
            wildPokemon: []
        }
    }

    componentDidMount = () => {
        axios.get('/api/wild-pokemon')
            .then(res => {
                this.setState({
                    wildPokemon: res.data
                })
            })
    }

    render(){
        const pokemonList = this.state.wildPokemon.map(e => {
            return <Grass 
                        key={e.id}
                        pokemon={e}
                        refreshFn={this.componentDidMount}
                        catchPokemon={this.props.catchPokemon}
                    />
        })
        return(
            <div className="finder-box">
                {pokemonList}
            </div>
        )
    }
}

export default Finder;