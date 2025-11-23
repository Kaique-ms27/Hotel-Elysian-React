import './App.css'
import Index from './pages/Index';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Servico from './pages/Servico';
import Contatos from './pages/Contatos';
import Pop_Servico from './pages/Pop_Servico';
import Reservas from './pages/Reservas';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Servico" element={<Servico />} />
        <Route path="/Pop" element={<Pop_Servico />} />
        <Route path="/Contatos" element={<Contatos />} />
        <Route path="/Reservas" element={<Reservas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
