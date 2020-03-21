import axios from 'axios'
import { endpoint } from './config'

export const getBitcoin = async () => {
  return axios({
    url: endpoint,
    method: 'GET'
  })
}
