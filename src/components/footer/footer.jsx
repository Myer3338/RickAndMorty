import './footer.scss';
import instagramLogo from '../../assets/images/footer/instagram.svg';
import facebookLogo from '../../assets/images/footer/facebook.svg';
import linkedinLogo from '../../assets/images/footer/linkedin.svg';
import youtubeLogo from '../../assets/images/footer/youtube.svg';

export default function Footer() {
    return (
        <footer className='Footer'>
            <nav>
                <ul>
                    <li>
                        <a href='#'>Legal warning</a>
                    </li>

                    <li>
                        <a href='#'>Privacy Policy</a>
                    </li>

                    <li>
                        <a href='#'>Cookies Policy</a>
                    </li>

                    <li>
                        <a href='#'>Quality Policy</a>
                    </li>
                </ul>
            </nav>
            <nav>
                <h2>The Rick and Morty</h2>
                <ul className='social-links'>
                    <li>
                        <a href='#'>
                            <img src={facebookLogo}></img>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <img src={instagramLogo}></img>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <img src={youtubeLogo}></img>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <img src={linkedinLogo}></img>
                        </a>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul>
                    <li>
                        <a href='#'>Blog</a>
                    </li>

                    <li>
                        <a href='#'>Contact</a>
                    </li>

                    <li>
                        <a href='#'>FAQs</a>
                    </li>
                </ul>
            </nav>
            <div className='creator'>Mayerlin Rojas Perez</div>
        </footer>
    )
}