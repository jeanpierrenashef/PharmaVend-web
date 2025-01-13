import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MapComponent from './MapComponent';
import './About.css';
import '../base.css';

const About = () => {
    const [machines, setMachines] = useState([]);

    useEffect(() => {
        axios.get("http://192.168.1.7:8000/api/display_machines")
            .then(response => {
                setMachines(response.data); 
            })
            .catch(error => {
                console.error('Error fetching machines:', error);
            });
    }, []); 

    return (
        <section className="about-section">
            <div id="about" className="flex column about">
                <h1>About Us</h1>
                <div className="flex about-disp">
                    <div className="flex column about-text">
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
                    <div className="map-container" style={{ width: '800px', height: '300px' }}>
                        <MapComponent machines={machines} />
                    </div>
                </div>
            </div>
        </section>
        
    );
};

export default About;
