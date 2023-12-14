//importejam vissas vajadzgs lietas
import { useState,useEffect } from 'react'
import axios from 'axios';
import Flight from './Flight.jsx'
import styles from './App.module.css';

const API = 'https://tu.proti.lv/flights/';

function App() {
  const [data , setData] = useState([]);
  const [loading, setLoading] = useState(true);

  //dabu datus no api
  useEffect(() => {
    try {
      fetch(API)
    .then(response => response.json())
    .then(data => setData(data))
    .then(setLoading(false))
    } catch (error) {
      console.error(error)
    }
  },[])

  console.log(data);

  const flightsJSX = data.map((flight , key)=>{
    return <Flight flight={flight} key={key}/>
  })

  return (
    <>
      <div>
        <img src='/public/santa-airlines-logo.png' alt="A logo"/>
      </div>
      <h1 className={styles.mainText}>flight schedule</h1>
      {loading
       ? <p>Loading...</p> 
       : <div>{flightsJSX}</div>
      }
    </>
  )
}

export default App
