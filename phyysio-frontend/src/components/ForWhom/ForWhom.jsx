import CardForWhom from '../Card-ForWhom/CardForWhom';
import './ForWhom.css';

function ForWhom(){
    return(
        <div className="for-whom">
            <h2 className="title">Para quem é o Phyysio?</h2>
            <CardForWhom  title={'Pequenas clínicas'} description={'Clínicas de fisioterapia com rotina intensa e equipe reduzida.'}/>

            <CardForWhom  title={'Profissionais autônomos'} description={'Fisioterapeutas que precisam organizar pacientes e atendimentos.'}/>
            
            <CardForWhom  title={'Quem ainda usa papel'} description={'Profissionais que desejam substituir fichas físicas por um sistema digital.'}/>

            <CardForWhom  title={'Quem busca simplicidade'} description={'Sem sistemas complexos ou difíceis de usar.'}/>
        </div>
    )
}

export default ForWhom;