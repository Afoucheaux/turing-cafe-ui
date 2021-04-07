import React from 'react';
import './ResCards.css';

const ResCard = ({ name, date, time, number, id, key }) => {
  return (
    <article className="card">
      <h2 classname="name">{name}</h2>
      <p className="other-res-info">{date}</p>
      <p className="other-res-info">{time}</p>
      <p className="other-res-info">{`Number of guests ${number}`}</p>
      <button className="cancel">Cancel</button>
    </article>
  )
}

export default ResCard;
