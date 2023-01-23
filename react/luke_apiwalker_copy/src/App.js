import './App.css';
import { Navigate, Routes, Route, Link } from 'react-router-dom';
import { ShowPerson } from "./views/People";
import { ShowPlanet } from "./views/Planets";
import { NotFound } from './views/NotFound';
import { Form } from "./components/Form";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/people/:id" element={<ShowPerson />} />
        <Route path="/planets/:id" element={<ShowPlanet />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
