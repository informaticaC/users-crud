import axios from "axios"
import { useState } from "react"

const useUserCrud = () =>{
    const [users, setUsers] = useState()
    const url = 'https://users-crud.academlo.tech/users/'

    //get

    const getAllUsers = () => {
        axios.get(url)
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
    }
     
    //post
    const createNewUser = (data) => {
        axios.post(url, data)
            .then(res => getAllUsers())
            .catch(err => console.log(err))
    }

    //delete
    const deleteUserById = (id) => {
        const urlDelete = `${url}${id}/`
        axios.delete(urlDelete)
            .then(res => {
                console.log('borrado Ok:', id);
                getAllUsers()
            })
            .catch(err => {
                
                console.log('delete fail',err)
            })
    }

    //update

    const updateUserById = (id, data) => {
        const urlUpdate = `${url}${id}/`
        axios.patch(urlUpdate, data)
            .then(res => getAllUsers())
            .catch(err => console.log(err))

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