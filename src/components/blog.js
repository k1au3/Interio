import { IonIcon } from "@ionic/react";
import { chevronForward,  playCircle } from "ionicons/icons";
import blogImage from '../images/myhq-workspaces-NEFgreoVtig-unsplash.jpg';



const Blog = () => {
    return ( 
        <div className="blog">
            <div className="left">
                <h3>Take a look How <span>Interio Design Studio works</span></h3>
                <p>
                    Interio's multi-award winning design team approach every project as a unique design journey, carefully considering client lifestyles, preferences and personal need.
                </p>
                <p>
                    Our high-end design services are tailored to meet each client's needs that encompass total turnkey solutions for our client's homes, delivering singular and distinctive designs which reflect our values and thoughtful design.
                </p>
                <span id="span"> <IonIcon icon={chevronForward} /> <button>Learn more to hire us</button></span>
            </div>
            <div className="right">
                <img src={blogImage} alt="blog" />
                <div className="toast">
                    <span>Interio team approach every project as a unique design journey</span>
                    <div className="bottom">
                        <h5>Play Video</h5>
                        <div className="dash"></div>
                        <IonIcon icon={playCircle} />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Blog;