import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useContext } from "react";
import Slider from "react-slick";
import { TravelContext } from "../Context/TravelContext";
import { Link } from "react-router-dom";

const Packages = ({ items }) => {
  const { currency, navigate } = useContext(TravelContext);

  const settings = {
    dots: false,
    arrows: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="px-4 py-10">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="px-2"  >
            <Link to={`/package/${item._id}`}>
            <div
              className="h-64 bg-cover bg-center rounded-xl relative overflow-hidden cursor-pointer"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 flex items-end justify-center text-black text-center p-4">
                <div className="w-full bg-green-300/80 px-4 py-3 rounded-b-2xl">
                  <p className="text-xl sm:text-[22px] font-semibold tracking-wide leading-snug prata-regular">
                    {item.name}
                  </p>
                  <div className="flex justify-between text-sm sm:text-base font-medium mt-1 inter-regular">
                    <span>
                      {currency}
                      {item.price}
                    </span>
                    <span>For {item.duration}</span>
                  </div>
                </div>
              </div>
            </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Packages;
