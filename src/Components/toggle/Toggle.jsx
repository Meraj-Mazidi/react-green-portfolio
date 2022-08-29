import './toggle.css';
import Sun from '../../img/sun.png'
import Moon from '../../img/moon.png'

const Toggle = ({ setDark, dark }) => {

    const ThemeStyle = {
        left: dark ? '25px' : '0'
    }
    return (
        <div className='t' onClick={() => setDark(prev => !prev)}>
            <img src={Sun} alt="sunIcon" className="t-icon" />
            <img src={Moon} alt="MoonIcon" className="t-icon" />
            <div className="t-btn" style={ThemeStyle}></div>
        </div>
    );
}

export default Toggle;
