import React, { useState, useEffect } from 'react';
import '../App.css'
const Form = () => {

    const [captchaString, setCaptchaString] = useState('')


    const generateCaptcha = () => {
        let keywords = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
        let captcha = "";
        for (let i = 0; i < 6; i++) {

            captcha = captcha + keywords.charAt(Math.random() * keywords.length)
        }
        setCaptchaString(captcha)

    }

    useEffect(() => {
        generateCaptcha();
    }, [])





    return (
        <div className="container">

            <form className="form">

                <h1>Contact us</h1>
                <input
                    placeholder="Name"
                    className="text-input"
                />

                <input
                    placeholder="Email"
                    className="text-input"
                />

                <div className="captcha-container">
                    <div className=" captcha">
                        {captchaString}
                    </div>

                    <input
                        placeholder="type the text here"
                        className="captcha-input" />
                </div>



                <button
                    className="submit-button"
                >
                    submit
                </button>
            </form>
        </div>
    );
}

export default Form;