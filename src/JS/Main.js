import "../css/Main.css";

function Main() {
  return (
    <div id="flexDiv">
      <div style={{width: 700}}>
        <h1>Why Choosing Us</h1>
      </div>
      <div className="whyUs">
        <h2>Luxury facilities</h2>
        <p>
          The advantage of hiring a workspace with us that gives you comfortable
          service and all-around facilites
        </p>
        <a href="/">
          More info <i class="fa-solid fa-arrow-right-long"></i>
        </a>
      </div>
      <div className="whyUs">
        <h2>Affordable Price</h2>
        <p>
          You can get a workspace of the highest quality at an affordable price
          and still enjoy the facilities that are oly here.
        </p>
        <a href="/">
          More info <i class="fa-solid fa-arrow-right-long"></i>
        </a>
      </div>
      <div className="whyUs">
        <h2>Many Choices</h2>
        <p>
          We provide many unique work space choices so that you can choose the
          workspace to your liking.
        </p>
        <a href="/">
          More info <i class="fa-solid fa-arrow-right-long"></i>
        </a>
      </div>
    </div>
  );
}

export default Main;
