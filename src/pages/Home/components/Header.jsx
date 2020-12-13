import React from 'react';
import { useTranslation } from 'react-i18next';

import Slider from 'components/Slider';
import Context from '../context';
import MainContext from 'context';

const Nav = () => {
  const { t } = useTranslation("");
  const { language, setLanguage } = React.useContext(MainContext);
  const { passedHeader } = React.useContext(Context);
  const links = ["service", "team", "portfolio", "contact"];

  return (
    <nav className={passedHeader ? 'passed' : ''}>
      <div className="title">
        <h1><a href="#" className="officina">{t('header.title')}</a></h1>
      </div>
      <div className="links">
        <ul>
          {links.map(link => <li key={link}><a href={`#${link}`}>{t(`header.parts.${link}`)}</a></li>)}
        </ul>
      </div>
      <div className={`language ${language}`}>
        <span onClick={() => setLanguage('it')}>🇮🇹</span>
        <span onClick={() => setLanguage('en')}>🇬🇧</span>
      </div>
    </nav>
  )
}

// Header component
export default React.forwardRef((props, ref) => {
  return (
    <header ref={ref}>
      <Nav />
      <Slider source="assets/images/slider/source.png" overlay="assets/images/slider/overlay.png" />
    </header>
  )
});
