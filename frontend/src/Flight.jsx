import styles from './App.module.css';

function Flight(props) {

  return (
    <div className={styles.flight}>
      <h2>{props.flight.origin}</h2>
      <p>{props.flightDuration}</p>
      <h2>{props.flight.destination}</h2>
    </div>
  )
}

export default Flight
