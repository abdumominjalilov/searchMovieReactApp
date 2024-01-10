import React from 'react'
import { useState } from 'react'
import "./AppInfo.css"
import { Contex } from './../../contex/index';
import { useContext } from 'react';

const AppInfo = () => {
  const { state, dispatch } = useContext(Contex)

  // const [allvide, setAllvide] = useState(data.length)
  // const [allviewer, setAllviewer] = useState(data.filter((d) => d.favorite === true))

  return (
    <div className='appinfo'>
      <p className='fs-3 text-uppercase'>Barcha Kinolar Soni: {state.data.length}</p>
      <p className='fs-3 text-uppercase'>Ko'rilgan Kinolar Soni: {state.data.filter(c => c.favorite).length}</p>
    </div>
  )
}

export default AppInfo