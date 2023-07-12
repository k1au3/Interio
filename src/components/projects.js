import { IonIcon } from '@ionic/react';
import { projectData } from '../data/projects';
import Button from './button';
import { arrowForward } from 'ionicons/icons';


const Projects = ({projectData}) => {
    return ( 
        <div className="projects">
            <div className="right">
                <h3><span>700+ projects </span>all over the world</h3>
                <p>
                    Interio is an established high-end architecture and luxury interio design company based in Nairobi.
                    We provide a complete, tailored service covering each and every aspect of your project.
                </p>
                <Button className="btn">Explore More <IonIcon icon={arrowForward} /></Button>
            </div>
            <div className="gallery">
                {projectData.map((project) =>
                <div className="galle" key={project.id}>
                    <h3>{project.title}</h3>
                </div>
                )}
            </div>
        </div>
     );
}
 
export default Projects;