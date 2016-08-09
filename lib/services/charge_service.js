import { Transaction } from '../../models'
import MerchantService from './merchant_service'
export default (params, callback)=>{
  Transaction.create(params)
    .then( (user) => callback(undefined, user) )
    .catch( (error) => { console.log(error) ; callback(error) } )
}