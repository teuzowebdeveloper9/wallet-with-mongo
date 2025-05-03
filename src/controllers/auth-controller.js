import authService from "../service/auth-service.js";

export async function signup(req,res){
    const body = req.body;

  const resService = await authService.signup(body)

  res.send( resService)
}

export default {signup}