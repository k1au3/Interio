
import processImage from '../images/spacejoy-KSfe2Z4REEM-unsplash.jpg';
import bulb from '../images/icons/bulb.png';
import plan from '../images/icons/check-list.png';
import pencil from '../images/icons/pencil-and-ruler.png';
import settings from '../images/icons/maintenance.png';
import rocket from '../images/icons/mission.png';
import { IonIcon } from '@ionic/react';
import {  chevronForwardCircle } from 'ionicons/icons';

function Icon ({source, title}) {
    
    return(
        <div className="process_icon">
            <img className="image" style={{width: '1.6rem', height: '1.6rem'}} src={source} alt="icon" />
            <h5>{title}</h5>
        </div>
    );
}

const Process = () => {
    return ( 
        <div className="process_container">
            <div className="right">
                <img src={processImage} alt="process" />
                <div className="icons">
                    <Icon source={bulb} title="Concept" />
                    <IonIcon icon={chevronForwardCircle}/>
                    <Icon source={plan} title="Plan" />
                    <IonIcon icon={chevronForwardCircle}/>
                    <Icon source={pencil} title="Design" />
                    <IonIcon icon={chevronForwardCircle}/>
                    <Icon source={settings} title="Build" />
                    <IonIcon icon={chevronForwardCircle}/>
                    <Icon source={rocket} title="Launch" />
                </div>
            </div>
            <div className="left">
                <h3><span>Our work process</span> make your dream true</h3>
                <ol>
                    <li>
                        <h5>Perfection in Every Inch</h5>
                        <p>We are a residential interior design firm located in Nairobi. Our boutique studio offers more than.</p>
                    </li>
                    <li>
                        <h5>Simple Idea & Design</h5>
                        <p>We are a residential interior design firm located in Nairobi. Our boutique studio offers more than.</p>
                    </li>
                    <li>
                        <h5>Comfortable Support</h5>
                        <p>We are a residential interior design firm located in Nairobi. Out boutique studio offers more than.</p>
                    </li>
                </ol>
            </div>
        </div>
     );
}
 
export default Process;