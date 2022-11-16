import './about.css';
import Skills from '../Skills/skills'
import { Container } from 'react-bootstrap';

function About() {
    return (
        <Container>
            <h3 className="flex justify-center project-heading mb-4">
                About 
            </h3> 
            <Skills />
        </Container>
    );
}

export default About;