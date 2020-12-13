import React from 'react';
import { useTranslation } from 'react-i18next';

// UX imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Team = () => {
  const { t } = useTranslation();
  const members = [
    {
      name: t('team.members.0.name'),
      avatar: 'assets/images/team/diego.jpg',
      role: t('team.members.0.role'),
      links: [{url: '#', icon: faLinkedinIn }]
    },
    {
      name: t('team.members.1.name'),
      avatar: 'assets/images/team/biagio.jpg',
      role: t('team.members.1.role'),
      links: [{url: '#', icon: faLinkedinIn }]
    },
  ]

  return (
    <section id="team">
      <h2 className="section-heading">{t('team.title')}</h2>
      <p className="section-subheading text-muted" align="justify">{t('team.text')}</p>
      <Row noGutters>
        {members.map(({ name, role, avatar, links }) => (
          <Col key={name} xs={12 / members.length} className="member">
            <Image fluid src={avatar} roundedCircle />
            <h4 className="mt-3">{name}</h4>
            <p className="text-muted">{role}</p>
            <ul className="list-inline social-buttons">
              {links.map(({ url, icon }, index) => <li key={index}><a href="#"><FontAwesomeIcon icon={icon} /></a></li>)}
            </ul>
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default Team;