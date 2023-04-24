import { useEffect, useState } from 'react'
import './App.css'
import useUserCrud from './hooks/useUserCrud'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'

function App() {
  const [updateInfo, setUpdateInfo] = useState()
  const [formClose, setFormClose] = useState(true)
  const [crudOpOk, setCrudOpOk] = useState(false)
  const {   
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
    setUpdateInfo()
    setFormClose(false)
  } 

  return (
    <div className="app">
      <header className='app__header'>
        <h1 className='app__title'>Users</h1>
        <div className={`app__title-formOpOk ${crudOpOk? 'app__title-formOpOkView' : '' }`}>Operation Ok</div>
        <button onClick={handleOpenForm} className="app__btn">Create new</button>
      </header>
      < FormUser 
      createNewUser={createNewUser}
      updateUserById={updateUserById}
      updateInfo={updateInfo}
      setFormClose={setFormClose}
      formClose={formClose}
      setCrudOpOk={setCrudOpOk}
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
