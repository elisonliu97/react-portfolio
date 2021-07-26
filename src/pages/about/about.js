import React from 'react';
import './about.css';
import imgs from '../../images';

function About() {
    return (
        <div class="about-me">
            <img src={imgs.avatar} />
            <div class="infosection">
                <h2>About Me</h2>
                <p>Hi, I'm Elison, and this is my sample portfolio made with ReactJS. I'm currently learning full stack web development.
                    You can check out some of my work on the portfolio tab.
                </p>
            </div>
        </div>
    )
}

export default About