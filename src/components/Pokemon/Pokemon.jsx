import React from 'react';
import styles from './Pokemon.module.css'
import {Container, Row, Col} from 'react-grid-system'
import axios from "axios";

const Pokemon = (props) => {
    const { history } = props
    const { pokemonId } = props.match.params;
    const [pokemon, setPokemon] = React.useState(undefined);

    React.useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
            .then(res => {
            const {data} = res
            setPokemon(data)
        }).catch(error => (
                console.error(error)
            )
        )
    },[pokemonId])


    const pokemonBlock = () => {
        const { id, name, abilities, height, weight, types } = pokemon;
        const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
        const heightIndex = height.toString().split('').join();
        const weightIndex = weight.toString();
        let parseHeight, parseWeight;

            if (heightIndex.length === 1) {
                parseHeight = `0,${heightIndex}`
            } else {
                parseHeight = heightIndex
            }

            if (weightIndex.length === 2) {
                parseWeight = weightIndex.split('',1).join()
            } else {
                parseWeight = weightIndex.match(/.{1,2}/g).join()
            }

        return (
            <>
                <Col xs={12} sm={6}>
                    <div className="cardImage">
                        <img src={fullImageUrl} />
                    </div>
                </Col>
                <Col >
                    <div className="pokemonCard">
                        <div className="cardContent">
                            <h2>{name}</h2>
                            <h4>Types: </h4>
                            <ul>
                                {
                                    types.map((typeInfo, index) => {
                                    const {name} = typeInfo.type;
                                    return <li key={`${index}_${name}`}>{name}</li>
                                })}
                            </ul>
                            <h4>Height</h4>
                            <p>{parseHeight} m</p>
                            <h4>Weight</h4>
                            <p>{parseWeight} kg</p>
                            <h4>Abilities: </h4>
                            <ul>
                                {
                                    abilities.map((abilitiesInfo, index) => {
                                        const {name} = abilitiesInfo.ability;
                                         return <li key={`${index}_${name}`}>{name}</li>
                                    })}
                            </ul>
                            {pokemon !== undefined && (
                                <button variant="contained" onClick={() => history.push('/')}>
                                    back to
                                </button>
                            )}
                        </div>
                    </div>
                </Col>
            </>
        )
    }

    return (
        <Container >
            <Row >
                {pokemon !== undefined && pokemon && pokemonBlock()}
            </Row>
        </Container>
    );
};

export default Pokemon;