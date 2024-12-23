import React from 'react';
import './About.css';
import '../base.css';

const About = () => {
return (
    <section id="about" className="flex column about">
        <h1>About Us</h1>
        <div className="flex about-disp">
            <div className="about-text">
                <h2>Revolutionizing Access to Medications</h2>
                <h4>
                    At PharmaVend, we are committed to redefining how people access
                    essential medications and medical supplies. Born from the need to
                    provide reliable, round-the-clock solutions, PharmaVend offers
                    state-of-the-art vending machines equipped with a user-friendly
                    interface and smart technology to dispense pharmaceutical essentials
                    when and where you need them most.
                </h4>
            </div>
            <div className="map-container">
                <iframe
                    title="PharmaVend Locations"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.9964828753476!2d-122.08385168469225!3d37.38605197983179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb0cb9c3d4d3b%3A0xfb2e0df6f6ec4e03!2sGoogleplex!5e0!3m2!1sen!2sus!4v1675341022549!5m2!1sen!2sus"
                    style={{ border: 0, width: "100%", height: "100%" }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    </section>
);
};

export default About;
