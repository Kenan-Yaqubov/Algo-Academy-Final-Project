import star from "../../imgs/star.png";
import starLight from "../../imgs/starLight.png";
import "../../css/Client.css";

function Client(props) {
  let {
    bgImg,
    avatar,
    name = "User Name",
    article = "IDK what to write",
    text = "Not found text",
  } = props;
  return (
    <div className="clientMain">
      <img src={bgImg} />
      <div className="clientText">
        <img src={avatar} className="avatar" />
        <h3>{name}</h3>
        <p className="paraqraph">{article}</p>
        <p className="text">{text}</p>
        <div className="stars">
          <img src={star} className="star" />
          <img src={star} className="star" />
          <img src={star} className="star" />
          <img src={star} className="star" />
          <img src={starLight} className="star" />
        </div>
      </div>
    </div>
  );
}

export default Client;
