import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './src/components/home/home';
import Chapters from './src/components/chapters/chapters/chapters';
import CharactersFuncion from './src/components/characters/characters/charactersFuncion';
import About from './src/components/about/about';
import ContactUs from './src/components/contact_us/contact_us';
import Random from './src/components/';
import Notfound from './src/components/notfound/notfound';
import Header from './src/components/header/header'
import Footer from './src/components/footer/footer';
import './src/App.scss'


const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/chapters" element={<Chapters/>} />    
      <Route path="/characters" element={<CharactersFuncion/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contactUs" element={<ContactUs/>} />
      <Route path="/random" element={<Random/>} />
      <Route path='*' element={<Notfound />} />
    </Routes>
    <Footer />      
  </Router>  
)

export default App;