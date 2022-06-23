import './style.css';
import Logo from '../../1-imgsrc/footer/logo_footer.png';
import Instalogo from '../../1-imgsrc/instagramlogo.png';
import PhoneLogo from '../../1-imgsrc/contato.png';
import Map from '../../1-imgsrc/map.png';

export default function Footer(){
  return (
    <footer>
      <div className='logo_socials'>
        <img src={Logo}/>
        <div>
          <img src={Instalogo}/>
          <img src={PhoneLogo}/>
        </div>
      </div>

      <div className='address'>
        <p style={{fontWeight:'bold'}}>Salvador</p>
        <span>
        Avenida Cardeal da Silva, <br/> 
        447, Federação <br/>
        CEP: 40231-250
        </span>
        <img src={Map}/>
      </div>

      <div className='categories'>
        <p style={{fontWeight: 'bold'}}>Categorias</p>
        <ul>
          <li>Bolos</li>
          <li>Tortas</li>
          <li>Vulcões</li>
          <li>Bolo de Taça</li>
        </ul>
      </div>

      <div className='contact'>
      <p style={{fontWeight: 'bold'}}>Contato</p>
        <ul>
          <li>Faça sua encomenda</li>
          <li>Seja um franqueado</li>
        </ul>
      </div>
    </footer>
  )
}