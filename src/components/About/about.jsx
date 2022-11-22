import './about.css';
import Skills from '../Skills/skills'
import { Container } from 'react-bootstrap';

function About() {
    return (
        <div className='about-container'>
            <div className='about-parent '>
                <div className='about-detail'>
                    <h3 className="flex justify-center about-heading mb-4">
                        About Me  
                    </h3>
                    <Container className='about-detail-name ' >
                        
                    </Container>
                    <div className='about-skills'>
                        <Skills />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;