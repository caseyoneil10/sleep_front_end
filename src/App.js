import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Add from './components/Add'
import Edit from './components/Edit'
import Login from './components/Login'
import NewUser from './components/NewUser'

const App = () => {
  const [sleepData, setSleepData] = useState([])
  const [newUser, setNewUser] = useState([])
  const [user, setUser] = useState([])
  const [deletedPosts, setDeletedPosts] = useState([])

// ========GET SLEEP RECORDS=======

  const getSleepData = () => {
    axios
    .get('https://damp-ocean-33580.herokuapp.com/api/sleepData')
    .then(response => setSleepData(response.data),
    (err) => console.error(err)
  )
    .catch((error) => console.error(error))
  }

// ========CREATE NEW SLEEP RECORD=======

  const handleCreate = (addSleep) => {
  axios.post('https://damp-ocean-33580.herokuapp.com/api/sleepData', addSleep)
  .then(response => {
    setSleepData([...sleepData, response.data])
    console.log(addSleep)
  })
}


// ========CREATE NEW USER=======

  const handleNewUser = (addUser) => {
  axios.post('https://damp-ocean-33580.herokuapp.com/api/useraccount', addUser)
  .then(response => {
    setNewUser([...newUser, response.data],
    (err) => console.error(err))
  }).catch((error) => alert('Username Already Taken. Try Again.'))

  }


// ========EDIT  SLEEP RECORD=======

  const handleUpdate = (editSleep) => {
  axios.put('https://damp-ocean-33580.herokuapp.com/api/sleepData/' + editSleep.id, editSleep)
  .then((response) => {
    setSleepData(sleepData.map((sleep) => {
      return sleep.id !== editSleep.id ? sleep : response.data
    }))
  })
}

// ========LOGIN=======

  const handleLogin = (findUser) => {
  axios.put('https://damp-ocean-33580.herokuapp.com/api/useraccount/login' , findUser)
  .then((response) => {
    if (response.data.username == null) {
      alert('Username and Password Do Not Match')
    } else {
    setUser(response.data)
    console.log(response.data)}
  })
}
// ========DELETE SLEEP RECORD=======


const handleFindDeletedPosts= () => {
  sleepData.filter((deletedPosts) => {
      if (deletedPosts.username == user.username) {
       // console.log(deletedPosts.id)
       axios.delete('https://damp-ocean-33580.herokuapp.com/api/sleepData/' +
       deletedPosts.id)
     }
   });axios.delete('https://damp-ocean-33580.herokuapp.com/api/useraccount/' + user.id).then(() => {
     setUser([])
   })
}

// const handleDeleteUserAndPosts = () => {
//   console.log(deletedPosts);
//   deletedPosts.map((deletedPosts) => {
//     console.log(deletedPosts.id);
//   axios.delete('https://damp-ocean-33580.herokuapp.com/api/sleepData/' +
//   deletedPosts.id)
//     }).then((response) => {
//       axios.delete('https://damp-ocean-33580.herokuapp.com/api/useraccount/' + user.id)
//     })
//   }

// const handleDeleteUsername = () => {
//   axios.delete('https://damp-ocean-33580.herokuapp.com/api/useraccount/'+ user.id)
//   setUser([])
// }

const handleDelete = (deletedSleep) => {
  axios.delete('https://damp-ocean-33580.herokuapp.com/api/sleepData/' +
  deletedSleep.id)
  .then((response) => {
    setSleepData(sleepData.filter(sleep => sleep.id !== deletedSleep.id))
  })
}

const logout = () => {
  setUser([])
}


// ========USE EFFECT=======

  useEffect(() => {
    getSleepData()
  }, [])

  return (
    <>
        <h1>Sleep Tracker</h1>
        <h2>Welcome to your sleep tracker {user.username}</h2>
        <button onClick={logout}>Log Out</button>
        <button onClick={handleFindDeletedPosts}>Delete User Account And All User Data</button>
        <h2>Add a New Sleep Record</h2>
        <NewUser handleNewUser={handleNewUser}/>
        <Login handleLogin={handleLogin}/>
        <Add user={user} handleCreate={handleCreate}/>
        {sleepData.filter((posts) => {
          if (posts.username === user.username) {
            return posts }
        }).map((sleep) => {
          return(
            <div key={sleep.id}>
            <h3>Name:{sleep.name}</h3>
            <h3>Age:{sleep.age}</h3>
            <h3>Date:{sleep.date}</h3>
            <h3>Hours Slept:{sleep.hoursSlept}</h3>
            <h3>Routine:{sleep.routine}</h3>
            <h3>Quality of Sleep:{sleep.sleepQuality}</h3>
            <h3>Notes:{sleep.notes}</h3>
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
