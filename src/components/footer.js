import { IonIcon } from "@ionic/react";
import { location, logoFacebook, logoLinkedin, logoTwitter } from "ionicons/icons";
import newsletterImage from '../images/petr-magera-Ugnm0F4e00U-unsplash.jpg';
import logo from '../images/icons/leaves.png'


const Footer = () => {
    return ( 
        <div className="footer_container">
            <div className="newsletter">
                <img src={newsletterImage} alt="newsletter" />
                <div className="news">
                    <span><IonIcon icon={location} /> PO Box 0100 Hurlingham, Nairobi, Kenya</span>
                    <h3>Let's start something big together</h3>
                    <form action="/">
                        <input type="email" value="Enter your email"/>
                        <button type="submit">Get Started</button>
                    </form>
                </div>
            </div>
            <div className="footer">
                <div className="company">
                    <h3>Company</h3>
                    <div className="icons">
                        <IonIcon icon={logoFacebook} />
                        <IonIcon icon={logoLinkedin} />
                        <IonIcon icon={logoTwitter} />
                    </div>
                    <ul>
                        <li>Interio Studio Ltd.</li>
                        <li>PO Box 0100, Hurlingham</li>
                        <li>Nairobi, Kenya</li>
                    </ul>
                </div>
                <div className="rest">
                    <div>
                        <h3>Contacts</h3>
                        <ul>
                            <li>info@interiostudios.io</li>
                            <li>(+254) 235 567 891</li>
                            <li>(+254) 198 567 235</li>   
                            <li>(+254) 234 56 890</li>
                        </ul>
                    </div>
                    <div>
                        <h3>About Us</h3>
                        <ul>
                            <li>References</li>
                            <li>Services</li>
                            <li>Contact </li>
                            <li>Team</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Catalogs</h3>
                        <ul>
                            <li>Home </li>
                            <li>Office </li>
                            <li>Kitchen </li>
                            <li>Industries</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="dash"></div>
            <div className="end">
                <div className="left">
                    <img src={logo} alt="logo" />
                    <h3>Interio</h3>
                    <span>|</span>
                    <span>2023 Interio Studio</span>
                </div>
                <ul className="right">
                    <li>policy</li>
                    <li>cookies</li>
                    <li>terms & conditions</li>
                </ul>
            </div>
        </div>
     );
}
 
export default Footer;