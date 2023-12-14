import { useState } from 'react'
import styles from './App.module.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
function Flight(props) {

  const [showPopup, setShowPopup] = useState(false);
  const [seats, setSeats] = useState(props.flight.seats);

  //handels the event of clicking on the flight
  function handleClick(){
    setShowPopup(true);
  };

  function closePopup(){
    setShowPopup(false);
  }

  function handleSeatSelection(){

  }

  function randomSeat(){

  }

  return (
    <article className={styles.flight} onClick={handleClick}>
          <div className={styles.departureHolder}>
            <img src='./src/public/plane-departure.svg' alt='A plane taking off'   />
            <h2>{props.flight.origin}</h2>
            <p>{props.flight.departureDateTime}</p>
          </div>
          <div className={styles.middleHolder}>
            <div className={styles.middleTextHolder}>
              <p>{props.flight.flightDuration}</p>
              <p>{props.flight.flightNumber}</p>
            </div>
            <p className={styles.flightbar}>---------------</p>
          </div>
          <div className={styles.arrivalHolder}>
            <img src='./src/public/plane-arrival.svg' alt='A plane landing'   />
            <h2>{props.flight.destination}</h2>
            <p>{props.flight.arrivalDateTime}</p>
          </div>

          <Popup open={showPopup} closeOnDocumentClick onClose={closePopup}>
            <div>
              <h1 className={styles.h1Popup}>Seat reservation</h1>
              <button onClick={randomSeat}>Pick a random seat</button>
              {/*The seat rendering part*/}

              <div className={styles.rows}>
                {seats.map((row, key) => (
                  <div key={key}>
                    {row.seats.map((seat, key) => (
                      <button onClick={handleSeatSelection}>{row.rowNumber}{seat.seatLetter}</button>
                    ))}
                  </div>
                ))}
              </div>

              <button>reserve</button>
            </div>
        </Popup>

      </article>
  )
}

export default Flight
