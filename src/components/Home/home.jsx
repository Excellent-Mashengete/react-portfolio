import './home.css';
import Profile from './Profile/profile';
import Footer from './Footer/footer';

function Home(){
    return(
        <div className='home-container'>
           
            <div className='profile lg:xl:pt-20'>
                <Profile />
            </div>
          
        </div>
    );
}
export default Home;