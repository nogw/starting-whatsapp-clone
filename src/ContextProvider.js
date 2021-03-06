import React, { createContext, useReducer, useContext } from 'react'

export const ContextContext = createContext();

export const ContextProvider = ({ reducer, initialState, children }) => (
  <ContextContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </ContextContext.Provider>
)

export const useStateValue = () => useContext(ContextContext);