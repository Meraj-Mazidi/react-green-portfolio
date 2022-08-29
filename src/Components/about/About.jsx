import './about.css';
import me2 from '../../img/me2.JPG'
import awardImg from '../../img/award.png'

const About = ({ dark }) => {

    const textColor = {
        color: dark ? 'white' : 'black'
    } 

    return ( 
        <section className='about'> 
            <div className="a-left">
                <span className='a-card-bg'></span>
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={me2} alt="randomImg" className="a-img" />
                </div>
            </div>

            <div className="a-right effect" style={textColor}>
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    It is a long established fact that a reader will be distracted bt the readable content! - Well...Sorry about that :)
                </p>
                <p className="a-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, at temporibus. Architecto sed, eaque nulla quas natus officiis eum in iusto id reiciendis, facere deserunt. Temporibus deserunt provident vel nisi! officiis eum in iusto id reiciendis, facere deserunt. Temporibus deserunt provident vel nisi!
                </p>
                <div className="a-award">
                    <img src={awardImg} alt="awardImg" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className='a-award-title'>International Design</h4>
                        <p className="a-award-desc">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
