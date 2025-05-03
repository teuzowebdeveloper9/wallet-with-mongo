import bcrypt from 'bcrypt'
import authRepository from '../repository/auth-repository.js';

function signup(body){
  const hashPassword = bcrypt.hashSync(body.password, 10);

  return authRepository.create({...body, password: hashPassword})
  
}

export default {signup}