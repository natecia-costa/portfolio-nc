import "./Contato.css";
import ItemExtra from "../Extra/ItemExtra"
import { faComments, faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import BotaoContato from "./BotaoContato";

export default function Contato() {
  return (
    <footer id="contato">
      <ItemExtra
        icon={faComments}
        titulo="Vamos conversar?"
        descricao="Estou sempre aberta a novas oportunidades, colaborações e aprendizados. Me envie uma mensagem caso meu trabalho tenha te interessado."
      />
      <div className="botoes">
        <BotaoContato
          href="mailto:natecia2000@gmail.com"
          externo={false}
          icon={faEnvelope}
          conteudo="natecia2000@gmail.com"
        />
        <BotaoContato
          href="https://www.linkedin.com/in/natecia-costa0404/"
          icon={faLinkedin}
          conteudo="/natecia-costa0404"
        />
        <BotaoContato
          href="https://github.com/natecia-costa"
          icon={faGithub}
          conteudo="/natecia-costa"
        />
      </div>
      <BotaoContato
        className="botao-wpp"
        href="https://wa.me/552198235952"
        icon={faPaperPlane}
        conteudo="Me envie uma mensagem"
      />
      <div className="final">
        <h6>NATÉCIA COSTA</h6>
        <p>Desenvolvedora Front-end em formação • ADS • Rio de Janeiro - RJ</p>
      </div>
    </footer>
  );
}