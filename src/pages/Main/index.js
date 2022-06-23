import './style.css';
import Nav from '../../components/Nav';
import Onboard from '../../components/Onboard';
import Showcase from '../../components/Showcase';
import Testimonials from '../../components/Testimonials';
import Hero from '../../components/Hero';
import Infos from '../../components/Infos';
import Footer from '../../components/Footer';

export default function Main(){
  
  return (
    <div className='main'>
      <Nav/>
      <Hero/>
      <Onboard/>
      <Showcase/>
      <Testimonials/>
      <Infos/>
      <Footer/>
    </div>
  )
}