import './BenefitsSection.css';


function BenefitsSection() {
  return (
    <section id='benefits-section'  className="benefits-section">
      <h2>O que o Phyysio traz para o seu dia a dia</h2>

      <div className="benefits-grid">
        <div className="benefit-card">
          <span className="benefit-icon">⏱️</span>
          <h3>Menos tempo com papelada</h3>
          <p>Automatize processos e foque no atendimento ao paciente.</p>
        </div>

        <div className="benefit-card">
          <span className="benefit-icon">📋</span>
          <h3>Organização em um só lugar</h3>
          <p>Informações centralizadas, acessíveis e seguras.</p>
        </div>

        <div className="benefit-card">
          <span className="benefit-icon">🔍</span>
          <h3>Acompanhamento facilitado</h3>
          <p>Visualize históricos e evoluções sem esforço.</p>
        </div>

        <div className="benefit-card">
          <span className="benefit-icon">🧘</span>
          <h3>Mais tranquilidade na rotina</h3>
          <p>Menos burocracia, mais controle.</p>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;