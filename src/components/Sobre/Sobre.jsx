import "./Sobre.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Sobre() {
    return (
      <section id="sobre">
        <h2>
          <FontAwesomeIcon className="svg-titulos" icon={faUser} /> Sobre mim
        </h2>
        <p className="sobre-txt">
          Tenho 26 anos, moro no Rio de Janeiro e estou no último semestre de
          Análise e Desenvolvimento de Sistemas. Gosto de tecnologia, de
          aprender coisas novas e de transformar ideias em código.
        </p>
        <p className="sobre-txt">
          Tenho me dedicado ao desenvolvimento Front-end, explorando HTML, CSS,
          JavaScript e React por meio de estudos e projetos práticos. Gosto de
          entender como as coisas funcionam, testar possibilidades e criar
          interfaces simples, funcionais e intuitivas.
        </p>
        <p className="sobre-txt">
          Sou curiosa, gosto de aprender no meu ritmo e estou sempre buscando
          algo novo para colocar em prática e evoluir.
        </p>
        <div className="card-adc">
          <FontAwesomeIcon icon={faHeart} />
          <p>
            Tecnologia é o meio, mas o propósito é construir a vida que eu
            sonho!
          </p>
        </div>
      </section>
    );
}