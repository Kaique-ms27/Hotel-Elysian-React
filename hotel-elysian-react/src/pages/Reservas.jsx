import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/css_pages/reservas.css";

export default function Reservas() {
  const [encomendas, setEncomendas] = useState([
    {
      id: 1,
      nome: "Manoela",
      servico: "Jantar sob Estrelas",
      qtde: 2,
      unitario: 600,
    },
    {
      id: 2,
      nome: "Lívia",
      servico: "Workshop de Sustentabilidade",
      qtde: 2,
      unitario: 180,
    },
    {
      id: 3,
      nome: "Kaique",
      servico: "Degustação de Vinhos e Queijos Artesanais",
      qtde: 2,
      unitario: 250,
    },
    {
      id: 4,
      nome: "Pedro Francisco",
      servico: "Noite de Cinema sob as Árvores",
      qtde: 1,
      unitario: 1200,
    },
  ]);

  const [filtro, setFiltro] = useState("");

  // Formatador
  function formataValor(valor) {
    return Number(valor).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  function calculaTotal(qtde, unitario) {
    return formataValor(Number(qtde) * Number(unitario));
  }

  // Buscar encomendas via JSON Server
  async function handleBuscarEncomendas() {
    try {
      const resposta = await fetch("http://localhost:3033/reservas_web");
      const dados = await resposta.json();

      // Adiciona na lista atual
      setEncomendas((old) => [...old, ...dados]);
    } catch (erro) {
      console.error("Erro ao buscar dados da API:", erro);
    }
  }

  // Adicionar nova encomenda
  function handleAdicionar(event) {
    event.preventDefault();

    const form = event.target.closest("form");

    const novaEncomenda = {
      id: Date.now(),
      nome: form.nome.value,
      qtde: form.qtde.value,
      servico: form.servico.value,
      unitario: form.unitario.value,
    };

    setEncomendas([...encomendas, novaEncomenda]);
    form.reset();
  }

  // Remover com fadeOut
  function handleDoubleClick(id) {
    const row = document.getElementById(`row-${id}`);
    if (!row) return;

    row.classList.add("fadeOut");

    setTimeout(() => {
      setEncomendas((old) => old.filter((item) => item.id !== id));
    }, 600);
  }

  // Filtro (substitui totalmente o script antigo)
  const encomendasFiltradas = encomendas.filter((item) =>
    item.nome.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <>
      <Header />
      <main>
        <p className="title_default">Reservas</p>

        <section className="conteiner">
          {/* Campo de busca */}
          <label className="label_filtro" htmlFor="filtrar-tabela">Buscar:</label>
          <input
            type="text"
            id="filtrar-tabela"
            placeholder="Digite o cliente que deseja buscar"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          />

          {/* Tabela */}
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Serviços</th>
                <th>Quantidade</th>
                <th>Valor Unitário</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              {encomendasFiltradas.map((item) => (
                <tr
                  key={item.id}
                  id={`row-${item.id}`}
                  className="clientes"
                  onDoubleClick={() => handleDoubleClick(item.id)}
                >
                  <td className="nome">{item.nome}</td>
                  <td className="servico">{item.servico}</td>
                  <td className="qtde">{item.qtde}</td>
                  <td className="unitario">{formataValor(item.unitario)}</td>
                  <td className="total">
                    {calculaTotal(item.qtde, item.unitario)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button
            id="api-encomenda"
            className="bt_buscar"
            onClick={handleBuscarEncomendas}
          >
            Buscar Encomendas
          </button>
        </section>

        {/* Formulário */}
        <section className="form-pedido">
          <form id="formulario-de-reserva">
            <div className="bloco">
              <div className="bloco_nome">
                <label>Nome: </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  placeholder="Digite seu nome"
                />
              </div>

              <div className="bloco_qtd">
                <label>Quantidade:</label>
                <input
                  type="number"
                  id="qtde"
                  name="qtde"
                  required
                  placeholder="Qtd"
                />
              </div>

              <div className="bloco_produto">
                <label>Produto:</label>
                <select id="servico" name="servico">
                  <option>Selecione</option>
                  <option>Spa na Natureza</option>
                  <option>Trilhas Guiadas com Piquenique Gourmet</option>
                  <option>Jantar Sob as Estrelas</option>
                  <option>Suite com Piscina Privativa</option>
                  <option>Yoga ao Amanhecer no Lago</option>
                  <option>Degustação de Vinhos e Queijos Artesanais</option>
                  <option>Noite de Cinema sob as Árvores</option>
                  <option>Passeio de Barco com Champanhe</option>
                  <option>Workshop de Sustentabilidade</option>
                  <option>Churrasco na Floresta</option>
                </select>
              </div>

              <div className="bloco_unitario">
                <label>Valor Unitário:</label>
                <input
                  type="text"
                  id="unitario"
                  name="unitario"
                  required
                  placeholder="R$"
                />
              </div>
            </div>

            <button type="button" className="bt_adicionar" onClick={handleAdicionar}>
              Adicionar
            </button>
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
}
