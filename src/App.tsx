import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import ModalError from "./Components/Modal/ModalError";

const App = () => {

  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
      <ModalError />
    </div>
  );
}

export default App;
