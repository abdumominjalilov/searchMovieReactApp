import React from 'react'
import "./MoveListItem.css"
import { useContext } from 'react';
import { Contex } from '../../contex';
import { filterHendler, searchHandler } from '../../utils/data';

const MoveListItem = () => {
  
  const { state, dispatch } = useContext(Contex)
  const del = (id) => {
    dispatch({ type: 'ON_DELETE', payload: id })
  }

  const onSpan = (m) => {
    dispatch({ type: 'ONSPAN', payload: m })
  }
  const onStar = (m) => {
    dispatch({ type: 'ONLIKE', payload: m })
  }

  console.log(state);
  const data = filterHendler(searchHandler(state.data, state.term), state.filter)

  const Map = () => {
    return <div>{data.map((d) => {

      return <div key={d.id}>

        <li className={`mlitem item d-flex justify-content-between like ${d.favorite && 'favorite'}`}>
          <span onClick={() => onSpan(d.id)} className='mlitem-label'>{d.name}</span>
          <input type="number" className='mlitem-input' defaultValue={d.viewer} />

          <div className="d-flex justify-content-center align-item-center">
            <button onClick={() => del(d.id)} type='button' className="btn-cookie btn-sm ">
              <i className="fas fa-cookie"></i>
            </button>
            <button type='button' className="btn-trash btn-sm">
              <i className="fas fa-trash"></i>
            </button>
            <button onClick={() => onStar(d.id)} type='button' className={`btn-start btn-sm ${d.like && 'star'}`}>
              <i className="fas fa-start"></i>
            </button>
          </div>
        </li>
      </div>

    })}</div>
  }



  return (
    <div>
      <Map />
    </div>
  )
}

export default MoveListItem