import { model, Schema } from "mongoose";

const transactionSchema = new Schema({
    value: {type: Number, required: true},
    description: {type: String, required:true},
    type: {type: String, required: true},
    userId: {type: Schema.Types.ObjectId, require:true, ref: 'users'},
    createdAt: {type: Date, required:true, default: Date.now()}

})

export default model('transactions', transactionSchema )