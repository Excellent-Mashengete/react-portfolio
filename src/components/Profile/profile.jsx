import { Container } from 'react-bootstrap';
import {FaHandPointRight} from 'react-icons/fa';
import profileImage from '../../assets/images/working-removebg-preview.png';
import './profile.css';

function Profile() {
    return (
        <div className='userabout-container'>
            <Container className='userabout-parent'>
                <div className="card w-full bg-base-100 " >
                    <div className="card-body">
                        <div className="grid gap-10 grid-cols-1 lg:grid-cols-2 xl:grid-cols-2" >
                            <div className='card-profile'>
                                <div className='card-profile-heading'>
                                    <h3>Know Who I'M</h3>
                                </div>
                                <div className="card-profile-details">
                                    <div className='card-profile-name'>
                                        <p>Hi Everyone, I am <span className='profile-name'> Excellent Nhlanhla Mashengte</span> A Full-Stack Developer from South Africa</p>
                                    </div>

                                    <div className='card-profile-brief'>
                                        <p>I'm an IT Specialist in software development, with experience building web application working as a full-stack developer using sets of 
                                            skills mentioned below.
                                        </p>
                                    </div>

                                    <div className='card-profile-brief'>
                                        <p>Apart from coding, some other activities that I love to do!</p>
                                        <ul> 
                                            <li><FaHandPointRight style={{color: "var(--font-color)",  margin: "5"}} /> Playing Games</li>
                                            <li><FaHandPointRight style={{color: "var(--font-color)", margin: "5"}} />Reading</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className='card-profile'>
                                <div className='image'>
                                    <img src={profileImage} alt="profile" />
                                </div>
                            </div>
                        </div> 
                   </div>
                </div>
            </Container>
        </div>
    );
 }

export default Profile;