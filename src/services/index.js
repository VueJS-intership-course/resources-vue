import axios from 'axios'
import {BASE_API_URL} from '@/utils/constants.js'

const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    auth: '123mfdsakdnq'
  }
})

axiosInstance.interceptors.request.use((config) => {
    console.log('conf', config)

    config.headers = {
      'my-cusotm-header': 'custom'
    }

    return config
}, (err) => {
  console.error(err)
})

axiosInstance.interceptors.response.use((res) => {
  console.warn(res)


  res.data = {...res.data, time: Date.now()}
  return res
}, (err) => {
  console.error(err)
})


export default axiosInstance