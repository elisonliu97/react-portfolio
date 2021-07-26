import React from 'react';
import './navbar.css'

function NavBar(props) {
    
    return (
        // navbar portion
        <nav>
            <ul>
                <a href="#"><li onClick={() => props.handlePageChange("About")}>
                    About
                </li></a>
                <a href="#"><li onClick={() => props.handlePageChange("Portfolio")}>
                    Portfolio
                </li></a>
                <a href="#"><li onClick={() => props.handlePageChange("Contact")}>
                    Contact
                </li></a>
                <a href="#"><li onClick={() => props.handlePageChange("Resume")}>
                    Resume
                </li></a>

            </ul>
        </nav >
    )
}
export default NavBar