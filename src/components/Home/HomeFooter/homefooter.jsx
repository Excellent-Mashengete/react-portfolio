import './homefooter.css';
import shape from '../../../assets/shape-bg.png'
function HomeFooter(){
    return(
        <div className='footer-container'>
            <div className='footer-parent'>
                <img src={shape} />
            </div>
        </div>
    );
}
export default HomeFooter;
