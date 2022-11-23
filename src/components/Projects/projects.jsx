import './project.css';
import { Container } from 'react-bootstrap';
import projects from '../../Data/projects.json';

function Project() {
    let projectData = projects;
    
    return (

            <div className='projects-container'>
                <Container className='projects-parent'>
                    <div className='projects-detail'>
                        <h3 className="flex justify-center project-heading mb-2">
                            Projects 
                        </h3>
                        <h6 className="flex justify-center project-heading mb-4">
                            Projects I have done and played a hand
                        </h6>
                        <div className='projects-detail-name'>
                            <div className="flex justify-center"> 
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
                                    {projectData.map((project, id) => (
                                        <div className="card projects-card w-content shadow-xl"  key={id}>
                                            <figure className="projects-card-image">
                                                <img src={project.image} alt="Shoes" className="rounded-xl" />
                                            </figure>
                                            <h3 className="projects-card-name">{project.name}</h3>
                                            <h3 className="projects-card-desc">{project.description}</h3>
                                            <div className='projects-card-actions mt-6'>
                                                <a href={project.github}>
                                                    <button type='btn' className='text-white github-link font-medium rounded-full text-sm text-center'>{' '}Github{''}</button>
                                                </a>

                                                <a href="https://9anime.to/" target={"_blank"} rel="noreferrer">
                                                    <button type='btn' className="text-white live-demo ml-4 font-medium rounded-full text-sm text-center">{' '}Live Demo {''}</button>
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
    );
}

export default Project;

