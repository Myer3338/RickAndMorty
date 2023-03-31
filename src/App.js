import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './components/home/home';
import Chapters from './components/chapters/chapters/chapters';
import CharactersFuncion from './components/characters/characters/charactersFuncion';
import About from './components/about/about';
import ContactUs from './components/contact_us/contact_us';
import Notfound from './components/notfound/notfound';
import Header from './components/header/header'
import Footer from './components/footer/footer';
import RandomFuncion from './components/random/random'
import './App.scss'


const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/chapters" element={<Chapters/>} />    
      <Route path="/characters" element={<CharactersFuncion/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contactUs" element={<ContactUs/>} />
      <Route path='*' element={<Notfound />} />
      <Route path='random' element={<RandomFuncion />} />
    </Routes>
    <Footer />      
  </Router>  
)

export default App;