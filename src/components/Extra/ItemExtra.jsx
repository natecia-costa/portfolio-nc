import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ItemExtra({ className, icon, titulo, descricao }) {
  return (
    <div className={`item-extra ${className || ""}`}>
      <FontAwesomeIcon className="svg-titulos" icon={icon} />
      <div>
        <h4>{titulo}</h4>
        <p>{descricao}</p>
      </div>
    </div>
  );
}