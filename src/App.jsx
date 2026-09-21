import Extra from "./components/Extra/Extra";
import Habilidades from "./components/Habilidades/Habilidades";
import Header from "./components/Header/Header"
import Inicio from "./components/Inicio/Inicio"
import Projetos from "./components/Projetos/Projetos";
import Sobre from "./components/Sobre/Sobre";
import Contato from "./components/Contato/Contato"
import "./styles/global.css";

function App() {  
  return (
    <>
      <Header />
      <Inicio />
      <section className="segunda-secao">
        <Sobre />
        <Habilidades />
      </section>
      <Projetos />
      <Extra />
      <Contato />
    </>
  );
}

export default App