import React from 'react';
import './ResCards.css';

const ResCard = ({ name, date, time, number, id, key, cancelResy }) => {
  return (
    <article className="card" data-cy="card">
      <h2 classname="name" data-cy="name">{name}</h2>
      <p className="other-res-date" data-cy="date">{date}</p>
      <p className="other-res-time" data-cy="time">{time}</p>
      <p className="other-res-num" data-cy="number">{`Number of guests ${number}`}</p>
      <button className="cancel" data-cy="cancel" onClick={() => cancelResy(id)}>Cancel</button>
    </article>
  )
}

export default ResCard;
