import React, { useState } from 'react';
import imgs from '../../images/index'
import './footer.css';

function Footer() {

    return (
        <div class='footer-container'>
            <a href={"https://github.com/elisonliu97"}><img src={imgs.githubIcon} /></a>
            <a href={"https://ca.linkedin.com/"}><img src={imgs.linkedInIcon} /></a>
            <a href={"https://twitter.com/"}><img src={imgs.twitterIcon} /></a>
        </div>
    )
}

export default Footer;