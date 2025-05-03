import bcrypt from 'bcrypt'
import authRepository from '../repository/auth-repository.js';

async function signup(body){
  const hashPassword = bcrypt.hashSync(body.password, 10);

  const userExist = await authRepository.findByEmail(body.email)
  if(userExist) throw new Error('user already exists ! ');

  

  return await authRepository.create({...body, password: hashPassword})
  
}

async function signin(body){  
 const userExist = await authRepository.findByEmail(body.email)
 const passwordOk = bcrypt.compareSync(body.password, userExist.password)
 if(!userExist) throw new console.error("e-mail or password  incorrect");
 if(!passwordOk) throw new console.error("e-mail or password  incorrect");

 return authRepository.generateToken(userExist._id)
 
}

async function userLogged(id) {
  const user = await authRepository.findById(id)
  if(!user) throw new error('user not found ')
}

export default {signup, signin, userLogged}