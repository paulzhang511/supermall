import axios from 'axios'

export function request(config) {
  //1.创建axios实例
  const instance = new axios.create({
    baseURL: 'http://127.0.0.1:3000',
    timeout: 5000
  })
  //2.axios请求拦截器
  instance.interceptors.request.use(
    config => {
      return config
    },
    error => {
    }
  )
  //3.axios响应拦截
  instance.interceptors.response.use(
    config =>{
      return config.data
    },
    error => {
    }
  )
  //4.真正的网络请求
  return instance(config)
}
