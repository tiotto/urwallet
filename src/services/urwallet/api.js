import axios from 'axios'
import { endpoint } from './config'

export const getUrwallet = async (email) => {
  return axios({
    url: `${endpoint}@dataCotacao='${date}'&$format=json`,
    method: 'GET'
  })
}
