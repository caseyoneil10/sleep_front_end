import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Add from './components/Add'



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

  const handleCreate = (addSleep) => {
  axios.post('http://localhost:8000/api/sleedData', addSleep)
  .then(response => {
    setSleepData([...sleepData, response.data])
  })
}

  useEffect(() => {
    getSleepData()
  }, [])


  return (
    <>
        <h1>Sleep Tracker</h1>
        <h2>Add a New Sleep Record</h2>
        <Add handleCreate={handleCreate}/>
        {sleepData.map((sleep) => {
          return(
            <div>
            <h3>Name:{sleep.name}</h3>
            <h3>Age:{sleep.age}</h3>
            <h3>Date:{sleep.date}</h3>
            <h3>Hours Slept:{sleep.hoursSlept}</h3>
            <h3>Routine:{sleep.routine}</h3>
            <h3>Quality of Sleep:{sleep.sleepQuality}</h3>
            </div>




          )
        })}
    </>
  )
}

export default App
