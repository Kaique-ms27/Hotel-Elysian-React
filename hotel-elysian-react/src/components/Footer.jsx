import '../assets/css_components/Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="contact_footer">
        <p className="title_footer">Venha nos Conhecer</p>
        <ul className="contatos">
          <li>
            <i className="fa fa-whatsapp"></i> Whatsapp{" "}
            <a href="https://wa.me/5511937760281">(11) 93776-0281</a>
          </li>
          <li>
            <i className="fa fa-instagram"></i> Instagram{" "}
            <a href="https://instagram.com/kaique.ms27">@kaique.ms27</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
