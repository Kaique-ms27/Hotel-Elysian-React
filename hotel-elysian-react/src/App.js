import './App.css'
import Index from './pages/Index';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Servico from './pages/Servico';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Servico" element={<Servico />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
