import "../../css/Main.css";
import arr from "../../imgs/Vectorarr.png";
import "../../css/arrow.css";

function WhyUs(props) {
    let {name = 'Header', text = 'random text'} = props
  return (
    <div className="whyUs">
      <h2>{name}</h2>
      <p>
        {text}
      </p>
      <a href="/">
        More info <img src={arr} className="arrow" />
      </a>
    </div>
  );
}

export default WhyUs;
