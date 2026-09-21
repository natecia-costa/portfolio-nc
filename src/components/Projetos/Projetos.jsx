import "./Projetos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CardProjeto from "./CardProjeto";

export default function Projetos() {
  return (
    <section id="projetos">
      <div className="inicio-projetos">
        <h2>
          <FontAwesomeIcon className="svg-titulos" icon={faFolder} /> Projetos
        </h2>
        <a
          href="https://github.com/natecia-costa?tab=repositories"
          target="_blank"
        >
          Ver todos os projetos no GitHub{" "}
          <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
      <p className="p-inicio">
        Aqui estão alguns dos projetos que desenvolvi durante meus estudos e
        prática com o React.
      </p>
      <div className="lista-projetos">
        <CardProjeto
          src="/preview-bella-massas.png"
          titulo="Bella Massas Pizzaria"
          descricao="Projeto de uma pizzaria fictícia, desenvolvido utilizando React para praticar conceitos de componentes, organização de código e construção de interfaces."
          tecnologias={["React", "JavaScript", "CSS3", "HTML5"]}
          linkSite="https://bella-massas-pizzaria.vercel.app/"
          linkGithub="https://github.com/natecia-costa/bella-massas-pizzaria"
        />
        <CardProjeto
          src="/preview-biblioteca-de-filmes.png"
          titulo="Biblioteca de Filmes"
          descricao="Projeto de gerenciamento de filmes, com recursos para adicionar, remover e concluir. Os dados são armazenados localmente, garantindo persistência mesmo após recarregar a página."
          tecnologias={["React", "JavaScript", "Vite", "CSS3", "LocalStorage"]}
          linkSite="https://biblioteca-de-filmes-eight.vercel.app/"
          linkGithub="https://github.com/natecia-costa/biblioteca-de-filmes"
        />
        <CardProjeto
          src="/preview-agenda-de-contatos.png"
          titulo="Agenda de Contatos"
          descricao="Aplicação de uma Agenda de Contatos desenvolvida com React para praticar conceitos de desenvolvimento Front-end, consumo de API e gerenciamento de estado."
          tecnologias={[
            "React",
            "JavaScript",
            "Axios",
            "React Router DOM",
            "Vite",
            "CSS3",
          ]}
          linkSite="https://agenda-de-contatos-tau-sooty.vercel.app/"
          linkGithub="https://github.com/natecia-costa/agenda-de-contatos"
        />
        <CardProjeto
          src="/preview-loja-de-produtos.png"
          titulo="Loja de Produtos - Nova Store"
          descricao="Uma aplicação de e-commerce desenvolvida com React, simulando uma loja virtual com catálogo de produtos, busca, filtro por categoria e carrinho de compras."
          tecnologias={[
            "React",
            "JavaScript",
            "React Router",
            "Axios",
            "Context API",
            "React Hook Form",
            "localStorage",
            "Vite",
            "CSS3",
          ]}
          linkSite="https://loja-de-produtos-tawny.vercel.app/"
          linkGithub="https://github.com/natecia-costa/loja-de-produtos"
        />
      </div>
    </section>
  );
}