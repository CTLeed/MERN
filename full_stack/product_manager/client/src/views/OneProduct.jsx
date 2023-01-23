import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById, deleteProduct } from "../services/internalApiServices";

export const OneProduct = (props) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        getProductById(id)
            .then((data) => {
                setProduct(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id])

    const handleDeleteClick = () => {
        deleteProduct(id)
            .then((data) => {
                navigate('/products');
            })
            .catch((error) => {
                console.log(error);
            })
    }

    if (product === null) {
        return null;
    }

    const { title, description, price } = product;

    return (
        <div className="w-75 mx-auto shadow mb-4 rounded border p-4">
            <h4>{title}</h4>
            <p>{description}</p>
            <p>${price}</p>
            <button className="btn btn-danger mx-auto shadow"
                onClick={handleDeleteClick}
            >Remove</button>
        </div>
    )
}