import React from 'react'
import Pokemon from './Pokemon'

function Pokedex(props){
    return(
        <div>
            <h2>Pokedex</h2>
            {props.caughtPokemon.map(e => {
                return <Pokemon 
                            key={e.id}
                            pokemon={e}
                            saveName={props.saveName}
                            releasePokemon={props.releasePokemon}                
                        />
            })}
        </div>
    )
}

export default Pokedex;