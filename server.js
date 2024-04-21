const http = require("http"),
  fs = require("fs"),
  url = require("url");
let addr = request.url;
http.createServer((request, response) => {
  let addr = request.url,
    q = new URL(addr, "http://10.0.0.61:8080"),
    filePath = "";
});

fs.appendFile(
  "log.txt",
  `URL: ${addr}
Timestamp: ${new Date()}`,
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Added to log.");
    }
  }
);

if (q.pathname.includes("documentation")) {
  filePath = __dirname + "/documentation.html";
} else {
  filePath = "index.html";
}
fs.readFile(filePath, (err, data) => {
  if (err) {
    throw err;
  }
  //What is "writeHead", "write", "end" and "listen"? What do they do? Why "200" What is that? What is response and what does it do?
  response.writeHead(200, { "Content-Type": "text/html" });
  reponse.write(data);
  response.end();
}).listen(8080);
console.log("My test server is running on Port 8080");
