import React from 'react';
import ResCard from '../ResCards/ResCards.js';
import './ResLayout.css'

const ResLayout = ( {reservations} ) => {
  const allRes = reservations.map(res => {
    console.log(reservations)
    return (
      <ResCard
        name={reservations.name}
        date={reservations.date}
        time={reservations.time}
        number={reservations.number}
        id={reservations.id}
        key={reservations.id}
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
