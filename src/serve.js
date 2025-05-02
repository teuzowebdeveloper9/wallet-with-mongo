import express from 'express'

const app = express()

app.get('/home', (req,res) =>{
    res.send('oi home')
})

app.listen(3000, () =>{
    console.log('server running on port 3000')
})
