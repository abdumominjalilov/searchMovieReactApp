import "./App.css";
import { useState, useEffect } from 'react'
import AppFilter from "../app-filter/AppFilter";
import AppInfo from "../app-info/AppInfo";
import SearchPanel from "../searchPanel/SearchPanel";
import MoveList from "../move-list/MoveList";
import MoveListAdd from "../MoveListAdd/MoveListAdd";
import { useContext } from "react";
import { Contex } from "../../contex";

function App() {
  
  const { state, dispatch } = useContext(Contex)


  // console.log(state,dispatch);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5')
      .then(response => response.json())
      .then(json => {
        const newArr = json.map(item => ({
          name: item.title,
          id: item.id,
          viewers: item.id * 10,
          favorite: false,
          like: false,
        }))
        dispatch({ type: 'GET_DATA', payload: newArr })
      })
      .catch(err => console.log(err))
  }, [])



  const onChange = (e) => {

    if (e.target.name === 'formText') {
      setName(e.target.value)
    }
    if (e.target.name === 'formNum') {
      setViewer(e.target.value)


    }


  }


  return (
    <div className="App font-monospace">
      <div className="content">
        <AppInfo />
        <div className="searchPanel">
          <SearchPanel />
          <AppFilter  />
        </div>
        <MoveList />
        <MoveListAdd onChange={onChange} />
      </div>
    </div>
  );
}

export default App;
