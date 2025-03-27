const express = require("express")
const app = express()
const port = 3000

app.get('/atividade',(req,resp)=>{
    resp.send("Atividade do corintians, Marcos Martins")
})

app.listen(port,()=>{
    console.log(`servidor na portinha: ${port}`)
})
