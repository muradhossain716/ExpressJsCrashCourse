const express = require('express')
const path=require('path')
const router=express.Router();
router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'../templates/index.html'))
    console.log(__dirname)
})
// app.get('/', (req, res) => {
//         res.send('Hello boys!')
//     })
module.exports=router;