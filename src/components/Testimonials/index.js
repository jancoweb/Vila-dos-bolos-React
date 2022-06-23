import './style.css';
import Customer1 from '../../1-imgsrc/testimonial_img.png'

export default function Testimonials(){
  return (
    <section className='testimonials'>
      <span>Veja os depoimentos dos</span>
      <h3>Nosso clientes</h3>
      <div className='customer'>
        <img src={Customer1}/>
        <div className='customer-content'>
          <h4>Cristina Alves</h4>
          <span>Naked de Brigadeiro</span>
          <p>Donec sit amet mi a lorem gravida sollicitudin eget nec nisl. Morbi et malesuada lectus. Donec ornare quis elit non bibendum. In vitae lacus velit. Ut ut turpis vitae nibh fringilla finibus a at massa. Ut quis bibendum nibh, tincidunt mattis diam. In ut ligula eu augue hendrerit laoreet id et ligula.</p>
        </div>
      </div>
    </section>
  )
}