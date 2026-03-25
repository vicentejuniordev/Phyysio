import React from "react";
import "./Login.css";
import logo from "../../assets/img/phyysio-logo-.png";

export default function Login() {
  return (
    <div className="container">
      <div className="card">
        <div className="icon">
            <img  class="logo" src={logo} alt="Logo" />
        </div>

        <p className="subtitle">
          Acesse sua conta para continuar
        </p>

        <div className="input-group">
          <input type="email" placeholder="Email" />
        </div>

        <div className="input-group">
          <input type="password" placeholder="Senha" />
        </div>

        <div className="forgot">
          <a href="#">Esqueceu a senha?</a>
        </div>

        <button className="btn">Entrar</button>

        <div className="divider">ou entrar com</div>

        <div className="socials">
          <button>G</button>
          <button>f</button>
          <button></button>
        </div>
      </div>
    </div>
  );
}