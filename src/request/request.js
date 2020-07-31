// 此处封装请求

import axios from 'axios'

axios.default.timeout = 5000
axios.default.baseURL = 'http://www.mzz2020.com'

// 请求拦截器
axios.interceptors.request.use(config => {
    console.log('请求拦截器', config)
    return config
}, err => {
    console.log('请求拦截器错误', err)
})

// 响应拦截器
axios.interceptors.response.use(response => {
    console.log('响应拦截器', response)
    return response
}, err => {
    console.log('响应拦截器错误', err)
})

export default axios