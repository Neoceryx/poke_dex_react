import {Pokemon} from "../models/pokemon_m"

export async function get_pokemons(): Promise<Pokemon[]> {
    const response = await fetch("https://unpkg.com/pokemons@1.1.0/pokemons.json");

    const data = await response.json();
    const pokemons = data.results.map((pokemon: any) => {
        id:pokemon.national_number
        name:pokemon.name
        img: pokemon.sprites["normal"]
        img_large: pokemon.sprites["large"]
        img_gif: pokemon.sprites["animated"]
        hp: pokemon.hp
        attack: pokemon.attack
        defense: pokemon.defense
        sp_atk: pokemon.sp_atk
        sp_def: pokemon.sp_def
        speed: pokemon.speed
    })
    


    return pokemons
}
