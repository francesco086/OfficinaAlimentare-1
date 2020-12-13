import React from 'react';
import { useTranslation } from 'react-i18next';

// direction can only be left | right 
const Timeline = ({ date, texts, direction="left", image }) => {

  return (
    <div className={`timeline ${direction}`}>
      <div className="date">
        <h4 className="circle-dash">{date}</h4>
      </div> 
      <div className="text">
        {texts.map((text, index) => <p key={index}>{text}</p>)}
      </div>
    </div>
  )
}

const Story = () => {
  const { t } = useTranslation();

  const data = [
    {
      date: 1998,
      texts: t('story.timelines.0', { returnObjects: true }),
    },
    {
      date: 2006,
      texts: t('story.timelines.1', { returnObjects: true }),
      direction: "right"
    },
    {
      date: 2018,
      texts: t('story.timelines.2', { returnObjects: true }),
    },
  ];

  return (
    <section id="story">
      <h2 className="section-heading">{t('story.title')}</h2>
      
      <div className="timelines">
        {data.map(d => <Timeline key={d.date} {...d} />)} 
      </div>
    </section>
  );
}

export default Story;