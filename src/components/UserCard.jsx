import React from 'react'
import "./styles/UserCard.css"

const UserCard = ({user, deleteUser, setUpdatingUser, handleClickShowModal}) => {

  const handleClickEdit = () => {
    setUpdatingUser(user)
    handleClickShowModal()
  }

  return (
    <div className='userCard__flex'>
    <article className='userCard'>
      <div className='userCard__flex'>
      <h3 className='userCard__title'><i className='bx bxs-user userCard__icon'></i>   {user.first_name} {user.last_name}</h3>
      <ul className='userCard__list'>
        <li><i className='bx bxs-envelope userCard__icon'></i>   {user.email}</li>
        <li><i className='bx bxs-gift userCard__icon'></i>   {user.birthday}</li>
      </ul>
      </div>
      <div className='userCard__flex2'>
        <button className='userCard__btn red' onClick={() => deleteUser(user.id)}><i className='bx bx-trash'></i></button>
        <button className='userCard__btn' onClick={handleClickEdit}><i className='bx bx-pencil'></i></button>
      </div>      
    </article>
    </div>
  )
}

export default UserCard