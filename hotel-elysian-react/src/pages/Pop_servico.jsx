import React, { useEffect, useState } from "react";
import "../assets/css_pages/pop_servico.css";

function Pop() {
  const [nomeProd, setNomeProd] = useState("");
  const [descricaoProd, setDescricaoProd] = useState("");
  const [imagens, setImagens] = useState([]);
  const [index, setIndex] = useState(0);

  // Função para capturar parâmetros da URL
  function getParametro(info) {
    const params = new URLSearchParams(window.location.search);
    return params.get(info);
  }

  // Carrega os parâmetros quando o componente monta
  useEffect(() => {
    const nome = getParametro("nomeProd");
    const desc = getParametro("descricaoProd");
    const imgs = getParametro("imagemProd");

    setNomeProd(nome || "");
    setDescricaoProd(desc || "");
    setImagens(imgs ? imgs.split(",") : []);
  }, []);

  function mostrarImagemAtual() {
    return imagens.length > 0 ? imagens[index] : "";
  }

  function prev() {
    setIndex((prevIndex) => (prevIndex - 1 + imagens.length) % imagens.length);
  }

  function next() {
    setIndex((prevIndex) => (prevIndex + 1) % imagens.length);
  }

  return (
    <div className="pop">
      <main>
        <div className="slider">
          <div className="sliderDetalhes">
            <button onClick={prev}>&#10094;</button>

            <img src={mostrarImagemAtual()} alt="" id="slider-img" />

            <button onClick={next}>&#10095;</button>
          </div>

          <h1>{nomeProd}</h1>
          <p>{descricaoProd}</p>
        </div>
      </main>
    </div>
  );
}

export default Pop;
