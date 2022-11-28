import './about.css';
import Skills from '../Skills/skills';
import Profile from '../Profile/profile';
function About() {
    return (
        <div className='about-container'>
            <div className='about-parent '>
                <div className='about-detail'>
                    <h3 className="flex justify-center about-heading mb-4">
                        About Me  
                    </h3>
                    <div className='About-profile'>
                        <Profile />
                    </div>
                    <div className='about-skills'>
                        <Skills />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;