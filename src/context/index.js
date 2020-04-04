import React, { createContext, useReducer, useContext } from 'react'
// import PropTypes from 'prop-types'

import rootReducer, { initialState, SET_USERID } from './reducer'

const Context = createContext()

const GlobalContext = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState)

  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
}

function useGlobalState () {
  const [state, dispatch] = useContext(Context)

  const setUser = user => {
    dispatch({
      type: SET_USERID,
      payload: user
    })
  }

  return {
    setUser,
    user: state.user
  }
}

export { useGlobalState, GlobalContext as default }