import React from 'react'
import MoveListItem from '../MoveListItem/MoveListItem'
import "./MoveList.css"

const MoveList = () => {
  return (

    <ul className='MoveList' >
      {/* {console.log(data)}
        {
          data.map(d => { */}
      {/* // return <MoveListItem name={d.name} viewer={d.vyiewer} favorite={d.favorite} /> */}
      <MoveListItem />

    </ul >
  )
}

export default MoveList