import React from 'react';
import styles from './Pokemon.module.css'
import {Container, Row, Col} from 'react-grid-system'

const Pokemon = (props) => {
    const { pokemonId } = props.match.params;
    const [pokemon, setPokemon] = React.useState(undefined);



    console.log(pokemonId)
    return (
        <Container >
            <Row >
                <Col xs={12} sm={6}>
                    <div className="cardImage">
                        <img src="images/sample-1.jpg" />
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus blanditiis consequuntur
                            debitis facilis magnam minima modi nulla perferendis perspiciatis quae quas quia quo quod
                            sapiente suscipit, tenetur unde. Commodi, nobis?
                        </div>
                        <div>Accusantium alias, aliquam animi blanditiis, delectus dicta distinctio dolor ex facere
                            impedit in itaque laudantium libero minus modi odit quasi recusandae repudiandae sit vel.
                            Alias eius quam quod quos suscipit.
                        </div>
                        <div>Assumenda aut consectetur illum modi perspiciatis ratione voluptatum? Blanditiis distinctio
                            nobis repudiandae! Accusantium aliquid ea eaque fugiat illum laborum minima minus odio odit,
                            officiis placeat quam sint sit soluta voluptas!
                        </div>
                    </div>
                </Col>
                <Col >
                    <div className="pokemonCard">
                        <div className="cardContent">
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid culpa cumque
                                dolorum eaque facere itaque labore, nihil odio perspiciatis quisquam suscipit voluptate.
                                Incidunt ipsam perferendis quae, quaerat quidem sunt!
                            </div>
                            <div>Aperiam, eum laudantium modi natus nihil reiciendis? Alias animi aspernatur
                                consequuntur culpa, deleniti eius eos et fugit iste laboriosam magni natus nesciunt
                                nihil obcaecati pariatur perferendis perspiciatis quidem, tempore unde.
                            </div>
                            <div>Aliquid aperiam aut autem, consequuntur corporis dolor fuga fugiat hic illo laboriosam
                                laborum magnam nobis, nulla numquam omnis quis similique soluta veritatis vero voluptas.
                                Dicta error obcaecati odio rem voluptas?
                            </div>
                            <div>Aliquid amet aperiam beatae blanditiis, consectetur consequatur cupiditate delectus
                                dolorum eligendi est fugit id illum ipsa iusto laboriosam nemo neque qui quidem unde
                                voluptas? Accusamus deleniti distinctio ducimus molestiae rerum.
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Pokemon;