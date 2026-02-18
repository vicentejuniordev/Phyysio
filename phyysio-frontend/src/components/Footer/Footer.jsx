import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
            <h3>Ph<span>yy</span>sio</h3>
          <p>
            Sistema web para organização e gestão de clínicas de fisioterapia.
          </p>
        </div>

        <div className="footer-links">
          <h4>Navegação</h4>
          <ul>
            <li>
              <a href="#servicos">Serviços</a>
            </li>
            <li>
              <a href="#como-funciona">Como funciona</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contato</h4>
          <p>Email: contato@phyysio.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Phyysio. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;
