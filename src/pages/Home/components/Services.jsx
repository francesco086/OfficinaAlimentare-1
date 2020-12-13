import React from 'react';
import PropType from 'prop-types';
import { useTranslation } from 'react-i18next';

// UX imports
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Services = props => {
  const { t } = useTranslation();

  const data = [
    {
      image: 'assets/images/services/center.jpg',
      heading: t('service.product_development.title'),
      texts: t('service.product_development.texts', { returnObjects: true })
    },
    {
      image: 'assets/images/services/circular.jpg',
      heading: t('service.problem_solving.title'),
      texts: t('service.problem_solving.texts', { returnObjects: true })
    },
    {
      image: 'assets/images/services/arrowUp.jpg',
      heading: t('service.quality_assurance.title'),
      texts: t('service.quality_assurance.texts', { returnObjects: true })
    },
  ];

  return (
    <section id="service">
      <h2 className="section-heading">{t('service.title')}</h2>
      <p 
        className="section-subheading text-muted" 
        align="justify" 
        dangerouslySetInnerHTML={{__html: t('service.text')}}
      />

      <Row>
        {data.map(({ image, heading, texts }) => (
          <Col className="service" key={heading} xs={12 / data.length}>
            <Image fluid src={image} roundedCircle />
            <h4 className="service-heading">{heading}</h4>
            <p className="text-muted" align="justify">{texts.map((t, i) => <span key={i}>{t}<br/></span>)}</p>
          </Col>
        ))}
      </Row>
    </section>
  )
}

Services.propTypes = {

}

export default Services;