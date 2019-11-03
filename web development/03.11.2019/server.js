const http = require('http');

const port = 9999;
const host = 'localhost';

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('content-type','text/html');

    res.end(
      `<html>
      <head></head>
      <body>
      <h1>This is a Page</h1>
      </body>
      </html>
      `
    )

    // const filePath = path.resolve('./index.html')
});

server.listen(port,host,()=>{
  console.log('server is up and running')
})