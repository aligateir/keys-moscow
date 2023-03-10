import axios from 'axios'

const instance = axios.create({
  baseURL: '/wp-json/'
})

export default instance
