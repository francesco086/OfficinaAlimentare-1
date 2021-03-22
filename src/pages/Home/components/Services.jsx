import React from "react";
import { useTranslation } from "react-i18next";

// UX imports
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Services = (props) => {
  const { t } = useTranslation();

  const data = [
    {
      image: "/assets/images/services/services1.svg",
      heading: t("service.product_development.title"),
      texts: t("service.product_development.texts", { returnObjects: true }),
    },
    {
      image: "/assets/images/services/services2.svg",
      heading: t("service.problem_solving.title"),
      texts: t("service.problem_solving.texts", { returnObjects: true }),
    },
    {
      image: "/assets/images/services/services3.svg",
      heading: t("service.quality_assurance.title"),
      texts: t("service.quality_assurance.texts", { returnObjects: true }),
    },
  ];

  return (
    <section id="service">
      <h2 className="section-heading">{t("service.title")}</h2>
      <p
        className="section-subheading text-muted"
        align="justify"
        dangerouslySetInnerHTML={{ __html: t("service.text") }}
      />

      <div className="box">
        {data.map(({ image, heading, texts }) => (
          <div className="service" key={heading}>
            <h4 className="service-heading">{heading}</h4>
            <div className="image-container">
              <Image fluid src={image} roundedCircle />
            </div>
            <p className="text-muted" align="justify">
              {texts.map((t, i) => (
                <span key={i}>
                  {t}
                  <br />
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

Services.propTypes = {};

export default Services;
