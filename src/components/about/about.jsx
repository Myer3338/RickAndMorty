import '../../pages/about/about.scss';
import textLogo from '../../assets/images/logo_name.png';
import characterImage from '../../assets/images/about/character_image.png';

export default function About() {
    return (
        <main className='About'>
            <section className='left'>
                <h2>Our Community</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia cupiditate cumque non facere minima neque magni alias natus aut dolore id et ratione, dolorum veniam asperiores nemo, commodi itaque porro?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia cupiditate cumque non facere minima neque magni alias natus aut dolore id et ratione, dolorum veniam asperiores nemo, commodi itaque porro?</p>
            </section>
            <section className='right'>
                <img src={textLogo} alt=''></img>
                <img src={characterImage} alt=''></img>
            </section>
        </main>
    ) 
}