import "../../css/slideShow.css";
import Plus from "../../imgs/plus.png"

function SlideItem(props) {
    let {img, cost, name} = props
  return (
    <div className="slide-item">
      <img src={img} alt="Image 4" className="imageProduct"/>
      <p>Chair</p>
      <h2>{name}</h2>
      <div style={{ color: "orange" }}>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div>
      <h2 className="cost">
        <sup>$</sup>{cost}
      </h2>
      <img src={Plus}  className="plus"/>
    </div>
  );
}
export default SlideItem;
