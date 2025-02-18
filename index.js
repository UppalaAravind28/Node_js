const http = require("http");
const server = http.createServer((req, res) => {
  res.write("Hello darling");
  res.end(" Welcome to the my SERVER");
});
server.listen("3000", () => {
  console.log("Happy to see u again....THIS IS UR SERVER RESPONSE");
});