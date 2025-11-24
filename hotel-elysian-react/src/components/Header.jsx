import React, { useState } from "react";
import logo from "../assets/images/logo-image.png";
import "../assets/css_components/Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <a href="index.html">
        <img
          src={logo}
          alt="Hotel Elysian Grove – Beatus Ille"
          title="Hotel Elysian Grove"
          className="logo"
        />
      </a>

      <nav className={`navbar ${open ? "active" : ""}`}>
        <a href="/">Home</a>
        <a href="/Servico">Serviços</a>
        <a href="/Contatos">Contato</a>
        <a href="/Reservas">Reservas</a>
      </nav>

      <button className="menu-btn" onClick={() => setOpen(!open)}>
        {open ? (
          <span className="menu-icon open">{"\u2715"}</span>
        ) : (
          <span className="menu-icon close">{"\u2630"}</span>
        )}
      </button>

      {open && <div className="overlay" onClick={() => setOpen(false)}></div>}
    </header>
  );
}
