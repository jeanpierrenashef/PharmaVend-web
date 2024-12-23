import React from 'react';
import './About.css';
import '../base.css'

const About = () => {
return (
    <section id="about" className="about">
        <h2>About Us</h2>
        <div className='flex about-disp'>
            <div className='flex column about-text'>
                <h2>Revolutionizing Access to Medications</h2>
                <h4>At PharmaVend, we are committed to redefining 
                    how people access essential medications and medical
                    supplies. Born from the need to provide reliable, 
                    round-the-clock solutions, PharmaVend offers 
                    state-of-the-art vending machines equipped with a 
                    user-friendly interface and smart technology to dispense
                    pharmaceutical essentials when and where you need them most.</h4>
            </div>
            <div>
                {/* map display */}
            </div>
        </div>
        <p>We provide the best services in the industry.</p>
    </section>
);
};

export default About;
