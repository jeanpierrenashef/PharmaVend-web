import React from "react";
import "./Footer.css";
import "../base.css";
import appStore from "../../Assets/app-store.png"; 
import googlePlay from "../../Assets/google-play.png"; 
import facebookIcon from "../../Assets/facebook.png"; 
import instagramIcon from "../../Assets/instagram.png"; 
import twitterIcon from "../../Assets/twitter.png"; 

const Footer = () => {
    return(
        <section className="footer-section">
            <footer className="footer">
            <div class="footer-container">
                <div class="footer-section sitemap">
                    <h1>PharmaVend</h1>
                    <div class="footer-columns">
                        <div class="column">
                            
                            <h5>Discover PharmaVend</h5>
                            <ul>
                                <li><a href="#">Our Awards</a></li>
                                <li><a href="#">Medicine</a></li>
                                <li><a href="#">Our Story</a></li>
                                <li><a href="#">Community Members</a></li>
                                <li><a href="#">Partners</a></li>
                            </ul>
                        </div>
                        <div class="column">
                            <h5>Our Healthcare Partners</h5>
                            <ul>
                            <li><a href="#">Healthy</a></li>
                            <li><a href="#">Enjoyement</a></li>
                            <li><a href="#">Comfort</a></li>
                            <li><a href="#">Happiness</a></li>
                            </ul>
                        </div>
                        <div class="column">
                            <h5>Other Services</h5>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">PharmaVend Online</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Get in Touch</a></li>
                            </ul>
                        </div>
                        <div class="footer-section contact">
                            <h4>Subscribe to our Newsletter</h4>
                            <p>Email: <a href="mailto:PharmaVend.com">mailto:PharmaVend.com</a></p>
                            <p>Phone: <a href="tel:+9611660941">+961 1 66 09 41</a></p>
                

                            <div class="app-links">
                                <a href="#"><img src={appStore} alt="App Store"/></a>
                                <a href="#"><img src={googlePlay} alt="Google Play"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 PharmaVend <a href="#"></a></p>
                    <div className="social-links">
                        <a href="#"><img src={facebookIcon} alt="Facebook"/></a>
                        <a href="#"><img src={instagramIcon} alt="Instagram"/></a>
                        <a href="#"><img src={twitterIcon} alt="Twitter"/></a>
                    </div>
                </div>
            </footer>
    </section>
    );
}
export default Footer;
