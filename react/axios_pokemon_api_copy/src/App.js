import './App.css';
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { Pokemon } from './views/Pokemon'
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path="/" element={<Navigate to="/pokemon" replace />} />
        <Route path="/pokemon" element={<Pokemon />} />
      </Routes>
    </div>
  );
}

export default App;