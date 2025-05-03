import bcrypt from 'bcrypt'
import authRepository from '../repository/auth-repository.js';

async function signup(body){
  const hashPassword = bcrypt.hashSync(body.password, 10);

  const userExist = await authRepository.findByEmail(body.email)
  if(userExist) throw new Error('user already exists ! ');

  

  return await authRepository.create({...body, password: hashPassword})
  
}

export default {signup}