import React from "react";
import '../css/App.css';
import Header from "./Header";
import Main from "./Main";
import SlideShow from "./slideShow";
import ExperianceAndMaterials from "./Experince&Materials";

function App() {
  return (
    <>
      <Header />
      <Main />
      <SlideShow />
      <ExperianceAndMaterials />
    </>
  );
}

export default App;
