import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Slide = (props) => {
  const { title, subtitle, img, img2 } = props.slide;
  const { className } = props;

  return (
    <div className={className}>
      {img2 && (
        <div className="img2">
          <img src={img2} alt="" />
        </div>
      )}
      <div className="slidecont">
        <div className="slidetitles">
          <h3>{subtitle}</h3>
          <h1>{title}</h1>
        </div>
        <div>
          <a>
            <Link href="/">Shop now</Link>
          </a>
        </div>
      </div>
      <img src={img} alt="" />
    </div>
  );
};
export default Slide;
