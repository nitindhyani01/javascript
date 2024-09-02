const fs=require("fs");
//sync...
//fs.writeFileSync('./test.txt','Nitin Here');

//Async
//fs.writeFile("./test.txt","Hello world Async",(err)=>{});

//readfile
//const result = fs.readFileSync("./contact.txt","utf-8")
//console.log(result);

//read
// fs.readFile("./contact.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("Error",err);
//     }
//     else{
//         console.log(result);
//     }
// });

fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString());