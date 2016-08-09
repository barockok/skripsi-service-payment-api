import { Transaction } from '../../models'
export default (requestBody, callback)=>{
  Transaction.create(requestBody)
    .then( (user) => callback(undefined, user) )
    .catch( (error) => { console.log(error) ; callback(error) } )
}