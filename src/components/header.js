import React, { useState } from 'react';
import NavBar from './navbar';
import About from '../pages/about/about';
import Portfolio from '../pages/portfolio';
import Contact from '../pages/contact/contact';

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