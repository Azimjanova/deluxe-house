import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderComponent.css";

const slide1 =
  "https://static.tildacdn.pro/tild6338-3934-4465-a339-343038623832/image.png";
const slide2 =
  "https://static.tildacdn.pro/tild3962-6332-4064-a634-343965333934/image.png";
const slide3 =
  "https://static.tildacdn.pro/tild3437-3463-4661-b633-323430316134/image.png";
const slide4 =
  "https://static.tildacdn.pro/tild6362-3432-4237-b232-616562623331/image.png";
const slide5 =
  "https://static.tildacdn.pro/tild3333-3062-4465-b832-346637626538/image.png";

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="slider-container">
      <p className="slider-top-text">
        Мы предоставляем гарантию <strong>1 ГОД</strong> на свои услуги, -
        гарантийное, а также постгарантийное обслуживание.
      </p>

      <Slider {...settings}>
        <div>
          <img src={slide1} alt="Slide 1" className="slider-img" />
        </div>
        <div>
          <img src={slide2} alt="Slide 2" className="slider-img" />
        </div>
        <div>
          <img src={slide3} alt="Slide 3" className="slider-img" />
        </div>
        <div>
          <img src={slide4} alt="Slide 4" className="slider-img" />
        </div>
        <div>
          <img src={slide5} alt="Slide 5" className="slider-img" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
