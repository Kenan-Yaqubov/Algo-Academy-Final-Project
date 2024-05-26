import "../css/Navbar.css";

function Navbar() {
  return (
    <nav>
      <a href="/" id="logo">
        Panto
      </a>
      <div className="chooses">
        <a href="/" className="choose">
          Furniture <i class="fa-solid fa-chevron-down"></i>
        </a>
        <a href="/" className="choose">
          Shop
        </a>
        <a href="/" className="choose">
          About Us
        </a>
        <a href="/" className="choose">
          Contact
        </a>
      </div>
      <a href="/" id="basket">
        <i class="fa-solid fa-bag-shopping"></i>
      </a>
    </nav>
  );
}

export default Navbar;
