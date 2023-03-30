import './App.scss';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import Chapters from './components/chapters/chapters';
import Characters from './components/characters/characters';
import About from './components/about/about';
import ContactUs from './components/contact_us/contact_us';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      {/* <Main></Main> */}
      {/* <Chapters></Chapters> */}
      {/* <Character></Character> */}
      {/* <About></About> */}
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
