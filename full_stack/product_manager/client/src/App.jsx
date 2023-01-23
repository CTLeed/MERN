import './App.css';
import { Link, Navigate, Routes, Route } from "react-router-dom";
import { AllProducts } from "./views/AllProducts";
import { NewProduct } from "./views/NewProduct";
import { OneProduct } from "./views/OneProduct";
import { EditProduct } from "./views/EditProduct";
import { NotFound } from "./views/NotFound";

function App() {
  return (
    <div className="body">
      <div className="container full-screen">
        <nav className='navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4'>
          <h1 className='navbar-brand mb-0'>Product Manager</h1>
          <div className="navbar-nav justify-content-between">
            <Link
              to='/products'
              className="btn btn-small btn-outline-primary mx-1">
              All Products
            </Link>
            <Link
              to='/products/new'
              className="btn btn-small btn-outline-primary mx-1">
              Add A New Product
            </Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Navigate to="/products" replace />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:id/edit" element={<EditProduct />} />
          <Route path="products/:id" element={<OneProduct />} />
          <Route path="products/new" element={<NewProduct />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
