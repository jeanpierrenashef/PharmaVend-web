import React from "react";
import "./Mission.css";
import "../base.css"
import capsuleImage from "./capsule.png"

const Mission = () => {
    return(
        <section class="flex column mission">
            <h1>Our Mission</h1>
            <div class="flex mission-container">
                <div class="flex column mission-text left">
                    <h4>Provide 24/7 access to essential medications and medical supplies,</h4>
                    <h4>Leverage cutting-edge technology like robotics, IoT, and AI to deliver</h4>
                </div>

            
                <div class="mission-image">
                    <img src={capsuleImage} alt="test"/>
                </div>

                
                <div class="flex column mission-text right">
                    <h4>Bridge the gap in healthcare accessibility, addressing</h4>
                    <h4>Empower communities by making healthcare more convenient, secure needs.</h4>
                </div>
            </div>
        </section>

    );
};
export default Mission;