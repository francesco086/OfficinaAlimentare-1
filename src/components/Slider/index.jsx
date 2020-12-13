import React, { useEffect, useRef, useState } from 'react';
import PropType from 'prop-types';

const Slider = ({ source, overlay, width, height }) => {

  const clickedRef = useRef(0);
  const imageCountRef = useRef(0);
  const overlayRef = useRef(null);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  const [size, setSize] = useState({ x: 0, h: 0 });
  const [sliderStyles, setSliderStyles] = useState({});
  const [sliderClasses, setSliderClasses] = useState('slider-mover');
  const [overlayStyles, setOverlayStyles] = useState({
    width: '50%'
  });

  useEffect(() => {
    window.addEventListener("mousemove", slideMove);
    window.addEventListener("touchmove", slideMove);
    window.addEventListener("mouseup", slideFinish);
    window.addEventListener("touchend", slideFinish);

    return () => {
      window.removeEventListener("mousemove", slideMove);
      window.removeEventListener("touchmove", slideMove);
      window.removeEventListener("mouseup", slideFinish);
      window.removeEventListener("touchend", slideFinish);
    }
  }, []);

  function imageLoad(e) {
    if (imageCountRef.current === 1) { // 2nd is loaded
      const w = containerRef.current.offsetWidth;
      const h = containerRef.current.offsetHeight;

      setSize({ w, h });
      /* Position the slider in the middle: */

      setSliderStyles({
        top: (h / 2) + "px",
        left: ((w / 2) - (sliderRef.current.offsetWidth / 2)) + "px"
      });
    }
    else imageCountRef.current++;
  }

  function slideMove(e) {
    /* If the slider is no longer clicked, exit this function: */
    if (clickedRef.current == 0) return false;
    /* Get the cursor's x position: */
    let pos = getPos(e);
    /* Prevent the slider from being positioned outside the image: */
    if (pos < 0) pos = 0;
    if (pos > size.w) pos = size.w;
    /* Execute a function that will resize the overlay image according to the cursor: */
    slide(pos);
  }

  function slideFinish() {
    /* The slider is no longer clicked: */
    clickedRef.current = 0;
    setSliderClasses('slider-mover');
  }
  function slideReady(e) {
    /* Prevent any other actions that may occur when moving over the image: */
    e.preventDefault();
    /* The slider is now clicked and ready to move: */
    clickedRef.current = 1;
    /* Execute a function when the slider is moved: */
    setSliderClasses('slider-mover clicked');
  }

  function getPos(e) {
    let a, x = 0;
    e = e || window.event;
    /* Get the x positions of the image: */
    a = overlayRef.current.getBoundingClientRect();
    /* Calculate the cursor's x coordinate, relative to the image: */
    x = e.pageX - a.left;
    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    return x;
  }

  function slide(x) {
    /* Resize the image: */
    setOverlayStyles({width: x });
    /* Position the slider: */
    setSliderStyles({ left: x - (sliderRef.current.offsetWidth / 2) });
  }
  
  return (
    <div className="slider-container" ref={containerRef}>
      <div className="slider-image">
        <img src={source} onLoad={imageLoad} />
      </div>
      <div onTouchStart={slideReady} ref={sliderRef} onMouseDown={slideReady} className={sliderClasses} style={sliderStyles}></div>
      <div className="slider-image slider-overlay" style={overlayStyles} ref={overlayRef}>
        <img src={overlay} onLoad={imageLoad} />
      </div>
    </div>
  )
}

Slider.propTypes = {
  source: PropType.string.isRequired,
  overlay: PropType.string.isRequired,
  width: PropType.oneOfType([PropType.number, PropType.string]),
  height: PropType.oneOfType([PropType.number, PropType.string]),
};

export default Slider;

