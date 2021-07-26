import React, { useState } from 'react';
import NavBar from '../navbar/navbar';
import About from '../../pages/about/about';
import Portfolio from '../../pages/portfolio/portfolio';
import Contact from '../../pages/contact/contact';
import Resume from '../../pages/resume/resume'
import './header.css'

function Header() {
    const [currentPage, setCurrentPage] = useState('About');
    const handlePageChange = (page) => setCurrentPage(page);

    const renderPage = () => {
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Resume') {
            return <Resume />
        }
        return <About />;
    };

    return (
        <div>
            <div class="header-container">
                <h1>Elison Liu</h1>
                <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
            </div>

            {renderPage()}
        </div>
    )
}

export default Header;