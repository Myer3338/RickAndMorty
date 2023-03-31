import '../../pages/contact_us/contact_us.scss';
import rightImage from '../../assets/images/contact_us/right_image.png';
export default function ContactUs() {
    return (
        <main className='ContactUs'>
            <section className='contact_us-container'>
                <section className='left'>
                    <h2 className='title'>Contact</h2>
                    <form>
                        <h2>Write to us</h2>
                        <input placeholder='Name'></input>
                        <input placeholder='Last Name'></input>
                        <input placeholder='Email'></input>
                        <input placeholder='Phone'></input>
                        <textarea placeholder='Message'></textarea>
                        <button>Send</button>
                    </form>
                </section>
                <section className='right'>
                    <h2>Contact</h2>
                    <img src={rightImage} />
                </section>
            </section>
            {/* <div className='scroll-top-container'>
                <a>
                    <img src={scrollTopImage} />
                </a>
            </div> */}
        </main>
    )
}