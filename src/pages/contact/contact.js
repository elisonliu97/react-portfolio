import React from 'react';
import './contact.css'

function Contact() {
    const emailValidator = (email) => {
        // Regex to validate an email by RFC2822
        const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ 
        return emailRegex.test(email.toLowerCase());
    }

    // need submitHandler function    
    const submitHandler = (event) => {
        event.preventDefault();
        // element selectors
        const nameEl = document.querySelector("#input-name").value.trim();
        const emailEl = document.querySelector("#input-email").value.trim();
        const subjectEl = document.querySelector("#input-subject").value.trim();

        if (!nameEl || !emailEl || !subjectEl){
            if(!nameEl) {
                document.querySelector("#label-name").innerHTML = "Name: <span style='color:red;'>NAME IS REQUIRED</span>"
            } else {
                document.querySelector("#label-name").innerHTML = "Name:"
            }
            if(!emailEl) {
                document.querySelector('#label-email').innerHTML = "Email: <span style='color:red;'>EMAIL IS REQUIRED</span>"
            } else {
                document.querySelector('#label-email').innerHTML = "Email:"
            }

            if(!subjectEl) {
                document.querySelector("#label-subject").innerHTML = "Subject: <span style='color:red;'>SUBJECT IS REQUIRED</span>"
            } else {
                document.querySelector("#label-subject").innerHTML = "Subject:"
            }
            return
        }

        document.querySelector("#label-name").innerHTML = "Name:"
        document.querySelector('#label-email').innerHTML = "Email:"
        document.querySelector("#label-subject").innerHTML = "Subject:"

        if (!emailValidator(emailEl)){
            document.querySelector('#label-email').innerHTML = "Email: <span style='color:red;'>INVALID EMAIL</span>"
            return
        } else {
            document.querySelector('#label-email').innerHTML = "Email:"
        }

        window.alert("MESSAGE SENT")

        document.querySelector("#input-name").value = ""
        document.querySelector("#input-email").value = ""
        document.querySelector("#input-subject").value = ""

        return 
    }


    return (
        <div class="contact-container">
            <h2>Contact Me</h2>
            {/* submit handler might need to be on button */}
            <form class="form-container"  onSubmit={(event) => submitHandler(event)}>
                <div class="input-container">
                    <label id="label-name">Name:</label>
                    <input id="input-name"></input>
                </div>
                <div class="input-container">
                    <label id="label-email">Email:</label>
                    <input id="input-email"></input>
                </div>
                <div class="input-container">
                    <label id="label-subject">Subject:</label>
                    <textarea id="input-subject"></textarea>
                </div>
                    <button>Submit</button>
            </form>
        </div>
    )
}

export default Contact