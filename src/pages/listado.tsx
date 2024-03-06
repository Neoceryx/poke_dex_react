import react from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const Listado = () => {
    return (
        <>
            <h1>Pokemon's</h1>

            <div className="content-wrap">
                <div className="content">
                    <div className="row gap-3">

                        <Card className="mx-auto" style={{ width: '18rem' }}>
                            <Card.Header>Tipo:</Card.Header>
                            <Card.Img variant="top" width="80" height="100" className="d-block mx-auto w-50" src="https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif" />
                            <Card.Body>
                                <Card.Title className="text-center">Card Title</Card.Title>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>HP: ##</ListGroup.Item>
                                    <ListGroup.Item>Ataque: ##</ListGroup.Item>
                                    <ListGroup.Item>Defensa: ##</ListGroup.Item>
                                    <ListGroup.Item>E. Ataque: ##</ListGroup.Item>
                                    <ListGroup.Item>E. Defensa: ##</ListGroup.Item>
                                    <ListGroup.Item>Velocidad: ##</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>

                        <Card className="mx-auto" style={{ width: '18rem' }}>
                            <Card.Header>Tipo:</Card.Header>
                            <Card.Img variant="top" width="80" height="100" className="d-block mx-auto w-50" src="https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif" />
                            <Card.Body>
                                <Card.Title className="text-center">Card Title</Card.Title>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>HP: ##</ListGroup.Item>
                                    <ListGroup.Item>Ataque: ##</ListGroup.Item>
                                    <ListGroup.Item>Defensa: ##</ListGroup.Item>
                                    <ListGroup.Item>E. Ataque: ##</ListGroup.Item>
                                    <ListGroup.Item>E. Defensa: ##</ListGroup.Item>
                                    <ListGroup.Item>Velocidad: ##</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Listado;