//配置不同url的方法
//方法一 手动修改 base_url
// export const BASE_URL = 'http://coderwhy.com:8000'
// export const BASE_URL = 'http://codercba.com:8000'

//方法二 获取vite中环境参数
let BASE_URL = ''
if (import.meta.env.PROD) {
  // 生产环境
  BASE_URL = 'http://152.136.185.210:4000'
} else {
  // 开发环境
  BASE_URL = 'http://152.136.185.210:5000'
}

// console.log(BASE_URL)

// 3.通过创建.env文件直接创建变量
// console.log(import.meta.env.VITE_URL)

export const TIME_OUT = 10000
export { BASE_URL }
//方法三 通过配置文件获取配置
// export const BASE_URL = import.meta.env.BASE_URL
// export const TIME_OUT = import.meta.env.TIME_OUT
