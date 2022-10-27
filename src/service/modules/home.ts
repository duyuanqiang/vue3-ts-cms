import hmgReq from "../"

hmgReq.request({
  url:"/home/multidata"
}).then(res=>{
  console.log(res.data)
})