import React from 'react';
import { useTranslation } from 'react-i18next';
import PropType from 'prop-types';

const Portfolio = ({ name, x, y, angle }) => {
  // const initial_transform = `translate(${x}%, ${y}%) rotate(${angle}deg) scale(0.3)`;
  // const [transform, setTransform] = React.useState(initial_transform)
  // const [z, setZ] = React.useState(1)

  // function hover() {
  //   setTransform(`translate(${x}%, ${y}%) rotate(0deg) scale(0.4)`);
  //   setZ(2);
  // }

  // function leave() {
  //   setTransform(initial_transform);
  //   setZ(1);
  // }

  // onMouseOver={hover} onMouseLeave={leave}
  return (
    <img 
      src={`assets/images/portfolio/${"laura"}.png`} 
      alt={name} 
      style={{ 
        transform: `translate(-50%, -50%) rotate(${angle}deg) scale(0.3)`, 
        left: `${x}%`, 
        top: `${y}%` 
      }} 
    />
  )
}

Portfolio.propTypes = {
  name: PropType.string,
  x: PropType.number,
  y: PropType.number,
  angle: PropType.number
}

const Component = props => {
  const { t } = useTranslation();

  const names = ['laura1', 'laura2', 'laura3', 'laura4'];
  const properties = [];

  function getPosition (times = 0) {
    const x = 2 + Math.random() * 96;
    const y = 25 + Math.random() * 75;

    for (let point of properties) {
      const distance = Math.sqrt((point.x - x) ** 2 + (point.y - y) ** 2);
      if (distance < 10) {

        return getPosition(times++);
      }
    }

    return { x, y };
  }
  
  for (let i=0; i<names.length; i++) {
    const point = getPosition();
    const angle = -30 + Math.random() * 60;

    properties.push({ x: ~~point.x, y: ~~point.y, angle: ~~angle });
  }

  console.log('rerender')

  return (
    <section id="portfolio">
      <h2 className="section-heading">{t('portfolio.title')}</h2>
      <div className="collection">
        {names.map((name, index) => <Portfolio name={name} key={name} {...properties[index]} />)}
      </div>
    </section>
  )
}

// we need to memoize so it doesnt rerender on each update
export default React.memo(Component);