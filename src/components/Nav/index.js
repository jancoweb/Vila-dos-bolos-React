import './style.css';
import Logo from '../../1-imgsrc/logo_header.png';

export default function Nav(){

  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <img src={Logo}/>
      </div>
      <ul className='menu-items'>
        <li><a href='#'>Inicio</a></li>
        <li><a href='#'>Produtos</a></li>
        <li><a href='#'>Contato</a></li>
      </ul>
    </nav>
  )
}