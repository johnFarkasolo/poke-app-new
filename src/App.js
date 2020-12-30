import React from 'react';
import Navbar from './components/Navbar/Navbar'
import PokedexMenu from "./components/PokedexMenu/PokedexMenu";
import PokedexContent from "./components/PokedexContent/PokedexContent.jsx";
import Pokemon from "./components/Pokemon/Pokemon";
import {BrowserRouter, Route} from "react-router-dom";
import axios from "axios";
import './App.css'


const App = () => {
    const [pokemons, setPokemons] = React.useState({})
    const [menuActive, setMenuActive] = React.useState(false)

    React.useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=30`)
            .then(res => {
                const {results} = res.data;
                const newPokemonData = {}
                results.forEach((pokemon, index) => {
                    newPokemonData[index + 1] = {
                        id: index + 1,
                        name: pokemon.name,
                        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`
                    }
                })
                setPokemons(newPokemonData)
            })
    }, [])

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Navbar active={menuActive} setActive={setMenuActive}/>
                <PokedexMenu pokemons={pokemons} active={menuActive} setActive={setMenuActive}/>
                <div className="app-content">
                    <Route exact path="/">
                        <PokedexContent pokemons={pokemons} />
                    </Route>
                    <Route exact
                           path="/:pokemonId"
                           render={(props) => <Pokemon {...props}/>}
                    />
                </div>
            </div>
            <footer>@copy</footer>
        </BrowserRouter>
    );
};

export default App;