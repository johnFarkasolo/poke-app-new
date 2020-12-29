import React from 'react';
import {Link} from 'react-router-dom'
import styles from './PokedexContent.module.css'
import {toFirstCharacterUppercase} from "../../constants";
import {Container, Row, Col} from 'react-grid-system'

const PokedexContent = ({pokemons}) => {

    const createPokemonBlock = (pokemonId) => {
        const {id, name, sprite} = pokemons[pokemonId]

        return (
            <Col xs={12} sm={6} md={4} lg={3} key={`${id}_${name}`}>
                <Link to={`/${id}`}>
                    <div className={styles.card}>
                        <div className={styles.cardCover}>
                            <div className={styles.cardContent}>
                                <img src={sprite} alt={name}/>
                                <p className={styles.pokemonTitle}>
                                    {`${id}. ${toFirstCharacterUppercase(name)}`}
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </Col>
        )
    }

    return (
        <Container>
            <Row>
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
            </Row>
        </Container>
    );
};

export default PokedexContent;