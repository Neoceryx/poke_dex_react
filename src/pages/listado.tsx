import react, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import { get_pokemons } from "../controller/get_pokemon";
import { Pokemon } from "../models/pokemon_m";

const Listado = () => {

    const[pokemons, setPokemon] = useState<Pokemon[]>([])

    useEffect(() => {
        const get_all_pokemons = async() => {
            setPokemon(await get_pokemons())
        }
        get_all_pokemons();
    });

    return (
        <>
            <h1>Pokemon's</h1>

            <div className="content-wrap">
                <div className="content">
                    <div className="row gap-3">

                        {pokemons?.slice(0, 12).map((p, index) => (
                            <Card key={index} className="mx-auto" style={{ width: '18rem' }}>
                                <Card.Header>Tipo:{p.type}</Card.Header>
                                <Card.Img variant="top" width="80" height="100" className="d-block mx-auto w-50" src={p.img_gif} />
                                <Card.Body>
                                    <Card.Title className="text-center">{p.id} - {p.name}</Card.Title>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>HP: {p.hp}</ListGroup.Item>
                                        <ListGroup.Item>Ataque: {p.attack}</ListGroup.Item>
                                        <ListGroup.Item>Defensa: {p.defense}</ListGroup.Item>
                                        <ListGroup.Item>E. Ataque: {p.sp_atk}</ListGroup.Item>
                                        <ListGroup.Item>E. Defensa: {p.sp_def}</ListGroup.Item>
                                        <ListGroup.Item>Velocidad: {p.speed}</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        ))}

                    </div>
                </div>
            </div>

        </>
    )

}

export default Listado;