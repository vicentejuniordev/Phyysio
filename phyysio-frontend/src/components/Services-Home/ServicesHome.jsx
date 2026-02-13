import './ServicesHome.css';
import CardService from '../Card-Service/CardService';
import image1 from '../../assets/img/card-image-1.png';;
import image2 from '../../assets/img/agendamento.png';
import image3 from '../../assets/img/edicao.png';
import image4 from '../../assets/img/consulta-de-pesquisa.png';


function ServicesHome() {
  return (
    <>
        <div className="services-home-container">
            <h2 className="title">Nossos Serviços</h2>

        

        <div className='services'>
          <CardService service={{title: 'Gestão de Pacientes', description: 'Centralize cadastros, histórico e informações importantes em um único sistema.'}} image={image1} />
          <CardService service={{title: 'Organização da Agenda', description: 'Visualize os atendimentos com mais clareza, evitando conflitos e facilitando o planejamento da rotina.'}} image={image2} />

          <CardService service={{title: 'Sistema Intuitivo', description: 'Interface simples e objetiva, pensada para facilitar o uso e reduzir o tempo gasto com tarefas operacionais.'}} image={image3} />

          <CardService service={{title: 'Consulta Rápida', description: 'Encontre informações de pacientes e atendimentos com facilidade, sempre que precisar.'}} image={image4} />


        </div>

      </div>

        
    </>
  );
}

export default ServicesHome;