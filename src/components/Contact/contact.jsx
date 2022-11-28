import './contact.css';
import React from 'react';
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

                    <div className="card drop-shadow-xl rounded-none w-full bg-base-100 shadow-xl" >
                        <div className="card-body ">
                            <div className="grid gap-10 grid-cols-1 lg:xl:grid-cols-2" >
                                <div className='card-info'>
                                    <div className='card-message'>
                                        <div className='message'>
                                            <h4> Get In Touch </h4>
                                        </div>
                                        <div className='user-details-info ml-7'>
                                            <div className="user-icons ">
                                                <a href={linkedIn} target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
                                                <a className='ml-5' href={github} target="_blank" rel="noreferrer"><BsGithub /></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="user-details-contacts">
                                            <div className='user-location'>
                                                <div className='icons'><GoLocation /></div>
                                                <h4>Locations:</h4>
                                                <p className='text-base-content'>Pretoria, Gauteng, South Africa</p>
                                            </div>

                                            <div className='user-location'>
                                                <div className='icons'>  <GoMail /></div>
                                                <h4>Email:</h4>
                                                <p className='text-base-content '><a className='no-underline' href="mailto:mashengete@live.com">mashengete@live.com</a></p>
                                            </div>

                                            <div className='user-location'>
                                                <div className='icons'> <AiOutlineMobile /></div>
                                                <h4>Call:</h4>
                                                <p className='text-base-content '><a className='no-underline' href="tel:+27-79-553-5147">+27-79-553-5147</a></p>
                                            </div>
                                        </div>                                       
                                    </div>

                                    <div className='contact-form'>
                                        <div className='container-form lg:xl:mt-16'>
                                            {/* <Form action='https://formspree.io/f/mnqwdobp' method="POST" className='lg:xl:mr-24 lg:xl:-ml-12' > */}
                                            <Form  action='https://formsubmit.co/118572a47bfb4a409cf0c1ba464e8d39' method="POST" className='lg:xl:mr-24 lg:xl:-ml-12' >
                                                <Form.Group className="name mb-4" controlId="formBasicEmail">
                                                    <Form.Control type="text" name="name" placeholder="Your Name" required />
                                                </Form.Group> 

                                                <Form.Group className="email mb-4" controlId="formBasicEmail">
                                                    <Form.Control type="email" name="email" placeholder="Your Email" required />
                                                </Form.Group> 
                                           
      
                                                <Form.Group className="mb-4" controlId="formBasicEmail">
                                                    <Form.Control type="text" name="message" required aria-label="With textarea" style={{minHeight: "100px"}} as="textarea" placeholder="Message" />
                                                </Form.Group> 

                                                <button type='btn' className='text-white  contact lg:xl:text-lg lg:xl:mt-7 font-medium rounded-full text-sm px-5 py-2.5 text-center'>{' '}Contact Me{''}</button>
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