import image2 from "../../imgs/chiars.png";
import image3 from "../../imgs/chairs2.png";
import arr from "../../imgs/Vectorarr.png";
import image4 from "../../imgs/sofa.png";
import "../../css/Experience&Materials.css";
import "../../css/arrow.css";
import "../../css/gilroy.css";
function Materials() {
  return (
    <>
      <div className="flex" style={{marginTop: 300}}>
        <div className="textDiv materialsText">
          <h2>MATERIALS</h2>
          <h1>Very Serious Materials For Making Furniture</h1>
          <p>
            Because panto was very serious about designing furniture for our
            environment, using a very expensive and famous capital but at a
            relatively low price
          </p>
          <a href="/">More info </a>
          <img src={arr} className="arrow" />
        </div>
        <div className="imgs">
          <img src={image3} id="chairs" style={{ marginRight: 40 }} />
          <div className="flex2">
            <img src={image4} id="sofa" style={{ marginRight: 40 }} />
            <img src={image2} id="notSofa" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Materials;
