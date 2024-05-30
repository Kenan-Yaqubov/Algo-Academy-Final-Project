import "../../css/Main.css";
import arr from "../../imgs/Vectorarr.png";
import "../../css/arrow.css";
import WhyUs from "./whyUs";

function Main() {
  return (
    <div id="flexDiv">
      <div style={{ width: 700 }}>
        <h1>Why Choosing Us</h1>
      </div>
      <WhyUs
        name="Luxury facilities"
        text="The advantage of hiring a workspace with us that gives you comfortable service and all-around facilites"
      />
      <WhyUs
        name="Affordable Price"
        text="You can get a workspace of the highest quality at an affordable price and still enjoy the facilities that are oly here."
      />
      <WhyUs
        name="Many Choices"
        text="We provide many unique work space choices so that you can choose the workspace to your liking."
      />
    </div>
  );
}

export default Main;
