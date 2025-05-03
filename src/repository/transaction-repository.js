import transactions from "../../schemas/transactions.js";

async function create(data){
    return transactions.create()
}