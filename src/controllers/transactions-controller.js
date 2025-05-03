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

async function findAll(req,res){
    const {id : _id} = res.locals.user;

    try{
        const transactions = await transactionService.findAll(id)
    }catch(err){
        res.status(404).send('erro na transação')
    }
}

export default {create}