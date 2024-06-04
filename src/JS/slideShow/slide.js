import "../../css/slideShow.css";
import chair1 from "../../imgs/chair1.png";
import chair2 from "../../imgs/chair2.png";
import chair3 from "../../imgs/chair3.png";
import chair4 from "../../imgs/chair4.png";
import SlideItem from "./slide-item";
function Slide() {
  return (
    <div className="slide">
      <SlideItem img={chair1} cost="392" name="Sakarias Armchair"/>
      <SlideItem img={chair2} cost="299" name="Baltsar Chair"/>
      <SlideItem img={chair3} cost="519" name="Anjay Chair"/>
      <SlideItem img={chair4} cost="921" name="Nyantuy Chair"/>
    </div>
  );
}
export default Slide;
