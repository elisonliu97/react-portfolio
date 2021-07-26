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
                <a href="https://drive.google.com/file/d/17GR5d24QC7zzlLlR6FvQdRZf9NnWx4Id/view"><li onClick={() => props.handlePageChange("Resume")}>
                    Resume
                </li></a>

            </ul>
        </nav >
    )
}
export default NavBar