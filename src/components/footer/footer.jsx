import './footer.css'

function Footer(){
    return (
        <footer class="footer flex justify-center mt-10 footer-center text-center inherit text-base-content ">
            <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="designer">
                    <p> Designed by Excellent Mashengete</p>
                </div>
                <div className="copyright">
                    <p>Copyright © 2022 All Rights Reserved </p>
                </div>
                <div className="footer-icons" >
                    
                </div>
            </div>
        </footer>
    );
}

export default Footer;