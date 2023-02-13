import React from 'react'
import UserCard from './UserCard'
import "./styles/UserList.css"

const UsersList = ({users, deleteUser, setUpdatingUser, handleClickShowModal}) => {
  return (
    <section className='userList__flex'>
      {
        users.map(user => <UserCard handleClickShowModal={handleClickShowModal} setUpdatingUser={setUpdatingUser} deleteUser={deleteUser} key={user.id} user={user} />)
      }
    </section>
  )
}

export default UsersList