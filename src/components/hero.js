import { IonIcon } from "@ionic/react";
import { arrowForwardSharp, bagOutline, playCircle } from 'ionicons/icons'
import Button from "./button";
import React, { useState } from "react";





const Hero = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
    return ( 
        <div className="hero__container">
            <div className="green__bg">
                <div className="green_nav">
                    <div className="logo">
                        <img src="" alt="logo" />
                        <h3>Interio</h3>
                    </div>
                    <ul className="nav_menu">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Explore Work</li>
                        <li>Shop</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="green_hero_content">
                    <h3><span>Interio</span> The Modern art of simplicity.</h3>
                    <p>We are tending to the thousands of details it takes to create a custom home tailored to your lifestyle.</p>
                    <Button>Explore More <IonIcon icon={arrowForwardSharp}/></Button>
                </div>
            </div>
            <div className="cream__bg">
                <div className="cream_nav">
                    <ul>
                        <li onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                            Eng 
                            {showDropdown && (
                                <ul className="dropdown">
                                    <li>Swa</li>
                                    <li>Ar</li>
                                    <li>Es</li>
                                </ul>
                            )}
                        </li>
                        <li><IonIcon icon={bagOutline} /></li>
                    </ul>
                </div>
                <div className="hero_image_cont">
                    <div className="box"></div>
                    <div className="image">

                    </div>
                    <Button> Watch video <IonIcon icon={playCircle} /></Button>
                </div>
            </div>
        </div>
     );
}
 
export default Hero;

