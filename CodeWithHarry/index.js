require('./database.js')
const express = require('express')
const path=require('path')
const app = express()
const port = 5000

//  app.use(express.static(path.join(__dirname, 'static')))
//app.use(express.static(path.join(__dirname,'public')))
//port: http://localhost:5000/hello.html 
//app.use('/static',express.static(path.join(__dirname, 'static')))
//port would be http://localhost:5000/static/hello.html

const blogRouter=require("./routes/blog")
app.use('/blog',blogRouter)
app.use('/user',require(path.join(__dirname,'./routes/user')))
 app.use('/public',require(path.join(__dirname,"./routes/public")))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})