import React, { useState } from 'react'
import './styles/warningModal.css'


const WarningModal = ({deleteUserById,
     setCloseWarning ,
     closeWarning,
     updateInfo,
     setCrudOpOk 
    }) => {
    // const [closeWarning, setCloseWarning] = useState(false)
      //  console.log(updateInfo.first_name);
    const handleWarningYes = ()=>{
        setCloseWarning(true)
        deleteUserById(updateInfo.id, setCrudOpOk)
    }

    const handleWarningCancel = ()=>{
        setCloseWarning(true)
    }

  return (
    <div className={`warning__container ${closeWarning? 'close' : ''} `}> 
        <div className="warning">
            <div>😳Do you really want to <b>delete</b>  this User?🤷‍♂️</div>
            <div className='warning__user'>{updateInfo?.first_name} {updateInfo?.last_name} </div>
            <div className="button__container">
                <button onClick={handleWarningYes} className='warning__btn warning__btn-yes'>Really, really</button>
                <button onClick={handleWarningCancel} className='warning__btn'>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default WarningModal
