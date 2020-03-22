import axios from 'axios'
import { endpoint } from './config'

export const getUrwallet = async (email) => {
  return axios({
    url: endpoint,
    method: 'GET'
  })
}
