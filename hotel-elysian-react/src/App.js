import './assets/css_components/Header.css';
import './assets/css_components/Footer.css';
import "./assets/css_pages/index.css";
import './App.css'
import Index from './pages/Index';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Servico from './pages/Servico';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/servico" element={<Servico />} />
      </Routes>
    </BrowserRouter>
    // <>
    // <Index />
    // </>
  );
}

export default App;
