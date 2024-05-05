import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} absolute top-1/2 z-10 left-0 transform -translate-y-1/2 cursor-pointer`}
        style={{ ...style, left: "15px" }}
        onClick={onClick}
      ></div>
    );
  };

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} absolute top-1/2 z-10 right-0 transform -translate-y-1/2 cursor-pointer`}
        style={{ ...style, right: "15px" }}
        onClick={onClick}
      ></div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true, // Aktifkan fitur autoplay
    autoplaySpeed: 3000, // Set durasi slide (ms)
    centerPadding: "0px",
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 768, // at screen width >= 768px
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, // at screen width >= 1024px
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1280, // at screen width >= 1280px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <Slider {...settings} className="w-full">
        <div>
          <div className="relative h-full">
            <img
              src="https://photo-cms-vovworld.zadn.vn/w500/uploaded/vovworld/pcwvobzi/2012_07_15/tb-6.jpg"
              alt="Slide 1"
              className="w-full h-full object-cover"
              style={{ objectFit: "cover" }}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
            <div className="absolute top-1/2 left-0 w-full text-center text-white font-bold z-10">
              <div className="text-6xl">SELAMAT DATANG</div>
              <div className="text-2xl">
                Webiste resmi didesa teuing naon
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative h-full">
            <img
              src="https://indoprogress.com/wp-content/uploads/2020/07/Bengkulu-1.jpg"
              alt="Slide 2"
              className="w-full h-full object-cover"
              style={{ objectFit: "cover" }}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
            <div className="absolute top-1/2 left-0 w-full text-center text-white font-bold text-3xl z-10">
              Slide 2
            </div>
          </div>
        </div>
        {/* Add additional slides here if needed */}
      </Slider>
    </div>
  );
};

export default Carousel;
