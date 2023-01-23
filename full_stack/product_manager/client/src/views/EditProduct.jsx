import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductById, updateProduct } from "../services/internalApiServices";

export const EditProduct = (props) => {
    const { id } = useParams();
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        getProductById(id)
            .then((data) => {
                setFormData(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        updateProduct(id, formData)
            .then((data) => {
                console.log("new product data: ", data)
                navigate(`/products/${data._id}`)
            })
            .catch((error) => {
                console.log(error.response?.data?.errors);
                setErrors(error.response?.data?.errors);
            })
    }

    const handleFormChanges = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    if (formData === null) {
        return null;
    }

    const { title, description, price } = formData;
    return (
        <div className="w-50 p-4 rounded mx-auto shadow">
            <h3 className="text-center">Edit Product</h3>
            <form onSubmit={(e) => {
                handleSubmit(e);
            }}>
                <div className="form-group">
                    <label className="h6">Title</label>
                    <input
                        onChange={handleFormChanges}
                        type="text"
                        name="title"
                        value={title}
                        className="form-control" />
                    {
                        errors?.title && (
                            <span className="text-danger">
                                {errors.title?.message}
                            </span>
                        )
                    }
                </div>
                <div className="form-group">
                    <label className="h6">Description</label>
                    <input
                        onChange={handleFormChanges}
                        type="text"
                        name="description"
                        value={description}
                        className="form-control" />
                    {
                        errors?.description && (
                            <span className="text-danger">
                                {errors.description?.message}
                            </span>
                        )
                    }
                </div>
                <div className="form-group">
                    <label className="h6">Price</label>
                    <input
                        onChange={handleFormChanges}
                        type="number"
                        name="price"
                        min="0.01"
                        step="0.01"
                        value={price}
                        className="form-control" />
                    {
                        errors?.price && (
                            <span className="text-danger">
                                {errors.price?.message}
                            </span>
                        )
                    }
                </div>
                <button className="btn btn-success shadow mt-3">Submit</button>
            </form>
        </div>
    )


}