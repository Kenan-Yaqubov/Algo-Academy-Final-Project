import "../../css/slideShow.css";
import chair1 from "../../imgs/chair1.png";
import chair2 from "../../imgs/chair2.png";
import chair3 from "../../imgs/chair3.png";
import chair4 from "../../imgs/chair4.png";
function Slide() {
  return (
    <div className="slide">
      <div className="slide-item">
        <img src={chair1} alt="Image 1" />
        <p>Chair 1</p>
        <h2>Sakarias armchair</h2>
        <div style={{ color: "orange" }}>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <h2 className="cost">
          <sup>$</sup>299
        </h2>
      </div>
      <div className="slide-item">
        <img src={chair2} alt="Image 2" />
        <p>Chair</p>
        <h2>Sakarias armchair</h2>
        <div style={{ color: "orange" }}>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <h2 className="cost">
          <sup>$</sup>299
        </h2>
      </div>
      <div className="slide-item">
        <img src={chair3} alt="Image 3" />
        <p>Chair</p>
        <h2>Sakarias armchair</h2>
        <div style={{ color: "orange" }}>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <h2 className="cost">
          <sup>$</sup>299
        </h2>
      </div>
      <div className="slide-item">
        <img src={chair4} alt="Image 4" />
        <p>Chair</p>
        <h2>Sakarias armchair</h2>
        <div style={{ color: "orange" }}>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <h2 className="cost">
          <sup>$</sup>299
        </h2>
      </div>
    </div>
  );
}
export default Slide;
