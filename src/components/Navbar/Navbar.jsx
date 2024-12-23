import React from "react";
import "./Navbar.css";
import logo from "../../Assets/logo.png"

const Navbar = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="flex row navbar">
            <div className="flex row">
                <div className="nav-logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="flex row nav-links">
                    <a onClick={() => scrollToSection("achievements")}>Achievements</a>
                    <a onClick={() => scrollToSection("about")}>About Us</a>
                    <a onClick={() => scrollToSection("mission")}>Mission</a>
                    <a onClick={() => scrollToSection("products")}>Products</a>
                    <a onClick={() => scrollToSection("machines")}>Machines</a>
                    <a onClick={() => scrollToSection("whyus")}>Why Us</a>
                </div>
            </div>
        <button className="button contact-btn">Admin</button>
        </nav>
    );
};

export default Navbar;
