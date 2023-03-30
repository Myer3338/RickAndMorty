import './characters.scss';
import character1Image from '../../assets/images/characters/character1.jpg';
import character2Image from '../../assets/images/characters/character2.jpg';
import character3Image from '../../assets/images/characters/character3.jpg';
import character4Image from '../../assets/images/characters/character4.jpg';
import character5Image from '../../assets/images/characters/character5.jpg';
import character6Image from '../../assets/images/characters/character6.jpg';
import character7Image from '../../assets/images/characters/character7.jpg';
import character8Image from '../../assets/images/characters/character8.jpg';
import character9Image from '../../assets/images/characters/character9.jpg';
import backButtonImage from '../../assets/images/back_button.svg';
import scrollTopImage from '../../assets/images/scroll_top_icon.svg';

export default function Character() {
    let characters = [{
        title: 'Character 1',
        image: character1Image
    },{
        title: 'Character 2',
        image: character2Image
    },{
        title: 'Character 3',
        image: character3Image
    },{
        title: 'Character 4',
        image: character4Image
    },{
        title: 'Character 5',
        image: character5Image
    },{
        title: 'Character 6',
        image: character6Image
    },{
        title: 'Character 7',
        image: character7Image
    },{
        title: 'Character 8',
        image: character8Image
    },{
        title: 'Character 9',
        image: character9Image
    }];
    return (
        <main className='Characters'>
            <section className='characters-container'>
                <div className='characters-title'>
                    <a className='back-button'>
                        <img src={backButtonImage} />
                    </a>
                    <h2>Characters</h2>
                </div>
                <div className='characters-card-container'>
                    {
                        characters.map((character) =>
                            <div className='character-card' key={character.title}>
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