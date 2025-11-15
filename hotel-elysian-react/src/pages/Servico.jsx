import React, {useEffect} from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Spa1 from'../assets/images/servico/spa1.jpeg';

export default function Servico() {
    // Cria objeto com data atual
    let data = new Date;

    // Vetor com nomes dos dias da semana
    let dia = new Array('Domingo', 'Segundo-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado');

    // Vetor com nomes dos meses
    let mes = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');

    // Função para abrir janela com detalhes do produto
    function abrirDetalhes(nome, imagem, descricao) {
        const url = `pop_servico.html?nomeProd=${encodeURIComponent(nome)}&imagemProd=${encodeURIComponent(imagem)}&descricaoProd=${encodeURIComponent(descricao)}`
        window.open(url, "_blank", "width=600,height=500")
    }

    // Declaração de variáveis de descrição e img dos serviços
    // SPA
    const descricaoSpa =  "Massagens com óleos orgânicos em cabines de vidro com vista para a floresta.";
    const sliderSpa = [{Spa1}, 'images/servico/spa2.jpeg', 'images/servico/spa3.jpeg'];

    //
    
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
            <div className="card" onclick="abrirDetalhes('Concierge Personalizado', sliderSpa, descricaoSpa)">
                <img src={Spa1} alt=""/>
                <h2>Spa na Natureza</h2>
                <p className="descricao">Massagens com óleos orgânicos em cabines de vidro com vista para a floresta.</p>
                <span className="preco">R$ 450 (90min) | R$ 700 (pacote casal, 120min).</span>
            </div>
        </div>
    </main>
    <Footer />
    </>
  );
}