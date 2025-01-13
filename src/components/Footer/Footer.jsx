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
            <footer className="footer">
            <div class="footer-container">
                <div class="footer-section sitemap">
                    <h4>GAME-MAZE RUNNER</h4>
                    <div class="footer-columns">
                        <div class="column">
                            <h5>Discover Maze Runner</h5>
                            <ul>
                                <li><a href="#">Our Winning Game</a></li>
                                <li><a href="#">Entertainment</a></li>
                                <li><a href="#">Our Story</a></li>
                                <li><a href="#">Community Members</a></li>
                                <li><a href="#">Partners</a></li>
                            </ul>
                        </div>
                        <div class="column">
                            <h5>Our Games</h5>
                            <ul>
                            <li><a href="#">Gaming</a></li>
                            <li><a href="#">Enjoyement</a></li>
                            <li><a href="#">Meeting new people</a></li>
                            <li><a href="#">Hunting Rooms</a></li>
                            <li><a href="#">Ghosts</a></li>
                            </ul>
                        </div>
                        <div class="column">
                            <h5>Other Games</h5>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Maze Runner</a></li>
                                <li><a href="#">Play This Game</a></li>
                                <li><a href="#">Get in Touch</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
        
                <div class="footer-section contact">
                    <h4>Subscribe to our Newsletter</h4>
                    <p>Email: <a href="mailto:mazeRunner@game.com">mailto:mazeRunner@game.com</a></p>
                    <p>Phone: <a href="tel:+9611660941">+961 1 66 09 41</a></p>
        

                    <div class="app-links">
                        <a href="#"><img src={appStore} alt="App Store"/></a>
                        <a href="#"><img src={googlePlay} alt="Google Play"/></a>
                    </div>
                </div>
            </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 MAZE RUNNER By <a href="#">Bright Volcano</a></p>
                    <div className="social-links">
                        <a href="#"><img src={facebookIcon} alt="Facebook"/></a>
                        <a href="#"><img src={instagramIcon} alt="Instagram"/></a>
                        <a href="#"><img src={twitterIcon} alt="Twitter"/></a>
                    </div>
                </div>
            </footer>
    );
}
export default Footer;
