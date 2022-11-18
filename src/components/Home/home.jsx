import './home.css';
import Profile from './Profile/profile';
import Footer from './HomeFooter/homefooter';

function Home(){
    return(
        <div className='home-container'>
              <Footer />
            <Profile />
      
        </div>
    );
}
export default Home;