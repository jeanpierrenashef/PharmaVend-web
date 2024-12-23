import React from "react";
import "./Mission.css";
import "../base.css"

const Mission = () => {
    return(
        <section class="flex column mission">
            <h1>Our Mission</h1>
            <div class="flex mission-container">
                <div class="mission-text left">
                    <p>Provide 24/7 access to essential medications and medical supplies,</p>
                    <p>Leverage cutting-edge technology like robotics, IoT, and AI to deliver</p>
                </div>

            
                <div class="mission-image">
                    <img src="../Assets/capsule.png" />
                </div>

                
                <div class="mission-text right">
                    <p>Bridge the gap in healthcare accessibility, addressing</p>
                    <p>Empower communities by making healthcare more convenient, secure needs.</p>
                </div>
            </div>
        </section>

    );
};
export default Mission;