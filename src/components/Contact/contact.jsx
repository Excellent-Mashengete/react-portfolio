import './contact.css';
import { GoMail, GoLocation } from 'react-icons/go';
import { AiOutlineMobile, AiFillLinkedin } from 'react-icons/ai';
import { BsGithub } from "react-icons/bs";
import { Container, Form, Button} from 'react-bootstrap';

function Contact() {

    let linkedIn = "https://za.linkedin.com/in/excellent-nhlanhla-mashengete-12535121b";
    let github= "https://github.com/Excellent-Mashengete";
    return (
        <Container className='content-center ' id="contact">
            <div className='about'>
                <h3 className="flex justify-center project-heading mb-4 ">
                    Contact 
                </h3> 
                <div className='container' > 
                    <div className="grid grid-cols-1 lg:xl:grid-cols-2 gap-8">
                        <div className='UserContacts lg:ml-28'>
                            <div className='location'>
                                <div className='icons'><GoLocation /></div>
                                <h4>Locations:</h4>
                                <p className='text-base-content'>Pretoria, Gauteng, South Africa</p>
                            </div>

                            <div className='location'>
                                <div className='icons'>  <GoMail /></div>
                                <h4>Email:</h4>
                                <p className='text-base-content '><a className='no-underline' href="mailto:mashengete@live.com">mashengete@live.com</a></p>
                            </div>

                            <div className='location'>
                                <div className='icons'> <AiOutlineMobile /></div>
                                <h4>Call:</h4>
                                <p className='text-base-content '><a className='no-underline' href="tel:+27-79-553-5147">+27-79-553-5147</a></p>
                            </div>

                            <div className='portfolio'>
                                <div className="footer-linkendin">
                                    <a href={linkedIn} target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
                                </div>
                                
                                <div className="footer-github">
                                    <a href={github} target="_blank" rel="noreferrer"><BsGithub /></a>
                                </div>
                            </div>
                        </div> 
                        <Form action='https://formspree.io/f/mnqwdobp' method="POST" className='lg:mr-24 lg:-ml-12' >
                            <div className="grid gap-6 mb-4 md:grid-cols-2">
                                <Form.Group className="name" controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder="Your Name" />
                                </Form.Group> 
                                <Form.Group className="email" controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder="Your Email" />
                                </Form.Group> 
                            </div>  
                            <Form.Group className="mb-4" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Subject" />
                            </Form.Group>  

                            <Form.Group className="mb-4" controlId="formBasicEmail">
                                <Form.Control type="text"  aria-label="With textarea" style={{minHeight: "100px"}} as="textarea" placeholder="Message" />
                            </Form.Group> 

                            <Button variant="primary" type="submit" className=" font-medium rounded-lg text-sm w-full sm:w-auto text-center" >
                                Send Message
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Contact;