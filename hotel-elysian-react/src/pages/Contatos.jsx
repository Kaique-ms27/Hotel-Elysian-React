import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../assets/css_pages/contatos.css";

export default function Contatos() {
  return (
    <>
      <Header />
      <main>
        <p className="title_default">Contatos</p>

        <p className="subtitle_default">
            Entre em contato com a gente! <br/>
            Crie seu cadastro aqui!
        </p>
      <form id="frmContato">
        <fieldset>
          <legend className="texto">Dados Pessoais</legend>
          <label className="sub_texto">* Nome e sobrenome</label>
          <input
            type="text"
            id="nomesobrenome"
            name=""
            className="input-padrao"
            required
            placeholder="Digite seu nome completo"
          />
          <br/><br/>
          <label className="sub_texto">E-mail</label>
          <input
            type="email"
            id="email"
            name=""
            className="input-padrao"
            placeholder="Digite seu E-mail"
          />
          <br/><br/>
          <label className="sub_texto">Telefone</label>
          <input
            type="tel"
            id="telefone"
            name=""
            className="input-padrao"
            placeholder="(XX) XXXXX-XXXX"
          />
          <br/><br/>
          <label className="sub_texto">* Mensagem</label>
          <textarea
            cols="70"
            rows="10"
            id="mensagem"
            className="input-padrao inputs"
            required
          ></textarea>
          <br/>
          <label className="sub_texto">
            Como prefere o nosso contato?
            <br/>
            <input type="radio" value="radio-mail" name="Contato" /> 
            E-mail
            <br />
            <input type="radio" value="radio-telefone" name="Contato" />
            Telefone
            <br />
            <input type="radio" value="radio-whatsapp" name="Contato" />
            Whatsapp
            <br />
          </label>
          <br/>
          <label className="sub_texto">
            Qual o motivo do seu contato?
            <select>
              <option>Selecione</option>
              <option>Dúvida</option>
              <option>Sugestão</option>
              <option>Elogio</option>
              <option>Reclamação</option>
            </select>
          </label>
          <br/>
        </fieldset>
        <label className="texto">
            <input type="checkbox" className="chk" /> Gostaria de receber nossas
            novidades por e-mail?
        </label>
        <input
          type="submit"
          id="enviar"
          value="Enviar formulário"
          className="enviar"
        />
      </form>
    </main>
        <Footer />
    </>
  );
}