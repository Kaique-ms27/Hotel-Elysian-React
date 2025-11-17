import React from "react";
import img_sobre_nos from "../assets/images/sobre-nos-image.jpg";
import img_services from "../assets/images/service-image.jpg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../assets/css_pages/index.css";

export default function Index() {
  return (
    <>
      <Header />
      <div className="banner"></div>
      <main>
        <section className="about_us">
          <br />
          <h2 className="title_default">Sobre Nós</h2>
          <p className="subtitle_default">Conheça um pouco sobre a gente</p>
          <img src={img_sobre_nos} className="image_about_us" />
          <p className="p_about_us">
            Bem-vindo ao{" "}
            <b>
              <i>Hotel Elysian Grove</i>
            </b>{" "}
            Descubra o conforto, a elegância e a hospitalidade que só o
            <i>Hotel Elysian Grove</i> pode oferecer. Localizado em um ponto
            estratégico e acolhedor, nosso hotel é ideal para quem busca uma
            estadia tranquila, com atendimento personalizado e estrutura
            completa para descanso ou negócios. No{" "}
            <b>
              <i>Hotel Elysian Grove</i>
            </b>
            , cada detalhe é pensado para proporcionar uma experiência
            inesquecível!
          </p>
          <br />
          <br />
          <br />
          <br />
        </section>
        <section className="our_establishment">
          <h2 className="title_default">Nosso Estabelecimento</h2>
          <p className="subtitle_default">Venha nos conhecer</p>
          <br />
          <div className="map_location">
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49163.91350716014!2d-46.54980759230388!3d-23.671318086088988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce40348f383221%3A0x2c10353bae7a7a36!2sAv%20Pedro%20Mendes%201742!5e0!3m2!1spt-BR!2sbr!4v1740786778859!5m2!1spt-BR!2sbr"
              width="900"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <h2 className="title_default">Nossos Serviços</h2>
        <p className="subtitle_default">Venha ver o que temos a oferecer</p>
        <section className="our_services">
          <div className="div_our_services">
            <img src={img_services} className="image_our_services" />
            <ul className="ul_our_services">
              <li>Concierge Personalizado</li>
              <li>Jantar Sob as Estrelas</li>
              <li>Trilhas Guiadas com Piquenique</li>
              <li>Suite com Piscina Privativa de Bordas Infinitas</li>
            </ul>
          </div>
        </section>
        <br />
        <br />
        <br />
        <div className="video">
          <iframe
            className="map"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/2LqJe9LhWc4?si=qlhlIf096i5KonFR"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            style={{ borderRadius: "25px" }}
          ></iframe>
        </div>
      </main>
      <Footer />
    </>
  );
}
