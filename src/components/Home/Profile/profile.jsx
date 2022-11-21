import './profile.css'
import { AiFillLinkedin, AiOutlineDownload } from 'react-icons/ai';
import { BsGithub } from "react-icons/bs";
import Typical from "typewriter-effect";
import resume from "../../../assets/ehizcv.pdf";

function Profile() {
    let linkedIn = "https://za.linkedin.com/in/excellent-nhlanhla-mashengete-12535121b";
    let github = "https://github.com/Excellent-Mashengete";
    return (
        <div className='profile-container '>
            <div className='profile-parent grid lg:xl:gap-72 gap-10 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2'>
                <div className='profile-picture'>
                    <div className='profile-picture-background'></div>
                </div>
              
                <div className='profile-detail'>
                    <div className='profile-icons'>
                        <div className="icons">
                            <a href={linkedIn} target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
                            <a className='ml-3' href={github} target="_blank" rel="noreferrer"><BsGithub /></a>
                        </div>
                    </div>

                    <div className='profile-details-name'>
                        <span className='profile-text'>
                            {" "}
                            Hi There <br /> I'm <span className='user-name'>Excellent Mashengete</span>
                        </span>
                    </div>

                    <div className='profile-details-role'>
                        <span className='profile-text'>
                            {" "}
                            <h1> 
                                {""}
                                <Typical 
                                    options={{
                                        strings: [
                                            "A Full Stack Developer 🌐",
                                            "A Mean & Pean Stack Developer 💻"
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 50,
                                    }}
                                />
                            </h1>
                            <span>
                                Knack of building application with front and back end operations.
                            </span>
                        </span>
                    </div>

                    <div className='profile-details-buttons'>
                        <a href="#contact">
                            <button type='btn' className='text-white contact lg:xl:text-lg font-medium rounded-full text-sm px-5 py-2.5 text-center'>{' '}Contact Me{''}</button>
                        </a>
                       
                        <a href={resume} download="Excellent Resume.pdf">
                            <button type='btn' className="text-white highlighted ml-4 lg:xl:text-lg font-medium rounded-full text-sm px-5 py-2.5 text-center"><AiOutlineDownload style={{marginTop: "4px", marginRight:"5px"}} />Get Resume </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;