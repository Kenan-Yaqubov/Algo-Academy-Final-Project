import "../../css/Footer.css";
import facebook from '../../imgs/facebook.png'
import instagram from '../../imgs/instagram.png'
import twitter from '../../imgs/twitter.png'
function Footer() {
  return (
    <footer>
      <div className="FooterDiv">
        <div className="textFooterDiv">
          <h2>Panto</h2>
          <p>
            The advantage of hiring a workspace with us is that givees you
            comfortable service and all-around facilities.
          </p>
        </div>
        <div className="Lists">
          <ul type="none">
            <li className="heading">Services</li>
            <li className="lists" style={{display: "flex"}}>Email <span style={{marginLeft: 5}}> Marketing</span></li>
            <li className="lists">Campaigns</li>
            <li className="lists">Branding</li>
          </ul>
          <ul type="none">
            <li className="heading">Furniture</li>
            <li className="lists">Beds</li>
            <li className="lists">Chair</li>
            <li className="lists">All</li>
          </ul>
          <ul type="none">
            <li className="heading">Follow Us</li>
            <li className="lists"><img src={facebook}/> &nbsp; Facebook</li>
            <li className="lists"><img src={twitter}/> &nbsp; Twitter</li>
            <li className="lists"><img src={instagram}/> &nbsp; Instagram</li>
          </ul>
        </div>
      </div>
      <div className="Others">
        <p className="copyright">Copyright © 2021</p>
        <p className="termsPrivacy">Privacy Policy</p>
        <p className="termsPrivacy"  style={{position: "absolute", right: 350}}>Terms & Conditions</p>
      </div>
    </footer>
  );
}

export default Footer;
