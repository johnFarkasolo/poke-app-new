import React from 'react';
import styles from './Pokemon.module.css'

const Pokemon = (props) => {
    const { pokemonId } = props.match.params;
    const [pokemon, setPokemon] = React.useState(undefined);

    console.log(pokemonId)
    return (
        <div className={`${styles.row} ${styles.container}`}>
            <div className="gridXS12 gridMD6">
                <div className="pokemonCard">
                    <div className="cardImage">
                        <img src="images/sample-1.jpg" />
                    </div>
                </div>
            </div>
            <div className="gridXS12 gridMD6">
                <div className="pokemonCard">
                    <div className="cardContent">
                        <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pokemon;