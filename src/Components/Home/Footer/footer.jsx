import './footer.css';
import shape from '../../../assets/shape-bg.png'
function Footer(){
    return(
        <div className='footer-container'>
            <div className='footer-parent'>
                <img src={shape} alt="" />
            </div>
        </div>
    );
}
export default Footer;