import axios from "axios"
import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form } from "../components/Form";

export const ShowPerson = (props) => {
    const { id } = useParams();
    const [person, setPerson] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            axios
                .get(`https://swapi.dev/api/people/${id}`)
                .then((res) => {
                    console.log(res);
                    setPerson(res.data);
                    // const { name, height, mass, hair_color, skin_color, homeworld } = res;
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
            <div div className="card">
                <h1>{person.name}</h1>
                <p><b>Height: </b> {person.height}</p>
                <p><b>Mass: </b> {person.mass}</p>
                <p><b>Hair Color: </b> {person.hair_color}</p>
                <p><b>Skin Color: </b> {person.skin_color}</p>
            </div>
        </div >
    )

}

