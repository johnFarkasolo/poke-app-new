import React from 'react';
import { Link } from 'react-router-dom'
import './PokedexContent.css'
import {toFirstCharacterUppercase} from "../../constants";

const PokedexContent = ({pokemons}) => {

    const createPokemonBlock = (pokemonId) => {
        const {id, name, sprite} = pokemons[pokemonId]

        return (
            <div className="col s12 m6 l4" key={`${id}_${name}`}>
                <Link to={`/${id}`}>
                    <div className="card small">
                        <div className="card-image">
                            <img src={sprite} alt={name}/>
                            <p className="pokemon-title">
                                {`${id}. ${toFirstCharacterUppercase(name)}`}
                            </p>
                        </div>
                    </div>
                </Link>
            </div>

        )
    }

    return (
        <div className="row container">
            {pokemons ?
                Object.keys(pokemons).map(pokemonId => (
                    createPokemonBlock(pokemonId)
                ))
                :
                <div className="preloader-wrapper big active">
                    <div className="spinner-layer spinner-blue-only">
                        <div className="circle-clipper left">
                            <div className="circle"></div>
                        </div>
                        <div className="gap-patch">
                            <div className="circle"></div>
                        </div>
                        <div className="circle-clipper right">
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default PokedexContent;