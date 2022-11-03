//配置不同url的方法
//方法一 手动修改 base_url
// export const BASE_URL = 'http://coderwhy.com:8000'
// export const BASE_URL = 'http://codercba.com:8000'

//方法二 获取vite中环境参数
// export let BASE_URL = ''
// if (import.meta.env.DEV) {
//   BASE_URL = 'DEV_URL'
// } else {
//   BASE_URL = 'PROD_URL'
// }

//方法三 通过配置文件获取配置
export const BASE_URL = import.meta.env.BASE_URL
export const TIME_OUT = import.meta.env.TIME_OUT
