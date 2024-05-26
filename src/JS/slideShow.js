import React, { useState } from "react";
import chair1 from "../imgs/chair1.png";
import chair2 from "../imgs/chair2.png";
import chair3 from "../imgs/chair3.png";
import chair4 from "../imgs/chair4.png";
import "../css/slideShow.css";

function SlideShow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentId, setCurrentId] = useState(1);
  const [activeButton, setActiveButton] = useState(1);

  function changeSlide(n) {
    const totalSlides = document.querySelectorAll(".slide").length;
    const newSlide = (currentSlide + n + totalSlides) % totalSlides;
    setCurrentSlide(newSlide);
  }

  function btnSliderFn(e) {
    const newId = parseInt(e.target.getAttribute("data-id"), 10);
    const prevId = currentId;
    setCurrentId(newId);
    setActiveButton(newId);
    changeSlide(newId - prevId);
  }

  return (
    <div style={{ backgroundColor: "whitesmoke" }} className="main">
      <h1
        style={{
          textAlign: "center",
          fontFamily: "open sans",
          fontSize: 38,
          padding: 50,
          fontWeight: 700,
        }}
      >
        Best Selling Product
      </h1>
      <div className="slider-btn">
        <button
          type="button"
          onClick={btnSliderFn}
          style={{ backgroundColor: activeButton === 1 ? "white" : "" }}
          data-id="1"
        >
          Chair
        </button>
        <button
          type="button"
          onClick={btnSliderFn}
          style={{ backgroundColor: activeButton === 2 ? "white" : "" }}
          data-id="2"
        >
          Bed
        </button>
        <button
          type="button"
          onClick={btnSliderFn}
          style={{ backgroundColor: activeButton === 3 ? "white" : "" }}
          data-id="3"
        >
          Sofa
        </button>
        <button
          type="button"
          onClick={btnSliderFn}
          style={{ backgroundColor: activeButton === 4 ? "white" : "" }}
          data-id="4"
        >
          Lamp
        </button>
      </div>
      <div className="slider">
        <div
          className="slides"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
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
          </div>{" "}
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
          </div>{" "}
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
                <sup>$</sup>392
              </h2>
            </div>
          </div>
        </div>
        <button className="prev" onClick={() => changeSlide(-1)}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button className="next" onClick={() => changeSlide(1)}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <a href="/">
        View All <i class="fa-solid fa-arrow-right-long"></i>
      </a>
    </div>
  );
}

export default SlideShow;
