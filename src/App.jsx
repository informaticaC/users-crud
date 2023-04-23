import { useEffect, useState } from 'react'
import './App.css'
import useUserCrud from './hooks/useUserCrud'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'

function App() {
  const [updateInfo, setUpdateInfo] = useState(0)
  const [formClose, setFormClose] = useState(true)
  const{   
    users,
    getAllUsers,
    createNewUser,
    deleteUserById,
    updateUserById
  } = useUserCrud()

  useEffect(() => {
    getAllUsers()  
  
  }, [])
  
  const handleOpenForm= ()=>{
    setFormClose(false)
  } 

  return (
    <div className="app">
      <header className='app__header'>
        <h1 className='app__title'>Users</h1>
        <button onClick={handleOpenForm} className="app__btn">Create new</button>
      </header>
      < FormUser 
      createNewUser={createNewUser}
      updateUserById={updateUserById}
      updateInfo={updateInfo}
      setFormClose={setFormClose}
      formClose={formClose}
      />
      <div className='app__user-container'>
        {
          users?.map(user => (
            <UserCard 
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}
              setFormClose={setFormClose}
            /> 
          ))
        }
      </div>
    </div>
  )
}

export default App
