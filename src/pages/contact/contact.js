import React, { useState } from 'react';
import './contact.css'

function Contact() {
    const [contactForm, setContactForm] = useState({
        name:"",
        email:"",
        subject:"",
    });

    // need 
    const submitHandler = () => {
        return
    }


    return (
        <div class="contact-container">
            <h2>Contact Me</h2>
            {/* submit handler might need to be on button */}
            <form class="form-container" onSubmit={() => submitHandler()}>
                <div class="input-container">
                    <label>Name</label>
                    <textarea id="input-name"></textarea>
                </div>
                <div class="input-container">
                    <label>Email</label>
                    <textarea id="input-email"></textarea>
                </div>
                <div class="input-container">
                    <label>Subject</label>
                    <textarea id="input-subject"></textarea>
                </div>
                <div class="input-container">
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Contact