import image1 from "../imgs/image1.png";
import arr from "../imgs/Vectorarr.png";
import "../css/Experience&Materials.css";
import "../css/arrow.css";
import "../css/gilroy.css";
function Experiance() {
  return (
    <>
      <div className="flex">
        <img src={image1} />
        <div className="back back1"></div>
        <div className="back back2"></div>
        <div className="textDiv">
          <h2>EXPERIENCES</h2>
          <h1>We Provide You The Best Experience</h1>
          <p>
            You don’t have to worry about the result because all of these
            interiors are made by people who are professionals in their fields
            with an elegant and lucurious style and with premium quality
            materials
          </p>
          <a href="/">
            More info <img src={arr} className="arrow" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Experiance;
