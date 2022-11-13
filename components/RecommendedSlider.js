import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import { useQuery } from "urql";
import { PRODUCT_QUERY } from "../lib/query";

import { RelatedItem, Button } from "../styles/RecommendedSliderStyle";
import RecommendedCart from "./RecommendedCart";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const RecommendedSlider = () => {
  const [Data] = useQuery({ query: PRODUCT_QUERY });
  const { data, fetching, error } = Data;
  const sliderRef = useRef(null);

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no...{error.message}</p>;

  const products = data.products.data;

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    centerMode: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <RelatedItem>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h2 style={{ fontStyle: "italic" }}>Related Products</h2>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Button
            className="buttons"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <BsChevronLeft />
          </Button>
          <Button
            className="buttons"
            onClick={() => sliderRef.current.slickNext()}
          >
            <BsChevronRight />
          </Button>
        </div>
      </div>
      <Slider {...settings} ref={sliderRef}>
        {products.slice(0, 6).map((item) => (
          <RecommendedCart key={item.attributes.slug} item={item} />
        ))}
      </Slider>
    </RelatedItem>
  );
};

export default RecommendedSlider;
