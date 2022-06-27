import './style.css';
import Icon1 from '../../1-imgsrc/instagramlogo.png';
import Icon2 from '../../1-imgsrc/contato.png'
import { ButtonFranchise } from '../Button';

export default function Infos(){
  return (
    <section className='infos'>
      <span>Entre em contato e</span>
      <h2>Faça sua encomenda</h2>
      <div className='info-container'>
        <div className='customerOption'>
          <p style={{fontSize:'30px'}}>Consumidor</p>
          <div>
            <img src={Icon1}/><span>@viladosbolos</span>
          </div>
          <div>
            <img src={Icon2}/><span>(71) 9999-9999</span>
          </div>
        </div>
        <div className='franchise'>
          <p style={{fontSize:'30px'}}>Seja um franqueado</p>
          <div>
          <p className='no-margin-bottom' style={{textAlign:'left'}}>
          Ut consequat nibh diam, a pulvinar tellus bibendum eget. Vivamus lorem nunc, . Quisque eleifend, odio eu tristique rutrum, nisi diam gravida justo,.
          </p>
          </div>
          <ButtonFranchise/>
        </div>
      </div>
    </section>
  )
}