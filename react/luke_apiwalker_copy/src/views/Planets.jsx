import axios from "axios"
import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Form } from "../components/Form";

export const ShowPlanet = (props) => {
    const { id } = useParams();
    const [planet, setPlanet] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            axios
                .get(`https://swapi.dev/api/planets/${id}`)
                .then((res) => {
                    console.log(res);
                    setPlanet(res.data);
                    // const { name, climate, terrain, surface_water, population } = res;
                })
                .catch((error) => {
                    console.log(error);
                    navigate("/err");
                })
        }, 10)
    }, [id])

    return (
        <div className="container">
            <Form />
            <div className="card">
                <h1>{planet.name}</h1>
                <p><b>Climate: </b> {planet.climate}</p>
                <p><b>Terrain: </b> {planet.terrain}</p>
                <p><b>Surface Water: </b> {planet.surface_water}</p>
                <p><b>Population: </b> {planet.population}</p>
            </div>
        </div>
    )

}
