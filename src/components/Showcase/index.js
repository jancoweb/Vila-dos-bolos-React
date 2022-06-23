import './style.css';
import Bolos from '../../1-imgsrc/vitrine/bolo_4.png';
import Tortas from '../../1-imgsrc/vitrine/bolo_2.png';
import Vulcoes from '../../1-imgsrc/vitrine/bolo_3.png';
import BoloDeTaca from '../../1-imgsrc/vitrine/bolo_1.png';

export default function Showcase(){
  const products = [{name:'Bolos', img:Bolos}, {name:'Tortas', img:Tortas}, {name:'Vulcões', img:Vulcoes}, {name:'Bolo de Taça', img:BoloDeTaca}];

  return (
  <section className='main_products'>
        <span>Conheça nossa</span>
        <h2>Confeitaria</h2>
        <div className='showcase'>
          {products.map((product)=>{
            return (
            <div className='product' key={product.name}>
              <img src={product.img}/>
              <h4>{product.name}</h4>
              <p>Ut consequat nibh diam, a pulvinar tellus bibendum eget. Vivamus lorem nunc, lacinia sit amet faucibus eu, semper a ante. </p>
              <button><a>Saiba mais</a></button>
            </div>
            )  
          })}
        </div>
      </section>
  )
}


