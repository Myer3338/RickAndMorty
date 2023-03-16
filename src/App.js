import './App.css';
import logo from './assets/Logo/rick.png';
import Navegacion from './components/Navbar';
import PieDePagina from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='logo-contenedor'>
          <img
           src={logo} 
           className="logo-rickandmorty" 
           alt="logo" />
        </div>        
        <Navegacion />         
      </header>
      <div className='contenedor-principal'>        
      </div>
      <footer>
      <PieDePagina />  
      </footer>          
    </div>
  );
}

export default App;
