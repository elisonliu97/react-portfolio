import React, { useState } from 'react';
import NavBar from './navbar';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';

function Header() {
    const [currentPage, setCurrentPage] = useState('About');
    const handlePageChange = (page) => setCurrentPage(page);

    const renderPage = () => {
        // if (currentPage === 'Resume') {
        //   return <Resume />;
        // }
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
            Elison Liu
            <NavBar currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
            {currentPage + "TEXT"}
        </div>
    )
}

export default Header;