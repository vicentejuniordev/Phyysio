import "./TextHome.css";
import image from "../../assets/img/home-image.png";

function TextHome() {
  return (
    <>
      <div className="text-home-container">
        <div className="text-home">
        <h1 className="title">Bem-vindo à Ph<span className="highlight">yy</span>sio</h1>
        <p className="text-simple">
          A rotina de uma clínica de fisioterapia exige organização, atenção aos
          pacientes e controle de informações. O Phyysio foi criado para
          substituir processos manuais e papéis por um sistema simples,
          confiável e fácil de usar.
        </p>
      </div>
      <img src={image} className="home-image" alt="Imagem de boas-vindas" />
      </div>
    </>
  );
}

export default TextHome;


