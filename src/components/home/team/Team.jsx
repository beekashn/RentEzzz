import React from "react";
import Heading from "../../common/Heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { team } from "../../data/Data";
import "./team.css";

const Team = () => {
  const PrevArrow = (props) => {
    const { onClick } = props;
    return <button className="slick-prev" onClick={onClick}></button>;
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return <button className="slick-next" onClick={onClick}></button>;
  };

  const settings = {
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <section className="team background">
      <div className="container">
        <Heading
          title="Our Featured Agents"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        />

        <Slider {...settings}>
          {team.map((val, index) => (
            <div key={index}>
              <div className="box">
                <button className="btn3">{val.list} Listings</button>
                <div className="details">
                  <div className="img">
                    <img src={val.cover} alt="" />
                    <i className="fa-solid fa-circle-check"></i>
                  </div>
                  <i className="fa fa-location-dot"></i>
                  <label>{val.address}</label>
                  <h4>{val.name}</h4>

                  <ul>
                    {val.icon.map((icon, index) => (
                      <li key={index}>{icon}</li>
                    ))}
                  </ul>
                  <div className="button flex">
                    <button className="teamMsgButton">
                      <i className="fa fa-envelope"></i>
                      Message
                    </button>
                    <button className="btn4">
                      <i className="fa fa-phone-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Team;
