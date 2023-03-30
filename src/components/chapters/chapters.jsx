import './chapters.scss';
import chapter1Image from '../../assets/images/chapters/chapter1.jpg';
import chapter2Image from '../../assets/images/chapters/chapter2.jpg';
import chapter3Image from '../../assets/images/chapters/chapter3.jpg';
import chapter4Image from '../../assets/images/chapters/chapter4.jpg';
import chapter5Image from '../../assets/images/chapters/chapter5.jpg';
import chapter6Image from '../../assets/images/chapters/chapter6.jpg';
import chapter7Image from '../../assets/images/chapters/chapter7.jpg';
import chapter8Image from '../../assets/images/chapters/chapter8.jpg';
import chapter9Image from '../../assets/images/chapters/chapter9.jpg';
import backButtonImage from '../../assets/images/back_button.svg';
import scrollTopImage from '../../assets/images/scroll_top_icon.svg';

export default function Main() {
    let chapters = [{
        title: 'Chapter 1',
        image: chapter1Image
    },{
        title: 'Chapter 2',
        image: chapter2Image
    },{
        title: 'Chapter 3',
        image: chapter3Image
    },{
        title: 'Chapter 4',
        image: chapter4Image
    },{
        title: 'Chapter 5',
        image: chapter5Image
    },{
        title: 'Chapter 6',
        image: chapter6Image
    },{
        title: 'Chapter 7',
        image: chapter7Image
    },{
        title: 'Chapter 8',
        image: chapter8Image
    },{
        title: 'Chapter 9',
        image: chapter9Image
    }];
    return (
        <main className='Chapters'>
            <section className='chapters-container'>
                <div className='chapters-title'>
                    <a className='back-button'>
                        <img src={backButtonImage} />
                    </a>
                    <h2>Chapters</h2>
                </div>
                <div className='chapters-card-container'>
                    {
                        chapters.map((character) =>
                            <div className='chapter-card' key={character.title}>
                                <img src={character.image} ></img>
                                <p>{character.title}</p>
                            </div>
                        )
                    }
                </div>
            </section>
            <div className='scroll-top-container'>
                <a>
                    <img src={scrollTopImage} />
                </a>
            </div>
        </main>
    )
}