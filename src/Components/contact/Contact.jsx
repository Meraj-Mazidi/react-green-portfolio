import './contact.css';
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com'

const Contact = ({ dark }) => {

    const formRef = useRef()
    const [done, setDone] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        emailjs.sendForm(
            'service_crujbxo',
            'template_znjhlvw',
            formRef.current,
            '7kiaKU2XWoOsmpVMa')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    }

    const textColor = {
        color: dark ? 'white' : 'black'
    }

    return (
        <section className='c' id='contact'>
            <div className="c-bg"></div>

            <div className="c-wrapper">
                <div className="c-left effect" style={textColor}>
                    <h1 className="c-title">
                        Let's discuss your project
                    </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" />
                            merajmazidiwork@gmail.com
                        </div>

                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +98 936 334 7522
                        </div>

                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon" />
                            Planet Earth, Iran, Golestan
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc effect" style={textColor}>
                        <b className='story-text'>What's your story?</b><br />
                        Get in touch. Always available for freelancing if the right project comes along.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder='Name' name='user_name' className='form-style' required style={textColor} />

                        <input type="text" placeholder='Subject' name='user_subject' className='form-style' required style={textColor} />

                        <input type="email" placeholder='Email' name='user_email' className='form-style' required style={textColor} />

                        <textarea name="message" rows="5" placeholder='Wanna share something...!?' className='form-style' required style={textColor} ></textarea>

                        <button className='c-btn'>
                            <span className='c-btn-text' style={textColor}>
                                Submit
                            </span>
                        </button>
                        {done &&
                            <span className='email-sent'>
                                <p>Thank You!</p>
                                <p>I will be responding ASAP</p>
                            </span>
                        }
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
