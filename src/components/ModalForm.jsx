import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import "./styles/ModalForm.css"

const defaultValues =
{
  "first_name": "",
  "last_name": "",
  "email": "",
  "password": "",
  "birthday": ""
};

const ModalForm = ({
  isShowModal,
  handleClickShowModal,
  createUser,
  updatingUser,
  updateUser,
  setUpdatingUser
}) => {

  const {register, handleSubmit, reset} = useForm()

  const submit = (data) => {
    if(updatingUser){
      updateUser(data, updatingUser.id)
    } else {
    createUser(data);
    }
    reset(defaultValues);
    setUpdatingUser()
  }

  const handleClickClose = () => {
    handleClickShowModal()
    reset(defaultValues)
    setUpdatingUser()
  }

  useEffect(() => {
    if(updatingUser) {
      reset(updatingUser);
    }
  }, [updatingUser]);
  

  return (
    <section className={`modalForm ${isShowModal ? 'activeForm' : ''}`}>
      <form onSubmit={handleSubmit(submit)} className='modalForm__form'>
        <h3 className='modalForm__title'>{updatingUser ? "Edit user" : "New user"}</h3>
        <i onClick={handleClickClose} className='bx bx-x modalForm__x'></i>
       <div className='modalForm__divflex'>
       <i className='bx bxs-user modalForm__icon'></i>
        <div className='modalForm__divname'>
          <label className='modalForm__label' htmlFor="">First Name</label>
          <input className='modalForm__input' placeholder='First Name' type="text" {...register("first_name")} />
        </div>
        <div className='modalForm__divname'>
          <label className='modalForm__label' htmlFor="">Last Name</label>
          <input className='modalForm__input' placeholder='Last Name' type="text" {...register("last_name")}  />
        </div>
        </div>
        <div className='modalForm__div row'>
          <label className='modalForm__label' htmlFor="">Email</label>
          <i className='bx bxs-envelope modalForm__icon2'></i><input className='modalForm__input' placeholder='Email' type="email" {...register("email")}  />
        </div>
        <div className='modalForm__div row'>
          <label className='modalForm__label' htmlFor="">Password</label>
          <i className='bx bxs-lock modalForm__icon2'></i><input className='modalForm__input' placeholder='Password' type="password" {...register("password")} />
        </div>
        <div className='modalForm__div row'>
          <label className='modalForm__label' htmlFor="">Birthday</label>
          <i className='bx bxs-gift modalForm__icon2'></i><input className='modalForm__input' type="date" {...register("birthday")} />
        </div>
        <div className='modalForm__center'>
        <button className='modalForm__btn'>{updatingUser ? "Save changes" : "Add new user"}</button>
        </div>
        
      </form>
    </section>
  );
}

export default ModalForm