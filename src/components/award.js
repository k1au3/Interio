import { IonIcon } from "@ionic/react";
import { arrowForward, star } from "ionicons/icons";
import Button from "./button";
import large from '../images/roberto-nickson-rEJxpBskj3Q-unsplash.jpg';
import small from '../images/lissete-laverde-7jOeRc0dOWs-unsplash.jpg';
import reviewer from '../images/reviews/rev4.jpeg';
import signature from '../images/icons/signature.png';



const Awards = () => {
    return ( 
        <div className="awards_container">
            <div className="gallery">
                <img className="large" src={large} alt="large" />
                <div className="right">
                    <img src={small} alt="small" />
                    <div className="review">
                        <div className="top">
                            <span className="dash"></span>
                            <p>"It was really very smooth process work with the team of Interio. The technicians are well experienced and were able to understand my requirements thoroughly."</p>
                        </div>
                        <div className="bottom">
                            <div className="left">
                                <img src={reviewer} alt="reviewer" />
                                <span>Lisa O.</span>
                            </div>
                            <div className="right">
                                <div className="star">
                                    <IonIcon icon={star} />
                                    <IonIcon icon={star} />
                                    <IonIcon icon={star} />
                                    <IonIcon icon={star} />
                                    <IonIcon icon={star} />
                                </div>
                                <h5>48 reviews on Yelp!</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <aside className="content">
                <h3>Award Winning <br /> Interior <span>Design Studio</span></h3>
                <p>
                    We are a residential Interior design firm located in Hurlingham. Our boutique studio offers more than 20 years experience in custom renovations, new homw finishes and furniture designs. We can help with all aspects of your project from design concepts and putting together the construction team, to sourcing furniture and art. While also tending to the thousands of details it takes to create a custom home tailored to your lifestyle.
                </p>
                <img src={signature} alt="signature" />
                <h4>Jennie Wambui, CEO</h4>
                <Button className="btn">Read More <IonIcon icon={arrowForward} /></Button>
            </aside>
        </div>
     );
}
 
export default Awards;
