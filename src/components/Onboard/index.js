import './style.css';
import OnboardImg from '../../1-imgsrc/onboard_img.png';
import OnboardIcon1 from '../../1-imgsrc/Group7.png';
import OnboardIcon2 from '../../1-imgsrc/Group6.png';

export default function Onboard () {
  return (
    <div className='onboard'>
    <img src={OnboardImg}/>
    <div className='onboard-content'>
      <span>Faça a sua</span>
      <h2>Encomenda</h2>
      <div className='onboard-subtitles'>
        <div>
          <img src={OnboardIcon1}/><span>Escolha seu bolo</span>
          </div>
        <div>
          <img src={OnboardIcon2}/><span>Entre em contato</span>
          </div>
      </div>
    </div>
  </div>
  )
}