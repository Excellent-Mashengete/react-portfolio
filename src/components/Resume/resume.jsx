import { Container } from 'react-bootstrap';
import './resume.css';

function Resume() {
    return (
        <Container >
        <h3 className="flex justify-center project-heading mb-4">
            Resume 
        </h3>
        <div className='grid lg:xl:grid-cols-2 grid-cols-1 gap-6 mb-4 lg:ml-28 resume' >
            <div className='firstPart'>
                <div className='summary mb-4'>
                    <h3 className='font-medium'>Summary</h3>
                    <div className="summary">
                        <h4>Excellent Mashengete</h4> 
                        <em>
                            IT Specialist in software development with a practical hand in full Stack. 
                            I combine good communication skills. greate technological expertise, 
                            team player who can work in a fast-paced environment  and independently when needed.
                        </em>
                        <ul className='-ml-5 list-disc mt-1'>
                            <li>Pretoria, South Africa</li>
                            <li><a className='no-underline' href="tel:+27-79-553-5147">+27-79-553-5147</a></li>
                            <li><a className='no-underline' href="mailto:mashengete@live.com">mashengete@live.com</a></li>
                        </ul>
                    </div>
                </div>

                <div className='education'>
                    <h3 className='font-medium'>Education</h3>
                    <div className="education mb-4">
                        <h4>National Diploma Information Technology <br />(
                        Software Development )</h4>
                        <h6 className='resume-item'>2018 - 2021</h6>
                        <em>Tshwane University Of Technology, Pretoria</em>
                    </div>
                    <div className="education">
                        <h4>National Senior Certificate <br />
                        (Grade 12) </h4> 
                        <h6 className='resume-item'>wertdgf</h6>
                        <em>Lotus Gardens Secondary School, Pretoria</em>
                    </div>
                </div>
            </div>
            
            <div className='Experience'>
                <h3 className='font-medium'>Professional Experience</h3>
                <div className="experience">
                    <h4>Full Stack Developer</h4> 
                    <h6 className='resume-item'>Present</h6>
                    <em>The Digital Academy</em>
                    <ul className='-ml-5 list-disc mt-1'>
                            <li>Pretoria, South Africa</li>
                            <li><a className='no-underline' href="tel:+27-79-553-5147">+27-79-553-5147</a></li>
                            <li><a className='no-underline' href="mailto:mashengete@live.com">mashengete@live.com</a></li>
                        </ul>
                </div>
            </div>
        </div>
    </Container>
    );
}

export default Resume;