import express, { json } from 'express'
import { authRouter } from './routes/auth-routes.js'

const app = express()
app.use(json())

app.use(authRouter)

app.listen(3000, () =>{
    console.log('server running on port 3000')
})
