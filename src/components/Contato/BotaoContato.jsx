import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BotaoContato({ className, href, externo = true, icon,conteudo }) {
  return (
      <a
        className={`botao-conteudo ${className || ""}`}
        href={href}
        target={externo ? "_blank" : undefined}
        rel={externo ? "noopener noreferrer" : undefined}
      >
        <FontAwesomeIcon icon={icon} /> {conteudo}
      </a>
  )
}