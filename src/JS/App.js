import React from "react";
import '../css/App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import SlideShow from "./slideShow/slideShow";
import ExperianceAndMaterials from "./ExperienceAndMaterials/Experince&Materials";
import ClientsReview from "./ClientsReview/ClientsReview";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Main />
      <SlideShow />
      <ExperianceAndMaterials />
      <ClientsReview />
      <Footer />
    </>
  );
}

export default App;
