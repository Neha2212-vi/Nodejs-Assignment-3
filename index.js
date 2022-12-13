const http = require("http");
const fs = require("fs");


let fileData = "";
fs.readFile("index.html", { encoding: "utf-8" }, (err, data) => {
  if(err){
   console.log(err);
  }else{
    fileData = data;
    console.log(data);
  }
});

let server = http.createServer((req, res)=>{
  res.writeHead(200, { "content-type": "text/html" });
  res.write(`${fileData}`);
  res.end();
})
server.listen(5000, console.log("Server is up at port 5000"))