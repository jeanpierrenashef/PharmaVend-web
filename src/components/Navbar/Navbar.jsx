import React from "react";
import './Navbar.css';

const Navbar = () => {
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({behavior: "smooth"});
    };

    return(
        <nav className="navbar">
            <ul>
                <li onClick={() => scrollToSection('about')}>About Us</li>
                <li onClick={() => scrollToSection('mission')}>Mission</li>
                <li onClick={() => scrollToSection('products')}>Products</li>
                <li onClick={() => scrollToSection('machines')}>Machines</li>
                <li onClick={() => scrollToSection('Choose')}>Choose Us</li>
            </ul>
        </nav>
    )
    
}

export default Navbar;