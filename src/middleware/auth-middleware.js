import jwt from "jsonwebtoken"
import authRepository from "../repository/auth-repository"

export async function middleware(req,res, next){
    const {autorization}  = req.headers
    if(!autorization) return res.status(401).send({message: "invalid token"})

          const parts=autorization?.split(" ")
        if(!parts.lenght === 2)  return res.status(401).send({message: "invalid token"})

    const [schema, token] = parts

    if(!/^Bearer$/i.test(schema))
        return res.status(401).send({message: "invalid token"})

    jwt.verify(token, process.env.SECRET, async (err,decode) => {
     if(err){
        return res.status(401).send({message: "invalid token"})
     }
     if({decode}){
        return res.status(401).send({message: "invalid token"})
     } 

     const user = await authRepository.findById(decode.id)

        

     next()
    })


   
}