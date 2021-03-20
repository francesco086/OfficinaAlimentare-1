/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { useTranslation } from "react-i18next";
import PropType from "prop-types";

const names = [
  "Art A&amp_B Infestanti",
  "Art TA Gelato",
  "Art TA Tecnologo Alim",
  "Conv CaffÇ Firenze",
  "Conv SANA 2017",
  "Conv SANA",
  "Convegn Spreco",
  "Convegno celebrativo 40 anni Cso Dietologia PV",
  "Corso Gest Allerte",
  "Cso Medicina Univ Cattolica Roma",
  "Giornale Ilo-Ilo Filippine",
  "Laboratorio del gusto Gorgonzola",
  "Laboratorio del gusto Inzago",
  "Laboratorio del gusto Melzo",
  "Laboratorio del gusto Trezzo",
  "Laboratorio del gusto Trezzo2",
  "Laboratorio del gusto",
  "Programma Tutti nello stesso piatto",
  "Quotidiano Sikkim (India)",
  "Seminario Univ Udine",
];

const Portfolio = ({ name, x, y, angle }) => (
  <a
    href={`assets/documents/portfolio/${name}.pdf`}
    target="_blank"
    style={{
      transform: `translate(-50%, -50%) scale(1) rotate(${angle}deg)`,
      left: `${x}%`,
      top: `${y}%`,
    }}
  >
    <img src={`assets/images/portfolio/${name}.png`} alt={name} />
  </a>
);

Portfolio.propTypes = {
  name: PropType.string,
  x: PropType.number,
  y: PropType.number,
  angle: PropType.number,
};

const Component = (props) => {
  const { t } = useTranslation();

  const properties = [];

  function getPosition(times = 0) {
    const x = Math.random() * 100;
    const y = 25 + Math.random() * 75;

    for (let point of properties) {
      const distance = Math.sqrt((point.x - x) ** 2 + (point.y - y) ** 2);
      if (distance < 10) {
        return getPosition(times++);
      }
    }

    return { x, y };
  }

  for (let i = 0; i < names.length; i++) {
    const point = getPosition();
    const angle = -30 + Math.random() * 60;

    properties.push({ x: ~~point.x, y: ~~point.y, angle: ~~angle });
  }

  // console.log("rerender");

  return (
    <section id="portfolio">
      <h2 className="section-heading">{t("portfolio.title")}</h2>

      <div className="collection">
        {names.map((name, index) => (
          <Portfolio name={name} key={name} {...properties[index]} />
        ))}
      </div>
    </section>
  );
};

// we need to memoize so it doesnt rerender on each update
export default React.memo(Component);
