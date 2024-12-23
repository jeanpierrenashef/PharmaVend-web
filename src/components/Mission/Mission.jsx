import React from "react";
import "./Mission.css";
import "../base.css"
import capsuleImage from "../../Assets/capsule.png"

const Mission = () => {
    return(
        <section class="flex column mission">
            <h1>Our Mission</h1>
            <div class="flex mission-container">
                <div class="flex column mission-text left">
                    <h4><strong>Provide 24/7 access:</strong> Access to essential medications
            and medical supplies should never be restricted by time or
            location. Our mission is to ensure that everyone has uninterrupted
            access to vital healthcare products regardless of the hour or
            situation.</h4>
                    <h4><strong>Leverage technology:</strong> Harnessing the power of
            cutting-edge technologies such as robotics, IoT, and AI, we deliver
            efficient, secure, and user-friendly solutions that redefine the
            way healthcare services are provided and consumed.</h4>
                </div>

            
                <div class="mission-image">
                    <img src={capsuleImage} alt="test"/>
                </div>

                
                <div class="flex column mission-text right">
                    <h4><strong>Bridge healthcare gaps:</strong> We aim to close the
            disparities in healthcare accessibility by addressing underserved
            communities and providing practical solutions tailored to their
            unique needs.</h4>
                    <h4><strong>Empower communities:</strong> By simplifying access to
            critical healthcare services, we help empower individuals and
            families to live healthier, more secure lives while fostering a
            sense of trust and independence in their healthcare journey.</h4>
                </div>
            </div>
        </section>

    );
};
export default Mission;