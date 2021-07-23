import React, { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import Project from './project';

function NavBar(props) {

    return (
        // navbar portion
        <nav>
            <ul>
                <li onClick={() => props.handlePageChange("About")}>
                        About Me
                </li>
                <li onClick={() => props.handlePageChange("Portfolio")}>
                        Portfolio
                </li>
                <li onClick={() => props.handlePageChange("Contact")}> 
                        Contact
                </li>
                <li onClick={() => props.handlePageChange("Resume")}>
                        Resume
                </li>
            </ul>
            {/* <Project /> */}
        </nav>
    )
}
export default NavBar