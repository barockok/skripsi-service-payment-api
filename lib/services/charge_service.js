import { getDetail as MerchantService } from './merchant_service'
import { send as NotificationService } from "./notification_service";
import UUID from 'uuid-js'
const saveTransaction = (merchantDetail, params) => {
  return (new Promise((resolve, reject) => {
    params.id = UUID.create().toString()
    // simulate save to database, make it operation time constant to 1 ms
    setTimeout( ()=>{resolve({merchantDetail, transaction: params})}, 1 )
  }))
}

const sendNotification = (options) => {
  let { merchantDetail, transaction} = options
  return (new Promise( (resolve, reject) =>{
    NotificationService(merchantDetail.notification_url, transaction)
      .then( (response) => {
        resolve({merchantDetail, transaction, response})
      })
      .catch((error) => {
        reject(error)
      })
  }))
}

export default (params, callback)=>{
  MerchantService(params.merchant_id)
    .then( (merchantDetail) => saveTransaction(merchantDetail, params) )
    .then( sendNotification )
    .catch( (error) => { console.log(error)  ;callback(error) } )
    .then( (transaction) => callback(undefined, transaction) )
}