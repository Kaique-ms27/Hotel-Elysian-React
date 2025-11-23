import React, {useEffect} from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import "../assets/css_pages/servico.css";
import {sliders} from "../components/images.js";

export default function Servico() {
    // Cria objeto com data atual
    const data = new Date();

    // Vetor com nomes dos dias da semana
    const dia = ['Domingo', 'Segundo-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];

    // Vetor com nomes dos meses
    const mes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];


    // Função para abrir janela com detalhes do produto
    function abrirDetalhes(nome, imagem, descricao) {
        const url = `/pop?nomeProd=${encodeURIComponent(nome)}&imagemProd=${encodeURIComponent(imagem)}&descricaoProd=${encodeURIComponent(descricao)}`
        window.open(url, "_blank", "width=600,height=500")
    }
    
    useEffect(() => {
        alert("Bem-vindo à nossa página de serviços!");
    }, []);

  return (
    <>  
    <Header />
    <main>
        <section className="nossos_servicos">
            <p className="title_default">Conheça nossos serviços</p>
            <p className="date">
                {dia[data.getDay()] + ', ' + data.getDate() + ' de ' + mes[data.getMonth()] + ' de ' + data.getFullYear()}
            </p>
        </section>
        <div className="container">
            <div className="card" onClick={() => 
                abrirDetalhes(
                    "Spa na Natureza",
                    sliders.spa,
                    "Massagens com óleos orgânicos em cabines de vidro com vista para a floresta."
                )}>
                <img src={sliders.spa[0]} alt="Spa na Natureza" />
                <h2>Spa na Natureza</h2>
                <p className="descricao">
                    Massagens com óleos orgânicos em cabines de vidro com vista para a floresta.
                </p>
                <span className="preco">
                    R$ 450 (90min) | R$ 700 (pacote casal, 120min).
                </span>
            </div>
        </div>
        <div className="container">
    <div className="card" onClick={() =>
        abrirDetalhes(
            "Trilhas Guiadas com Piquenique Gourmet",
            sliders.trilha,
            "Caminhada exclusiva + cesta com queijos, frutas e espumante."
        )}>
        <img src={sliders.trilha[0]} alt="Trilhas Guiadas com Piquenique Gourmet" />
        <h2>Trilhas Guiadas com Piquenique Gourmet</h2>
        <p className="descricao">
            Caminhada exclusiva + cesta com queijos, frutas e espumante.
        </p>
        <span className="preco">
            R$ 300 por pessoa (3h de experiência).
        </span>
    </div>
</div>

<div className="container">
    <div className="card" onClick={() =>
        abrirDetalhes(
            "Jantar Sob as Estrelas",
            sliders.jantar,
            "Menu degustação 5 pratos + vinhos selecionados em deck privativo."
        )}>
        <img src={sliders.jantar[0]} alt="Jantar Sob as Estrelas" />
        <h2>Jantar Sob as Estrelas</h2>
        <p className="descricao">
            Menu degustação 5 pratos + vinhos selecionados em deck privativo.
        </p>
        <span className="preco">
            R$ 600 por pessoa (com harmonização).
        </span>
    </div>
</div>

<div className="container">
    <div className="card" onClick={() =>
        abrirDetalhes(
            "Suite com Piscina Privativa",
            sliders.suite,
            "Diária com mordomo 24h, café da manhã servido na varanda."
        )}>
        <img src={sliders.suite[0]} alt="Suite com Piscina Privativa" />
        <h2>Suite com Piscina Privativa</h2>
        <p className="descricao">
            Diária com mordomo 24h, café da manhã servido na varanda.
        </p>
        <span className="preco">
            R$ 2.800 (noite) – promocional para lua de mel: R$ 2.300.
        </span>
    </div>
</div>

<div className="container">
    <div className="card" onClick={() =>
        abrirDetalhes(
            "Yoga ao Amanhecer no Lago",
            sliders.yoga,
            "Aulas matinais com instrutores certificados."
        )}>
        <img src={sliders.yoga[0]} alt="Yoga ao Amanhecer no Lago" />
        <h2>Yoga ao Amanhecer no Lago</h2>
        <p className="descricao">
            Aulas matinais com instrutores certificados.
        </p>
        <span className="preco">
            R$ 120 (aula avulsa) | R$ 500 (pacote 5 aulas).
        </span>
    </div>
</div>

<div className="container">
    <div className="card" onClick={() =>
        abrirDetalhes(
            "Degustação de Vinhos e Queijos Artesanais",
            sliders.vinho,
            "Seleção de 4 vinhos raros + acompanhamentos."
        )}>
        <img src={sliders.vinho[0]} alt="Degustação de Vinhos" />
        <h2>Degustação de Vinhos e Queijos Artesanais</h2>
        <p className="descricao">
            Seleção de 4 vinhos raros + acompanhamentos.
        </p>
        <span className="preco">
            R$ 250 por pessoa.
        </span>
    </div>
</div>

<div className="container">
    <div className="card" onClick={() =>
        abrirDetalhes(
            "Noite de Cinema sob as Árvores",
            sliders.cine,
            "Sessão privativa com pipoca trufada e cobertores de cashmere."
        )}>
        <img src={sliders.cine[0]} alt="Noite de Cinema sob as Árvores" />
        <h2>Noite de Cinema sob as Árvores</h2>
        <p className="descricao">
            Sessão privativa com pipoca trufada e cobertores de cashmere.
        </p>
        <span className="preco">
            R$ 1.200 (até 6 pessoas).
        </span>
    </div>
</div>
<div className="container">
    <div className="card" onClick={() =>
        abrirDetalhes(
            "Passeio de Barco com Champanhe",
            sliders.barco,
            "Caiaque ou barco a remos + taça de Veuve Clicquot."
        )}>
        <img src={sliders.barco[0]} alt="Passeio de Barco com Champanhe" />
        <h2>Passeio de Barco com Champanhe</h2>
        <p className="descricao">
            Caiaque ou barco a remos + taça de Veuve Clicquot.
        </p>
        <span className="preco">
            R$ 400 (1h30, casal).
        </span>
    </div>
</div>

<div className="container">
    <div className="card" onClick={() =>
        abrirDetalhes(
            "Workshop de Sustentabilidade",
            sliders.work,
            "Oficina de cultivo de ervas e culinária zero waste."
        )}>
        <img src={sliders.work[0]} alt="Workshop de Sustentabilidade" />
        <h2>Workshop de Sustentabilidade</h2>
        <p className="descricao">
            Oficina de cultivo de ervas e culinária zero waste.
        </p>
        <span className="preco">
            R$ 180 por pessoa (inclui kit de plantas).
        </span>
    </div>
</div>
<div className="container">
    <div className="card" onClick={() =>
        abrirDetalhes(
            "Churrasco na Floresta",
            sliders.churras,
            "Carnes nobres (Wagyu, cordeiro) assadas em fogo de chão."
        )}>
        <img src={sliders.churras[0]} alt="Churrasco na Floresta" />
        <h2>Churrasco na Floresta</h2>
        <p className="descricao">
            Carnes nobres (Wagyu, cordeiro) assadas em fogo de chão.
        </p>
        <span className="preco">
            R$ 350 por pessoa (open bar de drinks artesanais).
        </span>
    </div>
</div>
    </main>
    <Footer />
    </>
  );
}