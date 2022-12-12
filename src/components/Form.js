import React, { useState, useEffect } from 'react';
import '../App.css'
import shuffleIcon from '../assets/shuffle.svg'

const Form = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const [captchaString, setCaptchaString] = useState('')
    const [captchaInput, setCaptchaInput] = useState('')

    const [message, setMessage] = useState('')

    const generateCaptcha = () => {
        let keywords = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
        let captcha = "";
        for (let i = 0; i < 6; i++) {

            captcha = captcha + keywords.charAt(Math.random() * keywords.length)
        }
        setCaptchaString(captcha);

    }

    useEffect(() => {
        generateCaptcha();
    }, [])
    

    const updateCaptcha = (e) => {
        e.preventDefault();
        generateCaptcha()
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (captchaString === captchaInput) {
            setMessage("Your form is submitted Successfully!")
        } else {
            setMessage("Sorry! the captcha didn't match. Try again.")
        }
        console.log(name, email, captchaInput);

    }


    return (
        <div className="container">

            <form className="form" onSubmit={handleFormSubmit}>

                <h1>Contact us</h1>
                <input
                    type="text"
                    required={true}
                    placeholder="Name"
                    className="text-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    required={true}
                    placeholder="Email"
                    className="text-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <div className="captcha-container">
                    <div className=" captcha">
                        {captchaString}
                    </div>

                    <button
                        className="shuffle-icon"
                        onClick={(e) => updateCaptcha(e)}
                    >
                        <img src={shuffleIcon} alt="generate captcha" />
                    </button>

                    <input
                        value={captchaInput}
                        onChange={(e) => setCaptchaInput(e.target.value)}
                        placeholder="type the text here"
                        className="captcha-input" />
                </div>


                <button
                    type="submit"
                    className="submit-button"
                >
                    Submit
                </button>


                <span className="alert-message">{message}</span>
            </form>
        </div>
    );
}

export default Form;