import styles from './App.module.css';

function Flight(props) {

  return (
    <div className={styles.flight}>
      <div>
        <img src='./src/public/plane-departure.svg' alt='A plane taking off'   />
        <h2>{props.flight.origin}</h2>
      </div>
      <div>
        <p>{props.flight.flightDuration}</p>
        <p>{props.flight.flightNumber}</p>
        <p className={styles.flightbar}>--------------------</p>
      </div>
      <div>
        <img src='./src/public/plane-arrival.svg' alt='A plane landing'   />
        <h2>{props.flight.destination}</h2>
      </div>
    </div>
  )
}

export default Flight
