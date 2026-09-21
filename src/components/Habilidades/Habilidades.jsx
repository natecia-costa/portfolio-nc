import "./Habilidades.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import CardHabilidade from "./CardHabilidade";

export default function Habilidades() {
    return (
      <section id="habilidades">
        <h2>
          <FontAwesomeIcon className="svg-titulos" icon={faCode} /> Habilidades
        </h2>
        <h3>Front-end (destaque)</h3>
        <div className="skills">
          <CardHabilidade src="/html5.webp" name="HTML5" />
          <CardHabilidade src="/css3.webp" name="CSS3" />
          <CardHabilidade src="/javascript.webp" name="JavaScript" />
          <CardHabilidade src="/react.webp" name="React" />
          <CardHabilidade
            src="/design-responsive.png"
            name="Design Responsivo"
          />
          <CardHabilidade src="/github.png" name="Git/GiHub" />
        </div>
        <h3>Back-end e Banco de Dados (conhecimentos básicos)</h3>
        <div className="skills">
          <CardHabilidade src="/node-js.webp" name="Node.js" />
          <CardHabilidade src="/mysql.png" name="MySQL" />
          <CardHabilidade src="/mongodb.webp" name="MongoDB" />
        </div>
        <h3>Outras tecnologias e conceitos (conhecimentos básicos)</h3>
        <div className="skills">
          <CardHabilidade src="/python.webp" name="Python" />
          <CardHabilidade
            src="/logica-prog.png"
            name="Lógica de Programação e Estrutura de Dados"
          />
        </div>
      </section>
    );
}