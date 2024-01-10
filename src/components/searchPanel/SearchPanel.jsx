import React, { useState } from 'react'
import "./SearchPanel.css"
import { useContext } from 'react';
import { Contex } from './../../contex/index';

const SearchPanel = ({setTermHandler}) => {
  const [thisTerm, setThisTerm] = useState('')
  const { state, dispatch } = useContext(Contex)

  const setTerm = (e) => {

    const trm = e.target.value.toLowerCase()
    dispatch({type:'SET_TERM_HANDLER',payload:trm})
  }
  return (
    <div>
      <input
        type="text" className="form-control searchInput"
        placeholder='Kino Qidirish'
        onChange={setTerm}
        value={state.term}
      />

    </div>
  )
}

export default SearchPanel