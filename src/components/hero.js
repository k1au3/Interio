import { IonIcon } from "@ionic/react";
import { arrowForwardSharp, bagOutline } from 'ionicons/icons'
import Button from "./button";
import { useState } from "react";


function Carousel () {
    const [index, setIndex] = useState(0);
    
}


const Hero = () => {
    return ( 
        <div className="hero__container">
            <div className="nav">
                <div className="logo">
                    <img src="" alt="interio" />
                    <h3>Interio</h3>
                </div>
                <ul className="nav__menu">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Explore Work</li>
                    <li>Shop</li>
                    <li>Contact</li>
                </ul>
                <div className="nav__icons">
                    {/* icons */}
                    <IonIcon icon={bagOutline} />
                </div>
            </div>
            {/*nav end */}
            <div className="main">
                <h3><span>Interio</span> The Modern art of Simplicity</h3>
                <p>We are tending to the thousands of details it takes to create a custom home tailored to your lifestyly</p>
                <Button>Explore More <IonIcon icon={arrowForwardSharp} /></Button> 
            </div>
        </div>
     );
}
 
export default Hero;

