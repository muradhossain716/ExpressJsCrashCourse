const express = require('express')
const path=require('path')
const app = express()
const port = 5000

 app.use('/static', express.static(path.join(__dirname, 'public')))
//port would be http://localhost:5000/static/hello.html
//app.use(express.static(path.join(__dirname,'public')))
//port: http://localhost:5000/hello.html 

app.get('/', (req, res) => {
  res.send('Hello boys!')
})
app.get('/about', (req, res) => {
  res.send('Hello World!')
})
app.get('/index',(req,res)=>{
   res.sendFile(path.join(__dirname,'index.html'))
  // res.json({'start':'end'})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})