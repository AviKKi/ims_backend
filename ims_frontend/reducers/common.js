import { 
  SHOW_TOPLOADER,
  HIDE_TOPLOADER,
  SHOW_SPINNER,
  HIDE_SPINNER } from '../actions/actionTypes'


const initialState = {
  topLoader: false,
  spinner: false
}

const auth = (state = initialState, action) => {
  console.log(action)
  switch(action.type){
    case SHOW_SPINNER:
      return {
        ...state,
        spinner: true,
      }
    case HIDE_SPINNER:
      return {
        ...state,
        spinner: false,
      }
    case SHOW_TOPLOADER:
      return {
        ...state,
        topLoader: true
      } 
    case HIDE_TOPLOADER:
      return {
        ...state,
        topLoader: false
      }
    default:
      return state
  }
}

export default auth
