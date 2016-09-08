import request from "request";
import AppConfig from "../../config/app.json";

export const send = (notifactionUrl, transactionBody) => {
  return (new Promise( (resolve, reject) => {
    let url     = AppConfig.merchant_service_url + '/notifications'
    let headers = {'Content-Type' : 'application/json', 'Accept' : 'application/json'}
    let body    = JSON.stringify({transaction: transactionBody, url: notifactionUrl})

    request.post({url, headers, body}, (err, res, body) => {
      if(err){
        reject(err)
      }else{
        resolve(body)
      }
    })
  }))
}