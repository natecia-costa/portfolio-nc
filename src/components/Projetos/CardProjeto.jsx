import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function CardProjeto({
  src,
  titulo,
  descricao,
  tecnologias = [],
  linkSite,
  linkGithub,
}) {
  return (
    <div className="card-projeto">
      <img src={src} alt={`Preview do projeto ${titulo}`} />
      <h5>{titulo}</h5>
      <p>{descricao}</p>
      <div className="tecnologias">
        {tecnologias.map((tecnologia) => (
          <span key={tecnologia}>{tecnologia}</span>
        ))}
      </div>
      <div className="botoes-projeto">
        <a className="btn-projeto" href={linkSite} target="_blank">
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          Ver Projeto{" "}
        </a>
        <a
          className="btn-projeto"
          href={linkGithub}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
      </div>
    </div>
  );
}