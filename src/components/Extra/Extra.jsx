import "./Extra.css";
import { faGraduationCap, faBookOpen, faChartLine } from "@fortawesome/free-solid-svg-icons";
import ItemExtra from "./ItemExtra";

export default function Extra() {
  return (
    <section className="extra">
      <ItemExtra
        className="item-borda"
        icon={faGraduationCap}
        titulo="Em constante evolução"
        descricao="Busco aprimorar continuamente meus conhecimentos em tecnologia e desenvolvimento."
      />
      <ItemExtra
        className="item-borda"
        icon={faBookOpen}
        titulo="Inglês em desenvolvimento"
        descricao="Estudo inglês para ampliar minhas possibilidades de comunicação e atuação na área de tecnologia."
      />
      <ItemExtra
        icon={faChartLine}
        titulo="Foco em desenvolvimento"
        descricao="Valorizo organização e aprendizado contínuo para evoluir profissionalmente e manter uma rotina produtiva."
      />
    </section>
  );
}