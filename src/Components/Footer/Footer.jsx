import './footer.css';
import logo from '../../assets/minoo-logo.png';
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo} alt="" />
                <p>I am Minoo Khosravi,frontend developer based in Iran</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>

        </div>
        <hr />
        <div className="footer-bottom">
            <p className='footer-bottom-left'>2023 Minoo Khosravi. All rights reserved</p>
            <div className="footer-bottom-right">        
                {/* <button onClick={()=> <a href='linkedin.com/in/minoo-khosravi-353523241'/>}>Connect with me<a href='linkedin.com/in/minoo-khosravi-353523241'></a></button> */}
                <a href='https://www.linkedin.com/in/minoo-khosravi-353523241'><button>Connect with Me</button></a>
            </div>
        </div>
      
    </div>
  )
}

export default Footer;
