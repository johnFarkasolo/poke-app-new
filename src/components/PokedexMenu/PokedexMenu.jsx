import React from 'react';
import {Link} from 'react-router-dom'
import './PokedexMenu.css'
import {toFirstCharacterUppercase} from "../../constants";

const PokedexMenu = ({ pokemons, active, setActive}) => {

    const createPokemonList = (pokemonId) => {
        const {id, name} = pokemons[pokemonId]

        return (
            <Link
                to={`/${id}`}
                className="collection-item menu__list"
                key={`${id}_${name}`}
            >
                {`${id}. ${toFirstCharacterUppercase(name)}`}
            </Link>
        )
    }

    return (
        <div className={active ? "menu active" : "menu"} onClick={() => setActive(false)}>
            <div className="blur"/>
            <div className="menu__content" onClick={event => event.stopPropagation()}>
                <div className="collection">
                    {
                        Object.keys(pokemons).map(pokemonId => (
                            createPokemonList(pokemonId)
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default PokedexMenu;