import './home.css';
import Profile from './Profile/profile';
import Footer from './Footer/footer';

function Home(){
    return(
        <div className='home-container'>
           
            <div className='profile'>
                <Profile />
            </div>
{/* 
            <div >
                <Footer /> 
            </div> */}
        </div>
    );
}
export default Home;