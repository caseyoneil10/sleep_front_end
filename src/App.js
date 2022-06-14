import React, {useState, useEffect} from 'react'
import axios from 'axios'
const App = () => {

  const [sleepData, setSleepData] = useState([])

  const getSleepData = () => {
    axios
    .get('https://damp-ocean-33580.herokuapp.com/api/sleepData')
    .then(response => setSleepData(response.data),
    (err) => console.error(err)
  )
    .catch((error) => console.error(error))
  }

  useEffect(() => {
    getSleepData()
  }, [])


  return (
    <>
        <h1>Sleep Tracker</h1>
        {sleepData.map((sleep) => {
          return(
            <div>
            <h3>Name:{sleep.name}</h3>
            <h3>Name:{sleep.age}</h3>
            <h3>Name:{sleep.date}</h3>
            <h3>Name:{sleep.hoursSlept}</h3>
            <h3>Name:{sleep.routine}</h3>
            <h3>Name:{sleep.sleepQuality}</h3>
            </div>




          )
        })}
    </>
  )
}

export default App
