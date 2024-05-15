import React, { useState, useEffect } from "react";
import { list } from "../../data/Data";
import "../recent/recent.css";

const RecentCard = () => {
  const [clickedIndexes, setClickedIndexes] = useState(() => {
    const storedIndexes = localStorage.getItem("clickedIndexes");
    return storedIndexes ? JSON.parse(storedIndexes) : [];
  });

  useEffect(() => {
    localStorage.setItem("clickedIndexes", JSON.stringify(clickedIndexes));
  }, [clickedIndexes]);

  const handleHeartClick = (index) => {
    if (clickedIndexes.includes(index)) {
      setClickedIndexes(clickedIndexes.filter((item) => item !== index));
    } else {
      setClickedIndexes([...clickedIndexes, index]);
    }
  };

  return (
    <>
      <div className="content grid3 mtop">
        {list.map((val, index) => {
          const { cover, category, location, name, price, type } = val;
          const isHeartClicked = clickedIndexes.includes(index);
          return (
            <div className="box shadow" key={index}>
              <div className="img">
                <img className="recentImg" src={cover} alt="" />
              </div>
              <div className="text">
                <div className="category flex">
                  <span
                    style={{
                      background:
                        category === "For Sale" ? "#25b5791a" : "#ff98001a",
                      color: category === "For Sale" ? "#25b579" : "#ff9800",
                    }}
                  >
                    {category}
                  </span>
                  <i
                    className={`fa fa-heart cardHeart ${
                      isHeartClicked ? "clicked" : ""
                    }`}
                    onClick={() => handleHeartClick(index)}
                  ></i>
                </div>
                <h4>{name}</h4>
                <span>{type}</span>
                <p>
                  <i className="fa fa-location-dot"></i> {location}
                </p>
              </div>
              <div className="button flex">
                <div>
                  <button className="btn2">{price}</button>{" "}
                  <label htmlFor="">/sqft feet</label>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecentCard;
