import React from "react";
import star from "./img/Star 1.png";
export default function Card(props) {
  console.log(props.openSpots);
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.openSpots >= 1) {
    badgeText = "Online";
  }
  return (
    <div className="Card--section">
      <div className="card-badge"> {badgeText}</div>
      <img src={`${props.coverImg}`} className="card-image" alt={props.title} />
      <div className="card-component">
        <img src={star} alt="" className="star" />
        <p className="rating">{props.stats.rating}</p>
        <p className="num">({props.stats.reviewCount})</p>
        <span className="hyphen">-</span>
        <p className="country">{props.location}</p>
      </div>
      <p className="text">{props.title}</p>
      <p className="price">
        From ${props.price} <span className="light">/ person</span>
      </p>
    </div>
  );
}
