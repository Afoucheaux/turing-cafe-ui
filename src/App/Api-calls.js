const reservationsURL = 'http://localhost:3001/api/v1/reservations';

export const getReservations = () => {
  return fetch (reservationsURL)
    .then(response => response.json())
}

export const postReservation = (newResy) => {
  return fetch(reservationsURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newResy)
  })
  .then(response => response.json())
}

export const deleteReservation = (id) => {
  return fetch(`${reservationsURL}/${id}`)
}
