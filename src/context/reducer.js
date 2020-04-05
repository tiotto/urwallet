export const SET_USERID = 'SET_USERID'
export const SET_BITCOIN = 'SET_BITCOIN'
export const SET_BRITA = 'SET_BRITA'

export const initialState = {
  user: {
    id: global.window ? global.window.localStorage.getItem('urw_userId') : '',
    email: global.window ? global.window.localStorage.getItem('urw_userEmail') : ''
  },
  bitcoin: global.window ? global.window.localStorage.getItem('urw_current_btc') : '',
  brita: global.window ? global.window.localStorage.getItem('urw_current_brt') : ''
}

const reducer = (state, action) => { console.log('state', state)
  switch (action.type) {
    case SET_USERID:
      return {
        ...state,
        user: {
          ...state.user.id,
          ...state.user.email,
          ...action.payload
        }
      }

    case SET_BITCOIN:
      return {
        ...state,
        bitcoin: {
          ...state.bitcoin,
          ...action.payload
        }
      }

    case SET_BRITA:
      return {
        ...state,
        brita: {
          ...state.brita,
          ...action.payload
        }
      }

    default:
      return state
  }
}

export default reducer
