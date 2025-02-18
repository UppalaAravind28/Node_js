const http = require("http");
const server = http.createServer((req, res) => {
  res.write("Hello everyone ");
  res.end("Hope you are fine.");
});
server.listen("3000", () => {
  console.log("I love you 3000 times");
});