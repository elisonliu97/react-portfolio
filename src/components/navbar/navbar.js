import React, { useState } from 'react';
import './navbar.css'

function NavBar(props) {

    return (
        // navbar portion
        <nav>
            <ul>
                <li onClick={() => props.handlePageChange("About")}>
                    About
                </li>
                <li onClick={() => props.handlePageChange("Portfolio")}>
                    Portfolio
                </li>
                <li onClick={() => props.handlePageChange("Contact")}>
                    Contact
                </li>
                <li onClick={() => props.handlePageChange("Resume")}>
                    <a href="https://drive.google.com/file/d/17GR5d24QC7zzlLlR6FvQdRZf9NnWx4Id/view">Resume</a>
                </li>

            </ul>
        </nav >
    )
}
export default NavBar