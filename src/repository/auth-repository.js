
import UserSchema from "../../schemas/user.js";

function create(data){
 return data;
}

async function findByEmail(email){
  const user = await UserSchema.findOne({email})

  return user
}

export default {create, findByEmail}