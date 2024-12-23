import React from 'react';
import './Machines.css';
import '../base.css';
import video from "./Media1.mp4";

const Machines = () => {
return (
    <section id="machines" className="flex column machines">
        <h1>Our Machines</h1>
        <div className="flex machines-disp">
            <div className="flex column machines-text">
                <h2>Revolutionizing Access to Medications</h2>
                <h4>
                    PharmaVend is making healthcare accessible 24/7 in key locations throughout Lebanon. Check out our machines that are across all Lebanon.
                    <br />
                    <br />
                    Our pharmaceutical vending machines are available in all 8 governorates, 23/25 districts all over Lebanon, and in 38/43 prominent cities!
                    <br />
                    <br />
                    We are expanding our services by the day, and soon the whole map will be covered by pins.
                </h4>
            </div>
            <div className="machine-container">
            <video autoPlay loop muted className="machine-video">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </div>
        </div>
    </section>
);
};

export default Machines;
