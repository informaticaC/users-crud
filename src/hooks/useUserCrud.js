import axios from "axios"
import { useState } from "react"
// import "..components/InfoOk.jsx"


const useUserCrud = () =>{
    const [users, setUsers] = useState()
    // const url = 'https://users-crud.academlo.tech/users/'

    const url = 'https://user-crud-academlo-2q5j.onrender.com/api/v1'

    //get
    const getAllUsers = () => {
        axios.get(`${url}/users`)
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
    }
     
    //post
    const createNewUser = (data, setCrudOpOk) => {
        axios.post(`${url}/users`, data)
        .then(res => {
            setCrudOpOk(true)
            getAllUsers()
            setTimeout(() => {
                setCrudOpOk(false)
            }, 1500);
        })
        .catch(err => {
            console.log(err)
        })
    }

    //delete
    const deleteUserById = (id, setCrudOpOk) => {
        const urlDelete = `${url}/users/${id}`
        axios.delete(urlDelete)
            .then(res => {
                console.log('borrado Ok:', id);
                setCrudOpOk(true)
                getAllUsers()
                setTimeout(() => {
                    setCrudOpOk(false)
                }, 1500);
            })
            .catch(err => {
                
                console.log('delete fail',err)
            })
    }

    //update
    const updateUserById = (id, data, setCrudOpOk) => {
        const urlUpdate = `${url}/users/${id}/`
        console.log(urlUpdate)
        axios.put(urlUpdate, data)
            .then(res => {
                setCrudOpOk(true)
                getAllUsers()
                setTimeout(() => {
                    setCrudOpOk(false)
                }, 1500);
                
            })
            
            .catch(err => {
                console.log(err)
                console.log('update fail on address:', urlUpdate )
                console.log('update fail on data:', data)
            })

    }

    return {  
        users,  
        getAllUsers,
        createNewUser,
        deleteUserById,
        updateUserById
    }
}

export default useUserCrud