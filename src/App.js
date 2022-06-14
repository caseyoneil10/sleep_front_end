import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Add from './components/Add'
import Edit from './components/Edit'
import bcrypt from 'bcrypt'


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
  axios.post('https://damp-ocean-33580.herokuapp.com/api/sleepData', addSleep)
  .then(response => {
    setSleepData([...sleepData, response.data])
  })
}

  const handleUpdate = (editSleep) => {
  axios.put('https://damp-ocean-33580.herokuapp.com/api/sleepData/' + editSleep.id, editSleep)
  .then((response) => {
    setSleepData(sleepData.map((sleep) => {
      return sleep.id !== editSleep.id ? sleep : response.data
    }))
  })
}



const handleDelete = (deletedSleep) => {
  axios.delete('https://damp-ocean-33580.herokuapp.com/api/sleepData/' +
  deletedSleep.id)
  .then((response) => {
    setSleepData(sleepData.filter(sleep => sleep.id !== deletedSleep.id))
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
            <Edit handleUpdate={handleUpdate} sleep={sleep}/>
            <button onClick={() => {handleDelete(sleep
        )}}>
        Delete Sleep Record
        </button>
            </div>




          )
        })}
    </>
  )
}

export default App
