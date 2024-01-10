import React, { useState } from 'react'
import './MoveListAdd.css'

const MoveListAdd = ({ name, viewer, onChange, addForm, iswar }) => {


  return (
    <div className='MoveListAdd'>
      <h2>Yangi Kino Qo'shish</h2>
      <form className="add-form d-flex">
        <input value={name} name='formText' onChange={onChange} type="text" className='form-control add-post-label' placeholder='Qanday Kino' />
        <input value={viewer} name='formNum' onChange={onChange} type="number" className={`form-control add-post-label ${iswar && 'm-5'}`} placeholder='Necha Marta Korilgal' />
        <button onClick={(e) => addForm(e)} className="btn btn-outline-dark">Qo'shish</button>
      </form>
    </div>
  )
}

export default MoveListAdd