import { Suspense } from "react";
import { Navbar } from "react-bootstrap";

type PokemonList = {
    results: { name: String; url: String; }[];
};
async function getPokemons(): Promise<PokemonList> {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    if (!res.ok) {
        throw new Error("Error al cargar los pokémon");
    }
    return res.json();
}
export default async function PokemonPage() {
    const pokemons = await getPokemons();
    return (
        <div>
            <h1>Lista de Pokémon</h1>
            <ul>
                {pokemons.results.map((pokemon, index) => (
                    <li key={index}><a href={`/pokemon/${index + 1}`}>{pokemon.name}</a></li>
                ))}
            </ul>
        </div>
    );
}

