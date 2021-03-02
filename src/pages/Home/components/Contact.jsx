import React from "react";
import { useTranslation } from "react-i18next";

// UX imports
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact">
      <h2 className="section-heading">{t("contact.title")}</h2>
      <p className="section-subheading"> </p>

      <Form>
        <Form.Group controlId="name">
          <Form.Label>{t("contact.name")}</Form.Label>
          <Form.Control name="name" type="text" />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>{t("contact.email")}</Form.Label>
          <Form.Control name="email" type="email" />
        </Form.Group>
        <Form.Group controlId="message">
          <Form.Label>{t("contact.message")}</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">
          {t("contact.submit")}
        </Button>
      </Form>
    </section>
  );
};

export default Contact;
