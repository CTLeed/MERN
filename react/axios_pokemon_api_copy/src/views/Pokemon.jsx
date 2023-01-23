import { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';

export const Pokemon = () => {
    const [allPokemon, setAllPokemon] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    const showAll = () => {
        setIsLoading(true)
        setTimeout(() => {
            axios
                .get("https://pokeapi.co/api/v2/pokemon/?limit=807")
                .then((res) => {
                    console.log(res);
                    setAllPokemon(res.data.results)
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    setIsLoading(false)
                })
        }, 1)
    }

    return (
        <div className="d-grid gap-2 col-3 mx-auto">
            <button onClick={(e) => {
                showAll()
            }} className="btn btn-success m-3" >Get Pokemon</button>
            {
                allPokemon.map((pokemon, i) => {
                    const { name } = pokemon;
                    return (
                        <div className="text-center">
                            <ul key={i}>
                                <li>{name}</li>
                            </ul>
                        </div>
                    )
                }
                )}
        </div>
    )

}
