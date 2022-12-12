import React from 'react';
import '../App.css'
const Form = () => {
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
                        1ghtsf
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