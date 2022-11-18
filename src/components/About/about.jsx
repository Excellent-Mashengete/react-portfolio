import './about.css';
import Skills from '../Skills/skills'
import { Container } from 'react-bootstrap';

function About() {
    return (
        <Container>
            <div className='about'>
                <h3 className="flex justify-center project-heading mb-4">
                    About 
                </h3> 
                <Skills />
            </div>
        </Container>
    );
}

export default About;