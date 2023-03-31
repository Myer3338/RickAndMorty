import '../../pages/footer/footer.scss';
import instagramLogo from '../../assets/images/footer/instagram.svg';
import facebookLogo from '../../assets/images/footer/facebook.svg';
import linkedinLogo from '../../assets/images/footer/linkedin.svg';
import youtubeLogo from '../../assets/images/footer/youtube.svg';
import {  NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer className='Footer'>
            <nav>
                <ul>
                    <li>
                        <a href='https://static.wikia.nocookie.net/company-bumpers/images/1/1e/Warnervision_warning_screen.jpg/revision/latest?cb=20180205232622'>
                            Legal warning</a>
                    </li>

                    <li>
                        <a href='https://assets-global.website-files.com/612c95056c9d4bcd6cdfd320/62d6ca9c7032f890e76dc885_juro-privacy-policy-free-template-min.png'>
                            Privacy Policy</a>
                    </li>

                    <li>
                        <a href='https://www.wikihow.com/images/thumb/a/a0/Create-a-Website-Cookie-Policy-Step-5.jpg/v4-460px-Create-a-Website-Cookie-Policy-Step-5.jpg.webp'>
                            Cookies Policy</a>
                    </li>

                    <li>
                        <a href='https://www.q-crystal.com/ueditor/php/upload/image/20190129/1548745501587531.png'>
                            Quality Policy</a>
                    </li>
                </ul>
            </nav>
            <nav>
                <h2>The Rick and Morty</h2>
                <ul className='social-links'>
                    <li>
                        <a href='https://web.facebook.com/toritamor'>
                            <img src={facebookLogo}></img>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/_myer3338_/'>
                            <img src={instagramLogo}></img>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.youtube.com/c/mayerrojas'>
                            <img src={youtubeLogo}></img>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/mayerlin-rojas-perez/'>
                            <img src={linkedinLogo}></img>
                        </a>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul>
                    <li>
                        <a href='https://es.wikipedia.org/wiki/Blog'>Blog</a>
                    </li>
                    <li>
                    <NavLink to={`contactUs`}>
                    Contact
                    </NavLink>
                    </li>                    
                    <li>
                        <a href='https://nichesss.com/tools/faq-question-generator-w17uiQmGM'>FAQs</a>
                    </li>
                </ul>
            </nav>
            <div className='creator'>Mayerlin Rojas Perez</div>
        </footer>
    )
}