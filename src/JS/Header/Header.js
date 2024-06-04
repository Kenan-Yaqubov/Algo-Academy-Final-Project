import Navbar from "./Navbar";
import "../../css/Header.css";

function Header() {
  return (
    <div id="bgImg">
      <Navbar />
      <h1>Make Your Interior More Minimalistic & Modern</h1>
      <p>
        Turn your room with panto into a lot more minimalist and modern with
        ease and speed
      </p>
      <div className="input-container">
        <input type="text" placeholder="Search furniture" />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default Header;
