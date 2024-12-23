import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../Assets/logo.png"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 50); 
        };

        window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`flex row navbar ${isScrolled ? "scrolled" : ""}`}>
            <div className="flex row">
                <div className="nav-logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="flex row nav-links">
                    <a href="#about">About Us</a>
                    <a href="#mission">Mission</a>
                    <a href="#products">Products</a>
                    <a href="#machines">Machines</a>
                    <a href="#whyus">Why Us</a>
                </div>
            </div>
            <button className="button contact-btn">Admin</button>
        </nav>
    );
    };

export default Navbar;
