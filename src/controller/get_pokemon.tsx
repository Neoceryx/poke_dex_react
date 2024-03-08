import {Pokemon} from "../models/pokemon_m"

export async function get_pokemons(): Promise<Pokemon[]> {
    const response = await fetch("https://unpkg.com/pokemons@1.1.0/pokemons.json");

    const data = await response.json();
    const pokemons = data.results.map((p: any) => ({
        id: p.national_number,
        name: p.name,
        img: p.sprites['normal'], 
        img_large: p.sprites['large'],  
        img_gif:fix_name(p.sprites['animated']),
        total: p.total,
        hp: p.hp,
        attack: p.attack,
        defense: p.defense,
        sp_atk: p.sp_atk,
        sp_def: p.sp_def,
        speed: p.speed,
        type: p.type[0]
    }));

    const unique_pokemons = pokemons.filter((p: any, index: number) => pokemons.findIndex((other: any) => other.id === p.id) === index);

    return unique_pokemons    
}

export function fix_name(name:string): string {

    if(name.includes("farfetch'd")){
       return name.replace("farfetch'd", "farfetchd")
    }else
    {
        return name;
    }

}
