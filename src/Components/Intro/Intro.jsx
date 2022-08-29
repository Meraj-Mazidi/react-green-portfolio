import './intro.css';
import me from '../../img/me.png'

const Intro = ({ dark }) => {

    const textColor = {
        color: dark ? 'white' : 'black'
    }

    return (
        <header className='intro'>
            <div className="i-left">
                <div className="i-left-wrapper effect" style={textColor}>
                    <h2 className='i-intro' >Hello, My name is</h2>
                    <h1 className='i-name'>Meraj Mazidi</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">
                                Web Developer
                            </div>
                            <div className="i-title-item">
                                UI-UX Designer
                            </div>
                            <div className="i-title-item">
                                Content Creator
                            </div>
                            <div className="i-title-item">
                                Front-end Developer
                            </div>
                            <div className="i-title-item">
                                Generally a Creative Guy!
                            </div>
                        </div>
                    </div>

                    <p className="i-desc">
                        I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. <br />
                        I just LOVE Coding & Designing!
                    </p>

                    {/* className="i-scroll effect" */}
                    {/* style={iconColor} */}

                    <a href="#contact">
                        <button className='i-btn'>
                            <span className='i-btn-text' style={textColor}>
                                Let's Connect!
                            </span>
                        </button>
                    </a>
                </div>
            </div>


            <div className="i-right">
                <div className="i-bg">
                    <img src={me} alt="my pic" className='i-image' />
                </div>
            </div>
        </header >
    );
}

export default Intro;
