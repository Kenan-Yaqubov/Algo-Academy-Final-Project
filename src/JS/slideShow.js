import React, { useState } from "react";

import arr from "../imgs/Vectorarr.png";
import "../css/slideShow.css";
import Slide from "./slide";

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
    /*Muellim boldums :)*/
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
          <Slide />
          <Slide />
          <Slide />
          <Slide />
        </div>
        <button className="prev" onClick={() => changeSlide(-1)}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button className="next" onClick={() => changeSlide(1)}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <a href="/">
        View All <img src={arr} className="arrow" />
      </a>
    </div>
  );
}

export default SlideShow;
