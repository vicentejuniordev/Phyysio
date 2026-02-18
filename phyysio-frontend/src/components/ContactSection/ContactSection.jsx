import "./ContactSection.css";

function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-text">
          <h2>Fale com a gente</h2>
          <p>
            Tem interesse no Phyysio ou quer saber mais sobre o sistema? Entre
            em contato e vamos conversar.
          </p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Seu nome" />
          <input type="email" placeholder="Seu e-mail" />
          <textarea placeholder="Sua mensagem"></textarea>
          <button type="submit">Enviar mensagem</button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
