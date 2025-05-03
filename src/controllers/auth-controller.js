import authService from "../service/auth-service.js";

export async function signup(req,res){
    const body = req.body;


    try{
        const resService = await authService.signup(body)
        res.status(201).send( resService)
    }catch(err){
        res.status(409).send(err.message);
    }
}
export async function signin(req,res){
  const body = req.body

  try{
    const token = await authService.signin(body)
    return res.send(token)
  }catch(err){
    res.status(401).send(err.message);
  }
}

export default {signup, signin}