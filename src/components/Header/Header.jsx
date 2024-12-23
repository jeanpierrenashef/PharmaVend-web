import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <section id="header" className="header">
            <p className='Slogan'>PharmaVend: Your 24/7 Lifesaver in a Box.</p>
            <h3>Revolutionizing access to essential medications, anytime, anywhere—because your health shouldn't wait.</h3>
            <button className='action-btn'>Find your Machine</button>
        </section>
    );
};

export default Header;
