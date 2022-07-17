import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import AddProducts from "./pages/AddProducts";

// components
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faFacebookSquare,
  faTwitter,
  faInstagram,
  faLinkedin,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";

import {
  faClipboard,
  faUsers,
  faList,
  faDollarSign,
  faStar,
  faHome,
  faPhone,
  faEnvelope,
  faLocationPin,
} from "@fortawesome/free-solid-svg-icons";

// css file
import "./assets/css/styles.css";

library.add(
  faFacebookSquare,
  faTwitter,
  faInstagram,
  faLinkedin,
  faBehance,
  faClipboard,
  faUsers,
  faList,
  faDollarSign,
  faStar,
  faHome,
  faPhone,
  faEnvelope,
  faLocationPin
);

const Container = ({ children }) => {
  return <div className="container-fluid">{children}</div>;
};

const Main = ({ classes, children }) => {
  return <main className={`main main--dashboard${classes}`}>{children}</main>;
};

const App = () => {
  const [collapse, setCollapse] = useState(false);

  return (
    <React.Fragment>
      <Sidebar toggle={collapse} />

      <Main classes={`${collapse ? " show" : ""}`}>
        <Navbar toggle={collapse} click={setCollapse} />

        <Container>
          <Routes>
            <Route path="/" element={<Home />}></Route>

            <Route path="/products" element={<Products />}></Route>
            <Route
              path="/products/addproducts"
              element={<AddProducts />}
            ></Route>
          </Routes>
        </Container>

        <Footer />
      </Main>
    </React.Fragment>
  );
};

export default App;
