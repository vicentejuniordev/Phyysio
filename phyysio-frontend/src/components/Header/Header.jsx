import logo from "../../assets/img/phyysio-logo-.png";
import "./Header.css";
import menuImage from "../../assets/img/menu.png";
function Header() {
  return (
    <>
      <div className="header">
        <img className="logo" src={logo} alt="Phyysio Logo" />
        <div className="menu-icon">
          <img src={menuImage} alt="Menu" />
        </div>
        <div className="right-side">
          <div className="header-words">
            <a className="word" href="#text-home-container">
              <p>Início</p>
            </a>
            <a className="word" href="#services-home-container">
              <p style={{ color: "#cb6ce6" }}>Serviços</p>
            </a>
            <a className="word" href="#benefits-section">
              <p>Beneficios</p>
            </a>
            <a className="word" href="#contact-section">
              <p style={{ color: "#cb6ce6" }}>Contato</p>
            </a>
            <div className="menu-icon">
              <img src={menuImage} alt="Menu" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
