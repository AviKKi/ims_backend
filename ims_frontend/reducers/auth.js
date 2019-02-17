import { AUTH_USER, UNAUTH_USER } from '../actions/actionTypes'


const initialState = {
  isAuthenticated: false,
  username: "",
  isAdmin: false
}

const auth = (state = initialState, action) => {
    console.log(action)
  switch(action.type){
    case AUTH_USER:
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload.username,
        isAdmin: action.payload.username==="boss@36inc"
      }
    case UNAUTH_USER:
      return initialState
    default:
      return state
  }
}

export default auth
