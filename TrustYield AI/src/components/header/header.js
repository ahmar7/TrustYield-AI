import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Close, Logo, Menu } from "../../utils/allImgs";
import "./header.css";
const Header = () => {
  const [sideactive, setSideactive] = useState(false);
  const [class1, setClass1] = useState(true);
  const [class2, setClass2] = useState(false);
  const [class3, setClass3] = useState(false);
  const [class4, setClass4] = useState(false);
  const [class5, setClass5] = useState(false);
  const [class6, setClass6] = useState(false);
  const [class7, setClass7] = useState(false);
  const toggleBar = () => {
    setSideactive(true);
  };
  const closeBar = () => {
    setSideactive(false);
  };
  if (sideactive) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  let active1 = () => {
    setClass1(true);
    setClass2(false);
    setClass3(false);
    setClass4(false);
    setClass7(false);
    setClass5(false);
    setSideactive(false);
    setClass6(false);
  };
  let active2 = () => {
    setClass1(false);
    setClass2(true);
    setClass3(false);
    setClass4(false);
    setClass5(false);
    setClass7(false);
    setSideactive(false);
    setClass6(false);
  };
  let active3 = () => {
    setClass1(false);
    setClass2(false);
    setClass3(true);
    setClass4(false);
    setClass5(false);
    setClass7(false);
    setSideactive(false);
    setClass6(false);
  };
  let active4 = () => {
    setClass1(false);
    setClass2(false);
    setClass3(false);
    setClass4(true);
    setClass5(false);
    setSideactive(false);
    setClass7(false);
    setClass6(false);
  };
  let active5 = () => {
    setClass1(false);
    setClass2(false);
    setClass3(false);
    setClass4(false);
    setClass5(true);
    setSideactive(false);
    setClass7(false);
    setClass6(false);
  };
  let active6 = () => {
    setClass1(false);
    setClass2(false);
    setClass3(false);
    setClass4(false);
    setSideactive(false);
    setClass5(false);
    setClass6(true);
    setClass7(false);
  };
  let active7 = () => {
    setSideactive(false);
    setClass1(false);
    setClass2(false);
    setClass3(false);
    setClass4(false);
    setClass5(false);
    setClass6(false);
    setClass7(true);
  };
  return (
    <div className="">
      <div className="navbar-section">
        <div className="navbar-main">
          <div className="left-bar">
            <Link to="/">{/* <img src={Logo} alt="" /> */}</Link>
          </div>
          <div
            onClick={closeBar}
            className={sideactive ? " overlay " : "hide-it"}
          ></div>
          <div className="right-bar" id="navMain">
            <ul className={sideactive ? "modalup" : "hide-it"}>
              <li className="mobile-close">
                {/* <img onClick={closeBar} src={Close} alt="" /> */}
              </li>
              <li>
                <a
                  href="#"
                  onClick={active1}
                  className={class1 ? "active" : ""}
                >
                  Home
                  <span className="underline"></span>
                </a>
              </li>
              <li>
                <a
                  className={class2 ? "active" : ""}
                  href="#program"
                  onClick={active2}
                >
                  Our Program
                  <span className="underline"></span>
                </a>
              </li>
              <li>
                <a
                  className={class3 ? "active" : ""}
                  href="#mission"
                  onClick={active3}
                >
                  Mission
                  <span className="underline"></span>
                </a>
              </li>
              <li>
                <a
                  className={class4 ? "active" : ""}
                  href="#membership"
                  onClick={active4}
                >
                  Memberships
                  <span className="underline"></span>
                </a>
              </li>
              <li>
                <a
                  className={class5 ? "active" : ""}
                  href="#rewards"
                  onClick={active5}
                >
                  Rewards
                  <span className="underline"></span>
                </a>
              </li>
              <li>
                <a
                  className={class6 ? "active" : ""}
                  href="#benefits"
                  onClick={active6}
                >
                  Benefits
                  <span className="underline"></span>
                </a>
              </li>
              <li>
                <a
                  className={class7 ? "active" : ""}
                  href="#faq"
                  onClick={active7}
                >
                  FAQ
                  <span className="underline"></span>
                </a>
              </li>
              <li>
                <a
                  href="../../assets/doc/JayTradz-Brochure.pdf"
                  onClick={closeBar}
                >
                  Brochure
                  <span className="underline"></span>
                </a>
              </li>
              <li className="sign-btn">
                <Link>
                  <button>Sign in</button>
                </Link>
              </li>
            </ul>
            <div className="mobile-bar">
              {/* <img onClick={toggleBar} src={Menu} alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
