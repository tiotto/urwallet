import axios from 'axios'
import { endpoint } from './config'

export const getBrita = async (date) => {
  return axios({
    url: `${endpoint}`,
    method: 'GET'
  })
}
