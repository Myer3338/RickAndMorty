import Notfound from '../../assets/images/404/404.json';
import React, {Component} from 'react'
import Lottie from 'react-lottie'
import '../../pages/notfound/notfound.scss'
import { Link } from 'react-router-dom';

class notfound extends Component {
  render(){
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: Notfound
    };
    return (
      <div className='containerNotFound'>
        <h1>Pagina no encontrada</h1>
        <div className='animationLottie'>
        <Lottie options={defaultOptions} />
        </div>
        <div className='goHouse'>
          <h3>Volver a casa: </h3>
          <Link to='/' className='textRouternf'>

            <button className='buttonGradient'>
              Aqui
            </button>

          </Link>
        </div>        
      </div>      
    );
  }
}
export default notfound