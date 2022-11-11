import React, { useEffect, useState } from "react";
import Slide from "./Slide";
import { slides } from "../../pages/Constants";

const Carousel = (props) => {
  const [timeduration] = useState(6000);
  const [play, setPlay] = useState(true);
  const [pos, setPos] = useState(0);
  const slidesrow = slides?.map((slide, i) => {
    return (
      <Slide
        className={`slide ${slide.class} ${
          pos % slides.length === i && "active"
        }`}
        slide={slide}
        pos={pos}
      />
    );
  });

  const [elap, setElap] = useState(0);
  useEffect(() => {
    setPos(0);
  }, []);
  useEffect(() => {
    let timer;
    let elap;
    if (play) {
      timer = setInterval(() => {
        setPos((prev) => prev + 1);
        setElap(0);
      }, timeduration);
      elap = setInterval(() => {
        setElap((prev) => prev + 1);
      }, 1);
    } else {
      clearInterval(timer);
      clearInterval(elap);
      setElap(0);
    }
    return () => {
      clearInterval(timer);
      clearInterval(elap);
      setElap(0);
    };
  }, [play, timeduration]);

  return (
    <div className="carouselbanner">
      <div className="slides">{slidesrow}</div>
    </div>
  );
};
export default Carousel;
