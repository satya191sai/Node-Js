
const requist=require('./Registration')
const os = require('os');
const fs=require('fs');
const express=require('express')
function sayhellow(){
    console.log("this is first code");
    
}
sayhellow()
const IsExisting=requist.CheckforUser()
if (IsExisting == true){
    console.log("User Is Already Exist");
    
}else{
    requist.RegisterforUser()
}
console.log(os.freemem());
console.log(os.hostname());
// fs.writeFile('./example.txt','File Data Is Not Inserted',(err)=>{
//     if(err){
//      return  console.log("Error Occured");
        
//     }
//     console.log('File Created');
    
// })

// fs.readFile('./example.txt','utf8',(err,data)=>{
//     if(err){

//         console.log("error is there");
        
//     }
//     console.log("data in file:",data);
    
// })
 
const ex=express()

ex.get('/',(req,res)=>{
    
    console.log(req);
    res.send("running server with response")
})

ex.get('/demo',(req,res)=>{
    
    console.log(req);
    res.send("own server to run")
})

ex.post('/say',(req,res)=>{
    console.log('route module');
    res.send("this is say route")
    
})
ex.delete('/del',(req,res)=>{
    res.send("this is delete route")
})

ex.listen(3000,()=>{
    console.log("server is running");
    
})