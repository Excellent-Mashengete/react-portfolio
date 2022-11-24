import './home.css';
import Profile from './Profile/profile';

function Home(){
    return(
        <div className='home-container'>
            <div className='profile '>
                <Profile />
            </div>
        </div>
    );
}
export default Home;