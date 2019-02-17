import Router from 'next/router'
import axios from 'axios'

// axios.defaults.baseURL = "https://hackapi.avikki.me"
axios.defaults.baseURL = "http://localhost:8080"

import {
  AUTH_USER,
  UNAUTH_USER,
  SHOW_TOPLOADER,
  HIDE_TOPLOADER
} from './actionTypes'

export const loginUser = payload => async dispatch => {
    try {
        dispatch({type:SHOW_TOPLOADER})
        console.log(payload)
        try{
            let res = await axios.post('api/v1/auth/login/', payload, {withCredentials: true} )
        }catch(e){
            console.log(e)
        }
        let profile = await axios.get('api/v1/users/profile', {withCredentials: true} )
        console.log(profile)
        dispatch({type: AUTH_USER, payload:{username:profile.data.username}})
        Router.push("/")
    }
    catch(e){
      console.log(e)
    }finally{
      dispatch({type: HIDE_TOPLOADER})
    }
}

export const registerUser = payload => async dispatch => {
  try{
    console.log(payload)
    dispatch({type:SHOW_TOPLOADER})
    try{
        let res = await axios.post('api/v1/auth/registration/', payload, {withCredentials: true})
    }catch(e){
        console.log(e)
    }
    let profile = await axios.get('api/v1/users/profile', {withCredentials: true})
    console.log(profile.data)
    dispatch({type: AUTH_USER, payload: profile.data})
    Router.push("/ProfileEdit?newUser=1")
  }
  catch(e){
    console.log(e)
  }finally{
    dispatch({type:HIDE_TOPLOADER})
  }
}


export const unauthUser = () => async dispatch => {
    try {
        dispatch({type:SHOW_TOPLOADER})
        let res = await axios.post('api/v1/auth/logout/', {withCredentials: true} )
        console.log(res)
        dispatch({type: UNAUTH_USER})
        Router.push("/")
    }
    catch(e){
      console.log(e)
    }finally{
      dispatch({type: HIDE_TOPLOADER})
    }
}
