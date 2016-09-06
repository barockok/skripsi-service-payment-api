import request from "request";
import AppConfig from "../../config/app.json";
export const getDetail = (merchantId) => {
  return (new Promise( (resolve, reject) => {
    let url = AppConfig.merchant_service_url + '/merchants/' + merchantId
    let headers = {'Content-Type' : 'application/json', 'Accept' : 'application/json'}
    request.get({ url, headers }, (err, httpResponse, body) => {
      if(err){
        return reject(err)
      }else{
        return resolve(body)
      }
    })
  }))
}