import React, { createContext, useReducer, useState } from 'react'
import reducer from './reduser';
export let contex=createContext();

export function Mycontex(props) {
    
const [state,dispatch] = useReducer(reducer,{
    count:0,
});

  return (
    <contex.Provider value={{state,dispatch}}>
        {props.children}
    </contex.Provider>
  )
}
