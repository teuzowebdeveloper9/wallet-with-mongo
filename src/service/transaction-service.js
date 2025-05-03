async function create(body, id){
 if(!id) throw new Error('user id required')

 return await transactionRepository.create({...body, userid: id})
}

export default {create}