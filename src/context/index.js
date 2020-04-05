import React, { createContext, useReducer, useContext } from 'react'
// import PropTypes from 'prop-types'

import rootReducer, { initialState, SET_USERID, SET_BITCOIN, SET_BRITA } from './reducer'

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

  const setBitcoin = bitcoin => {
    dispatch({
      type: SET_BITCOIN,
      payload: bitcoin
    })
  }

  const setBrita = brita => {
    dispatch({
      type: SET_BRITA,
      payload: brita
    })
  }

  return {
    setUser,
    user: state.user,
    setBitcoin,
    bitcoin: state.bitcoin,
    setBrita,
    brita: state.brita
  }
}

export { useGlobalState, GlobalContext as default }
