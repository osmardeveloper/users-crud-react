import React from 'react'
import "./styles/UserCard.css"
import swal from "sweetalert2"

const UserCard = ({user, deleteUser, setUpdatingUser, handleClickShowModal}) => {

  const handleClickEdit = () => {
    setUpdatingUser(user)
    handleClickShowModal()
  }

  
  const alertDelete = () => {
    swal.fire({
      title: "Delete User",
      text: "Are you sure you want to Delete this User?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "Cancel"
    }).then(resultado => {
      if(resultado.value) {
        deleteUser(user.id);
        const text = `${user.first_name} ${user.last_name}`
        swal.fire({
          type: 'info',
          html: 'The User <b>'+ text +'</b> was Deleted Successfully',
          icon: "success",
        })
      }
    })
  }


  return (
    <div className='userCard__flex'>
    <article className='userCard'>
      <div className='userCard__flex'>
      <h3 className='userCard__title'><i className='bx bxs-user userCard__icon'></i>   {user.first_name} {user.last_name}</h3>
      <ul className='userCard__list'>
        <li className='userCard__email'><i className='bx bxs-envelope userCard__icon'></i>   {user.email}</li>
        <li><i className='bx bxs-gift userCard__icon'></i>   {user.birthday}</li>
      </ul>
      </div>
      <div className='userCard__flex2'>
        <button className='userCard__btn red' onClick={alertDelete}><i className='bx bx-trash'></i></button>
        <button className='userCard__btn' onClick={handleClickEdit}><i className='bx bx-pencil'></i></button>
      </div>      
    </article>
    </div>
  )
}

export default UserCard