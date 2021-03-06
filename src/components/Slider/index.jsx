/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState } from "react";
import PropType from "prop-types";

const Slider = ({ source, overlay, logo }) => {
  const clickedRef = useRef(0);
  const imageCountRef = useRef(0);
  const overlayRef = useRef(null);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  const sourceRef = useRef(null);
  const offsetRef = useRef(0);
  const pageXREF = useRef(0);

  const [sliderStyles, setSliderStyles] = useState({});
  const [sliderClasses, setSliderClasses] = useState("slider-mover");
  const [overlayStyles, setOverlayStyles] = useState({
    width: "calc(50% + 3px)",
    left: 0,
  });

  const [sourceStyles, setSourceStyles] = useState({ left: 0 });

  useEffect(() => {
    window.addEventListener("mousemove", slideMove);
    window.addEventListener("touchmove", slideMove);
    window.addEventListener("mouseup", slideFinish);
    window.addEventListener("touchend", slideFinish);
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("mousemove", slideMove);
      window.removeEventListener("touchmove", slideMove);
      window.removeEventListener("mouseup", slideFinish);
      window.removeEventListener("touchend", slideFinish);
      window.removeEventListener("resize", resize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function resize(e) {
    // calculate new offset
    const main_w = containerRef.current.offsetWidth;
    const main_h = containerRef.current.offsetHeight;

    const img_w = sourceRef.current.offsetWidth;
    const img_h = sourceRef.current.offsetHeight;

    offsetRef.current = {
      x: (main_w - img_w) / 2,
      y: (main_h - img_h) / 2,
    };

    /* Position the slider in the middle: */

    setSliderStyles({
      top: main_h / 2 + "px",
      left:
        offsetRef.current.x +
        main_w / 2 -
        sliderRef.current.offsetWidth / 2 +
        3 +
        "px",
    });

    clickedRef.current = 1;
    slideMove(main_w / 2 - offsetRef.current.x);
    clickedRef.current = 0;
    setSourceStyles({ left: `${offsetRef.current.x}px` });
  }

  function imageLoad(e) {
    if (imageCountRef.current === 2) {
      // 3rd is loaded
      resize();
    } else imageCountRef.current++;
  }

  function slideMove(e) {
    /* If the slider is not longer clicked, exit this function: */
    if (clickedRef.current === 0) return false;
    /* Get the cursor's x position: */
    let pos = typeof e === "number" ? e : getPos(e);
    /* Prevent the slider from being positioned outside the image: */
    if (pos < 6) pos = 6;

    if (pos > sourceRef.current.offsetWidth)
      pos = sourceRef.current.offsetWidth;
    /* Execute a function that will resize the overlay image according to the cursor: */
    slide(pos);
  }

  function slideFinish() {
    /* The slider is no longer clicked: */
    clickedRef.current = 0;
    setSliderClasses("slider-mover");
  }
  function slideReady(e) {
    /* Prevent any other actions that may occur when moving over the image: */
    e.preventDefault();
    /* The slider is now clicked and ready to move: */
    clickedRef.current = 1;
    /* Execute a function when the slider is moved: */
    setSliderClasses("slider-mover clicked");
  }

  function getPos(e) {
    let a,
      x = 0;
    e = e || window.event;
    pageXREF.current = e.pageX;
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
    setOverlayStyles({ width: x, left: `${offsetRef.current.x}px` });
    /* Position the slider: */
    setSliderStyles({
      left: offsetRef.current.x + x - sliderRef.current.offsetWidth / 2,
    });
  }

  return (
    <div className="slider-container" ref={containerRef}>
      <div className="slider-image" style={sourceStyles}>
        <img src={source} alt="slider" ref={sourceRef} onLoad={imageLoad} />
      </div>
      <div
        onTouchStart={slideReady}
        ref={sliderRef}
        onMouseDown={slideReady}
        className={sliderClasses}
        style={sliderStyles}
      >
        <img src={logo} alt="grapple" onLoad={imageLoad} />
      </div>
      <div
        className="slider-image slider-overlay"
        style={overlayStyles}
        ref={overlayRef}
      >
        <img src={overlay} alt="overlay" onLoad={imageLoad} />
      </div>
    </div>
  );
};

Slider.propTypes = {
  source: PropType.string.isRequired,
  overlay: PropType.string.isRequired,
  logo: PropType.string.isRequired,
};

export default Slider;
