import "./Header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Header() {
  const [exibirMenu, setExibirMenu] = useState(false)

  function mostrarMenu() {
    setExibirMenu((valorAtual) => !valorAtual);
  }

    return (
      <header>
        <div className="cabecalho">
          <div className="text-header">
            <span>NC</span>
            <h1>NATÉCIA COSTA</h1>
          </div>
          <div>
            <button className="menu-button" onClick={mostrarMenu}>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
        <nav className={exibirMenu ? "menu-aberto" : "menu"}>
          <a
            href="#inicio"
          >
            Início
          </a>
          <a
            href="#sobre"
          >
            Sobre mim
          </a>
          <a
            href="#habilidades"
          >
            Habilidades
          </a>
          <a
            href="#projetos"
          >
            Projetos
          </a>
          <a
            href="#contato"
          >
            Contato
          </a>
        </nav>
      </header>
    );
}