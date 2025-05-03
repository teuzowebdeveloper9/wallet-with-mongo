import transactionService from "../service/transaction-service.js"

async function create(req,res) {
  const body = req.body
  const id = 'teste'


  try{
    const transaction = await transactionService.create(body,id)
    return res.status(201).send(transaction)  
  }catch(err){
    res.status(409).send(err.message)
  }
}

export default {create}