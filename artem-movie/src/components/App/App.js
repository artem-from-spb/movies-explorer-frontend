import "./App.css";
import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import NotFound from "../NotFoundPopup/NotFoundPopup";
import Register from "../Register/Register";
import Login from "../Login/Login";

function App() {
  return (
    <div>
      {/* <Header />
      <main>
        <Main />
      </main>
      <Footer />
      <NotFound /> */}
      <Register />
      <Login />
    </div>
  );
}

export default App;
