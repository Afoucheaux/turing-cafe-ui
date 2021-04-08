import React from 'react';
import ResCard from '../ResCards/ResCards.js';
import './ResLayout.css';


const ResLayout = ( {reservations, cancelResy} ) => {
  const allRes = reservations.map(res => {
    console.log(res)
    return (
      <ResCard
        name={res.name}
        date={res.date}
        time={res.time}
        number={res.number}
        id={res.id}
        key={res.id}
        cancelResy={cancelResy}
      />
    )
  })
  return (
    <section className="res-layout">
      {allRes}
    </section>
  )
}

export default ResLayout;
