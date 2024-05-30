import React from "react";
import '../css/App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import SlideShow from "./slideShow/slideShow";
import ExperianceAndMaterials from "./ExperienceAndMaterials/Experince&Materials";

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
