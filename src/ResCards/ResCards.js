import React from 'react';
import './ResCards.css';

const ResCard = () => {
  return (
    <article className="card">
      <h2 classname="name">Name</h2>
      <p className="other-res-info">date</p>
      <p className="other-res-info">time pm</p>
      <p className="other-res-info">{`Number of guests`}</p>
      <button className="cancel">Cancel</button>
    </article>
  )
}

export default ResCard;
