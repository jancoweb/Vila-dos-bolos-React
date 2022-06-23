import './style.css';
import HeroImg from '../../1-imgsrc/hero_img.png';
import { ButtonProducts } from '../Button';

export default function Hero(){
  return (
    <div className='hero'>
        <div className='text-content'>
          <span className='title-2'>Bem-vindo à</span>
          <h1 className='title'>Villa dos Bolos</h1>
          <div id='subtitle-container'>
            <p className='subtitle'>Etiam condimentum orci eget tortor pharetra dignissim. Donec at diam non arcu aliquam feugiat. Cras dapibus commodo purus eu varius. Nullam commodo faucibus nulla in sodales. Suspendisse potenti. Integer viverra vestibulum sagittis.</p>
          </div>
          <ButtonProducts/>
        </div>
        <div className='hero-img-container'>
          <img src={HeroImg}/>
        </div>
      </div>
  )
}