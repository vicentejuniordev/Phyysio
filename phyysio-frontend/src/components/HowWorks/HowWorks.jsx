import "./HowWorks.css";

function HowWorks() {
  return (
    <section class="how-it-works">
      <h2>Como funciona?</h2>

      <div class="timeline">
        <div class="step">
          <span class="circle">1</span>
          <div class="content">
            <h3>Cadastro do paciente</h3>
            <p>Registre dados essenciais de forma rápida e organizada.</p>
          </div>
        </div>

        <div class="step">
          <span class="circle">2</span>
          <div class="content">
            <h3>Registro de atendimentos</h3>
            <p>Acompanhe sessões, evoluções e observações clínicas.</p>
          </div>
        </div>

        <div class="step">
          <span class="circle">3</span>
          <div class="content">
            <h3>Gestão centralizada</h3>
            <p>Tenha controle total da clínica em um único sistema.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowWorks;
