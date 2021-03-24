import axios from "axios"
export function request(config) {
	//创建axios实例
	const instance = axios.create({
		//baseURL: 'https://y.jinkangwang.com',
		baseURL:'/api',
		timeout: 1000,
	});
	//实现请求拦截器
	instance.interceptors.request.use(config => {

		return config
	})
	//实现响应拦截器
	instance.interceptors.response.use(res => {

		return res.data

	}, err => {
		return err
	})

  return instance(config)

}
