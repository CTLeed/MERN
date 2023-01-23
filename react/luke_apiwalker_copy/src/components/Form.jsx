import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Form = () => {
    const [category, setCategory] = useState("people");
    const [id, setId] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${category}/${id}`)
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <label className="form-label">Search for:</label>
                <select name="category" value={category} onChange={(e) => {
                    setCategory(e.target.value);
                }}>
                    <option value="people">Person</option>
                    <option value="planets" >Planet</option>
                </select>
                <label id="id">ID:</label>
                <input name="id" id="id" type="number" value={id} onChange={(e) => {
                    setId(e.target.value)
                }} />
                <button>Search</button>
            </form>
        </div>
    )
}