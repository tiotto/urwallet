import axios from 'axios'
import { endpoint } from './config'

export const getBrita = async (date) => {
  return axios({
    url: `${endpoint}@dataCotacao='${date}'&$format=json`,
    method: 'GET'
  })
}
