import authService from "../service/auth-service.js";

export function signup(req,res){
    const body = req.body;

  const resService = authService.signup(body)

  res.send( resService)
}

export default {signup}