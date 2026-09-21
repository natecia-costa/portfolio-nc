import "./Inicio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faEnvelope, faDownload, faLocationDot, faLayerGroup, faCalendar } from "@fortawesome/free-solid-svg-icons";
import Curriculo from "/curriculo-natecia.pdf"

export default function Inicio() {
  return (
    <section id="inicio">
      <div className="info">
        <div className="info-iniciais">
          <span>Olá, eu sou</span>
          <h1>
            Natécia <span>Costa</span>
          </h1>
          <h3>Estudante de ADS | Desenvolvedora Front-end em formação</h3>
          <p className="introducao">
            Sou apaixonada por tecnologia, design e por construir soluções que tornam a experiência do usuário mais simples e intuitiva. Estou em constante aprendizado e buscando minha primeira oportunidade na área de Front-end.
          </p>
          <div className="acesso">
            <a className="btn-acesso" href="#projetos">
              <FontAwesomeIcon icon={faLayerGroup} />
              Ver meus projetos
            </a>
            <a className="btn-acesso" href={Curriculo} download>
              <FontAwesomeIcon icon={faDownload} />
              Baixar Curriculo
            </a>
          </div>
        </div>
        <div className="info-adc">
          <p>
            <FontAwesomeIcon icon={faLocationDot} /> Rio de Janeiro - RJ
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> natecia2000@gmail.com
          </p>
          <p>
            <FontAwesomeIcon icon={faCalendar} /> Disponível para estágio
          </p>
        </div>
      </div>
      <div className="imagem"></div>
    </section>
  );
}