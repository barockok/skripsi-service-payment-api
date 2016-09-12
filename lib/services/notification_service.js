import AppConfig from "../../config/app.json";

import request from "request";

import Thrift , {TBufferedTransport, TBinaryProtocol } from 'thrift'
import NotificationService  from '../xyz_thrift/NotificationService'
import ttypes from '../xyz_thrift/xyz_types'

const http_send = (notifactionUrl, transactionBody) => {
  return (new Promise( (resolve, reject) => {
    let url     = AppConfig.notification_service_url + '/notifications'
    let headers = {'Content-Type' : 'application/json', 'Accept' : 'application/json'}
    let body    = JSON.stringify({notification: {transaction: transactionBody, url: notifactionUrl}})
    request.post({url, headers, body}, (err, res, body) => {
      if(err){
        reject(err)
      }else{
        resolve(body)
      }
    })
  }))
}

const thrift_send = (notifactionUrl, transactionBody) => {
  return (new Promise( (resolve, reject) => {
    let connection = Thrift.createConnection(AppConfig.notification_service_thrift_host,
      AppConfig.notification_service_thrift_port, {
      transport : TBufferedTransport,
      protocol : TBinaryProtocol
    });
    connection.on('error', reject)
    let client = Thrift.createClient(NotificationService, connection);
    let trx =  new ttypes.Transaction(transactionBody)
    console.log(trx)
    client.send(notifactionUrl, trx , (err, result) => {
      if(err){
        connection.end()
        reject(err);
      }else{
        connection.end()
        resolve(result);
      }
    })
  }))
}

export const send = (notifactionUrl, transactionBody) => {
  if(AppConfig.communication_protocol == 'thrift')
    return thrift_send(notifactionUrl, transactionBody);
  else
    return http_send(notifactionUrl, transactionBody);
}
