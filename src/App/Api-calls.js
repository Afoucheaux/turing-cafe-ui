const reservationsURL = 'http://localhost:3001/api/v1/reservations';

 const getReservations = () => {
  return fetch (reservationsURL)
    .then(response => response.json())
}

export default getReservations
