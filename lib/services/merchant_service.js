import request from "request";
import AppConfig from "../../config/app.json";


import Thrift , {TBufferedTransport, TBinaryProtocol } from 'thrift'
import MerchantService  from '../xyz_thrift/MerchantService'
import ttypes           from '../xyz_thrift/merchant-portal_types'

const thriftTransport = TBufferedTransport()
const thriftProtocol = TBinaryProtocol()

const thrift_getDetail = (merchantId) => {
  return (new Promise( (resolve, reject) => {
    let connection = Thrift.createConnection(AppConfig.merchant_service_thrift_host,
        AppConfig.merchant_service_thrift_port, {
        transport : TBufferedTransport,
        protocol : TBinaryProtocol
      });

    connection.on('error', reject)

    let client = Thrift.createClient(MerchantService, connection);
    client.get(merchantId, (err, result) => {
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

const http_getDetail = (merchantId) => {
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



export const getDetail = (merchantId) => {
  if(AppConfig.communication_protocol == 'thrift')
    return thrift_getDetail(merchantId);
  else
    return http_getDetail(merchantId)
}

