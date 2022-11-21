import './contact.css';
import { GoMail, GoLocation } from 'react-icons/go';
import { AiOutlineMobile, AiFillLinkedin } from 'react-icons/ai';
import { BsGithub } from "react-icons/bs";
import { Container, Form} from 'react-bootstrap';

function Contact() {

    let linkedIn = "https://za.linkedin.com/in/excellent-nhlanhla-mashengete-12535121b";
    let github= "https://github.com/Excellent-Mashengete";
    return (
        <div className='contact-container'>
            <Container className='contact-parent content-center' id="contact">
                <div className='contact-detail'>
                    <h3 className="flex justify-center contact-heading mb-2">
                        Contact Me
                    </h3> 
                    <h6 className="flex h6 justify-center contact-heading mb-4">
                        Lets Keep in Touch
                    </h6>
                    
                        <div class="md:card contact-card  shadow-xl">
                            <div class="card-body">
                                <div className="grid lg:xl:gap-72 gap-10 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2" >
                                    <div className='user-details lg:ml-28'>
                                        <div className='message'>
                                           <h4> Get In Touch </h4>
                                        </div>
                                        <div className='user-details-info '>
                                            <div className="user-icons">
                                                <a href={linkedIn} target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
                                                <a className='ml-5' href={github} target="_blank" rel="noreferrer"><BsGithub /></a>
                                            </div>
                                        </div>
                                        <div className="user-details-contacts lg:xl:-ml-24 lg:xl:mt-7">
                                            <div className='user-location'>
                                                <div className='icons'><GoLocation /></div>
                                                <h4>Locations:</h4>
                                                <p className='text-base-content'>Pretoria, Gauteng, South Africa</p>
                                            </div>

                                            <div className='user-location'>
                                                <div className='icons'>  <GoMail /></div>
                                                <h4>Email:</h4>                                         <p className='text-base-content '><a className='no-underline' href="mailto:mashengete@live.com">mashengete@live.com</a></p>
                                            </div>

                                            <div className='user-location'>
                                                <div className='icons'> <AiOutlineMobile /></div>
                                                <h4>Call:</h4>
                                                <p className='text-base-content '><a className='no-underline' href="tel:+27-79-553-5147">+27-79-553-5147</a></p>
                                            </div>
                                        </div>
                                    </div> 

                                    <div className='contact-form'>
                                        <div className='container'>
                                            <Form action='https://formspree.io/f/mnqwdobp' method="POST" className='lg:xl:mr-24 lg:xl:-ml-12' >
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

                                                <button type='btn' className='text-white  contact lg:xl:text-lg lg:xl:mt-7 lg:xl:mb-20 font-medium rounded-full text-sm px-5 py-2.5 text-center'>{' '}Contact Me{''}</button>
                                            </Form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>   

            </Container>
        </div>
    );
}

export default Contact;