export const SET_USERID = 'SET_USERID'

export const initialState = {
  user: {
    id: global.window ? global.window.localStorage.getItem('urwallet_userId') : '',
    email: global.window ? global.window.localStorage.getItem('urwallet_userEmail') : ''
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case SET_USERID:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload
        }
      }
    default:
      return state
  }
}

export default reducer
