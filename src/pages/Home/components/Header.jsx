/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useTranslation } from "react-i18next";

import Slider from "components/Slider";
import Context from "../context";
import MainContext from "context";

const Nav = () => {
  const { t } = useTranslation("");
  const [uk, setUK] = React.useState(false);
  const [it, setIT] = React.useState(false);
  const [hamburger, setHamburger] = React.useState(false);
  const { language, setLanguage } = React.useContext(MainContext);
  const { passedHeader } = React.useContext(Context);
  const links = ["service", "team", "portfolio", "contact"];

  //flag
  function ukHover() {
    setUK(true);
  }
  function ukNoHover() {
    setUK(false);
  }
  function itHover() {
    setIT(true);
  }
  function itNoHover() {
    setIT(false);
  }
  //hamburger
  function toggleHamburger() {
    setHamburger(!hamburger);
  }

  return (
    <nav className={passedHeader ? ".passed" : ""}>
      <div className="title">
        <button className="hamburger" onClick={toggleHamburger}>
          <img src="assets/images/Logo.svg" alt="logo" />
          <span className={`icon-cross ${hamburger ? "" : "hide"}`} />
        </button>
        <h1>
          <a href="#" className="officina">
            {t("header.title")}
          </a>
        </h1>
      </div>
      <div className={`group ${hamburger ? "hamburger-open" : ""}`}>
        <div className="links">
          <ul>
            {links.map((link) => (
              <li key={link}>
                <a href={`#${link}`}>{t(`header.parts.${link}`)}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={`language ${language}`}>
          <span
            onClick={() => setLanguage("it")}
            onMouseOver={itHover}
            onMouseLeave={itNoHover}
          >
            <img src="assets/images/flags/IT BW.svg" alt="it" />
            {it && <img src="assets/images/flags/IT C.svg" alt="it-col" />}
          </span>
          <span
            onClick={() => setLanguage("en")}
            onMouseOver={ukHover}
            onMouseLeave={ukNoHover}
          >
            <img src="assets/images/flags/UK BW.svg" alt="uk" />
            {uk && <img src="assets/images/flags/UK C.svg" alt="uk-col" />}
          </span>
        </div>
      </div>
    </nav>
  );
};

// Header component
export default React.forwardRef((props, ref) => {
  return (
    <header ref={ref}>
      <Nav />
      <Slider
        source="assets/images/slider/source.svg"
        overlay="assets/images/slider/overlay.svg"
        logo="assets/images/Logo.svg"
      />
    </header>
  );
});
