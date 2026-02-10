import logo from '../../assets/img/phyysio-logo-.png';
import './Header.css';
function Header(){
    return (
        <>
          <div className="header">
              <img className="logo" src={logo} alt="Phyysio Logo" />
           <div className='header-words'>
             <p className='word'>Início</p>
             <p className='word' style={{color:'#cb6ce6'}}>Sobre Nós</p>
             <p className='word'>Serviços</p>
             <p className='word' style={{color:'#cb6ce6'}}>Contato</p>
           </div>
          </div>
        </>
    );
}

export default Header;