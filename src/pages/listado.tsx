import react, { useState, useEffect, Suspense } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Figure from 'react-bootstrap/Figure';

import { get_pokemons } from "../controller/get_pokemon";
import { Pokemon } from "../models/pokemon_m";


const Listado = () => {

    const[pokemons, setPokemon] = useState<Pokemon[]>([])
    const[query, setQuery] = useState("");
    

    useEffect(() => {
        const get_all_pokemons = async() => {
            setPokemon(await get_pokemons())
        }
        get_all_pokemons();
    });

    const pokemon_list = pokemons?.slice(0, 151)
    const pokemon_filter = pokemon_list.filter((p) =>{
        return p.name.toLowerCase().match(query.toLowerCase())
    })

    return (
        <>
        
            <h1>Pokemon's:  {pokemon_list.length}</h1>

            <div className="content-wrap">
                <div className="content">

                    <div className="row">
                        <header>
                            <input value={query} type="text" placeholder="search pokemon" onChange={(e) => setQuery(e.target.value.trim())} />
                        </header>
                    </div>

                    <div className="row gap-3">

                        {pokemon_filter.map((p, index) => (
                            <Suspense fallback={<Loading />}>
                                
                                <Card key={index} className="mx-auto" style={{ width: '18rem' }}>
                                    <Card.Header>Tipo:{p.type}</Card.Header>
                                    <Card.Img variant="top" width="80" height="100" className="d-block mx-auto w-50" src={p.img_gif} />
                                    <Card.Body>

                                        <Card.Title className="text-center">{p.id} - {p.name}</Card.Title>

                                        <ListGroup variant="flush">

                                            <ListGroup.Item>
                                                <Figure.Image
                                                    width={16}
                                                    height={16}
                                                    alt="171x180"
                                                    src="https://cdn-icons-png.flaticon.com/128/8236/8236748.png"
                                                /> <b>HP: </b>{p.hp}
                                            </ListGroup.Item>

                                            <ListGroup.Item>
                                                <Figure.Image
                                                    width={16}
                                                    height={16}
                                                    alt="171x180"
                                                    src="https://cdn-icons-png.flaticon.com/128/10125/10125564.png"
                                                /> <b>Ataque: </b>{p.attack}
                                            </ListGroup.Item>

                                            <ListGroup.Item>
                                                <Figure.Image
                                                    width={16}
                                                    height={16}
                                                    alt="171x180"
                                                    src="https://cdn-icons-png.flaticon.com/128/11280/11280514.png"
                                                /> <b>Defensa: </b>{p.defense}
                                            </ListGroup.Item>

                                            <ListGroup.Item>
                                                <Figure.Image
                                                    width={16}
                                                    height={16}
                                                    alt="171x180"
                                                    src="https://cdn-icons-png.flaticon.com/128/1793/1793019.png"
                                                /> <b>E. Ataque: </b> {p.sp_atk}
                                            </ListGroup.Item>

                                            <ListGroup.Item>
                                                <Figure.Image
                                                    width={16}
                                                    height={16}
                                                    alt="171x180"
                                                    src="https://cdn-icons-png.flaticon.com/128/13891/13891451.png"
                                                /> <b>E. Defensa: </b>{p.sp_def}
                                            </ListGroup.Item>

                                            <ListGroup.Item>
                                                <Figure.Image
                                                    width={16}
                                                    height={16}
                                                    alt="171x180"
                                                    src="https://cdn-icons-png.flaticon.com/128/478/478793.png"
                                                /> <b>Velocidad: </b>{p.speed}
                                            </ListGroup.Item>

                                        </ListGroup>

                                    </Card.Body>
                                </Card>

                            </Suspense>
                        ))}

                    </div>
                </div>
            </div>

        </>
    )

}

function Loading() {
    return (<h2>Loading...</h2>);
}

export default Listado;