//importejam vissas vajadzgs lietas
import { useState,useEffect } from 'react'
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
      {loading
       ? <h1>Loading..</h1>
       : <div>
            <nav>
              <div className={styles.logoHolder}>
                <img className={styles.logo} src='./src/public/santa-airlines-logo.png' alt="A logo"/>
              </div>
              <div className={styles.mainTextHolder}>
                <h1 className={styles.mainText} >flight schedule</h1>  
              </div>
            </nav>
          {flightsJSX}
        </div>
      }
    </>
  )
}

export default App
