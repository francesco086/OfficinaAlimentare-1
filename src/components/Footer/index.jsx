/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <img src="/assets/images/footer.svg" alt="footer image" />
      <section className="upper">
        <div>
          <h4>{t("footer.title")}</h4>
          <p>{t("footer.texts.0")}</p>
          <p>{t("footer.texts.1")}</p>
        </div>
        <div>
          <h4>{t("footer.contact")}</h4>
          <p>
            <a href={`mailto:${t("footer.email.raw")}`}>
              {t("footer.email.displayed")}
            </a>
          </p>
          <p>
            <a href={`tel:${t("footer.tel.raw")}`}>
              {t("footer.tel.displayed")}
            </a>
          </p>
        </div>
      </section>
      <section className="lower">
        <em>{t("footer.copyright")}</em>
      </section>
    </footer>
  );
};

export default Footer;
