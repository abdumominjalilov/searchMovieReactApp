import React from 'react'

import "./AppFilter.css"
import { useContext } from 'react';
import { Contex } from './../../contex/index';

const AppFilter = () => {
  const { state, dispatch } = useContext(Contex)

  const btnFilterFunction = (nm) => {
    dispatch({ type: 'SET_BTN_FILTER', payload: nm })
  }
  const btnsArr = [
    { name: 'all', label: 'Barcha kinolar' },
    { name: 'popular', label: 'Mashhur kinolar' },
    { name: 'mostViewers', label: "Eng ko'p ko'rilgan kinolar" },
  ]

  return (
    <div className='btn-group'>
      {btnsArr.map((bt) => {
        return <button
          key={bt.name}
          className={`btn m-1  ${state.filter === bt.name ? 'btn-dark' : 'btn-outline-dark'}`} type='button'
          onClick={() => btnFilterFunction(bt.name)}

        >
          {bt.label}
        </button>

      })}
    </div>
  )
}

export default AppFilter