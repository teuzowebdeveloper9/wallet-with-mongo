import transactions from "../schemas/transactions"

async function create(body, id){
 if(!id) throw new Error('user id required')

 return await transactionRepository.create({...body, userid: id})
}

async function findAll(id){
  return await transactions.find({userId: id})
}

export default {create, findAll}