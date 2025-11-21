import './App.css'
import Index from './pages/Index';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Servico from './pages/Servico';
import Pop_Servico from './pages/Pop_servico';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Servico" element={<Servico />} />
        <Route path="/pop" element={<Pop_Servico />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
