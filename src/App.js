import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Add from './components/Add'
import Edit from './components/Edit'
import Login from './components/Login'
import NewUser from './components/NewUser'
import SleepByAge from './components/sleepByAge'

const App = () => {
  const [sleepData, setSleepData] = useState([])
  const [newUser, setNewUser] = useState([])
  const [user, setUser] = useState([])
  const [deletedPosts, setDeletedPosts] = useState([])
  const [currentUser, setCurrentUser] = useState([])
  const [currentUserAge, setCurrentUserAge] = useState()

  const [loginHeader, setLoginHeader] = useState(false)
  const [show, setShow] = useState(false);
  const [showLogin, setShowLogin] = useState(false)
  const [showRecord, setShowRecord] = useState(false)
  const [loginSuccess, setLoginSuccess] = useState(false)


// ========SHOW HIDE FUNCTIONS=======
  const showPage = () => {
    setShow(true)
    setLoginHeader(false)
    setShowLogin(false)
    setShowRecord(false)
  }

  const showLoginTab = () =>{
    setShowLogin(true)
  }

  const showRecordInput = () => {
    setShowRecord(true)
  }

  const showloginAndHideCreate = () => {
    showLoginTab()
    setShow(false)
    setLoginHeader(true)
    setLoginSuccess(true)
  }
  
  const goBack =() => {
    setLoginHeader(false)
    setShowLogin(false)
    setLoginSuccess(false)
  }

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
    alert("Account Created Click The Login Button Below")
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
      axios
      .get('https://damp-ocean-33580.herokuapp.com/api/useraccount/' + response.data.id).then((response) => {
        setCurrentUserAge(response.data.age)
        setCurrentUser(response.data)
      })
    setShowRecord(true)
    setLoginSuccess(false)
    console.log(response.data)
    }
  })
}

// ========DELETE USER AND ALL DATA =======

const handleFindDeletedPosts= () => {
  sleepData.filter((deletedPosts) => {
      if (deletedPosts.username == user.username) {
       // console.log(deletedPosts.id)
       axios.delete('https://damp-ocean-33580.herokuapp.com/api/sleepData/' +
       deletedPosts.id)
     }
   });axios.delete('https://damp-ocean-33580.herokuapp.com/api/useraccount/' + user.id).then(() => {
     setUser([])
     setCurrentUser([])
     setShowRecord(false)
     setShowLogin(false)
     setLoginHeader(false)
     setCurrentUserAge()

   })
}
// ========DELETE SINGLE RECORD=======
const handleDelete = (deletedSleep) => {
  axios.delete('https://damp-ocean-33580.herokuapp.com/api/sleepData/' +
  deletedSleep.id)
  .then((response) => {
    setSleepData(sleepData.filter(sleep => sleep.id !== deletedSleep.id))
  })
}
// ========LOGOUT=======
const logout = () => {
  setUser([])
  setCurrentUser([])
  setShowRecord(false)
  setShowLogin(false)
  setLoginHeader(false)
  setCurrentUserAge()
}

// ========USE EFFECT=======

  useEffect(() => {
    getSleepData()
  }, [])

  return (
    <>
      <div id='login_page'>
        {
          loginHeader?null:<h1>The Sleep App</h1>
        }
        {
          loginHeader?null:<h2>Create An Account to Log in and Track Sleep</h2>
        }
        {
          showLogin ? null : <button className='create_account' onClick={showPage}>Create Account</button>
        }
        {     
        <button className='button' onClick={()=>{
          showloginAndHideCreate()
        }}>Login</button>  
        }
      </div>
        {
          showLogin?<h1>Sleep Tracker</h1>:null
        }
        {
          showLogin?<h2>Welcome To Your Sleep Tracker, {currentUser.name}!</h2>:null
        }
        {
          showLogin?<h2>Log in to track sleep</h2>:null
        }
        <div className='login_form'>
        {
          show?<NewUser handleNewUser={handleNewUser}/>:null
        }

        {
          loginSuccess?<Login handleLogin={handleLogin}/>:null
        }
        {
          loginSuccess?<button onClick={goBack}>Go Back</button>:null
        }
        {
          showRecord?<><button onClick={logout}>Log Out</button>
          <button onClick={handleFindDeletedPosts}>Delete User Account And All User Data</button></> : null
        }
        {
          showRecord?<><button className="button-primary" onClick={logout}>Log Out</button>
          </> : null
        }
        {
          showRecord?<h3>Add new sleep record</h3>:null
        }
        {
          showRecord?<Add user={user} handleCreate={handleCreate}/>:null
        }
        {showRecord?<SleepByAge user={user} handleLogin={handleLogin} currentUserAge={currentUserAge} sleepData={sleepData}/> : null}
        {sleepData.filter((posts) => {
          if (posts.username === user.username) {
            return posts }
        }).map((sleep) => {
          return(
            <div key={sleep.id}>
            <h3>Date: {sleep.date}</h3>
            <h3>Hours Slept: {sleep.hoursSlept}</h3>
            <h3>Routine: {sleep.routine}</h3>
            <h3>Quality of Sleep: {sleep.sleepQuality}</h3>
            <h3>Notes: {sleep.notes}</h3>
            <Edit handleUpdate={handleUpdate} sleepData={sleepData} sleep={sleep}/>
            <button onClick={() => {handleDelete(sleep
            )}}>
            Delete Sleep Record
            </button>
            </div>
          )
        })}
        </div>
        <br/>
        {showRecord?<button className='button-primary' onClick={handleFindDeletedPosts}>Delete User Account And All User Data</button> : null}
    </>
  )
}

export default App
