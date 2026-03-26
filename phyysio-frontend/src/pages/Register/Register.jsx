import React from "react";
import "./Register.css";
import logo from "../../assets/img/phyysio-logo-.png";

export default function Register() {
  return (
    <div className="container">
      <div className="card">
        <div className="icon">
          <img className="logo" src={logo} alt="Logo" />
        </div>

        <p className="subtitle">
          Crie sua conta para começar
        </p>

        <div className="input-group">
          <input type="text" placeholder="Nome completo" />
        </div>

        <div className="input-group">
          <input type="email" placeholder="Email" />
        </div>

        <div className="input-group">
          <input type="password" placeholder="Senha" />
        </div>

        <div className="input-group">
          <input type="password" placeholder="Confirmar senha" />
        </div>

        <button className="btn">Cadastrar</button>

        <div className="divider">ou cadastrar com</div>

        <div className="socials">
          <button>G</button>
          <button>f</button>
          <button></button>
        </div>

        <div className="login-link">
          <p>Já tem uma conta? <a href="/login">Entrar</a></p>
        </div>
      </div>
    </div>
  );
}