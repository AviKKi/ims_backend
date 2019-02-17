import Router from 'next/router'
import axios  from 'axios'
//axios.defaults.baseURL = "https://api.aveshgecr.in"
axios.defaults.baseURL = "http://localhost:8080"

import {
  SHOW_TOPLOADER,
  HIDE_TOPLOADER,
  SHOW_SPINNER,
  HIDE_SPINNER
} from './actionTypes'

