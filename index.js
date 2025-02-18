const http = require("http");
const server = http.createServer((req, res) => {
  res.write("Athiga aaasapade magaadu.. athiga aavesapade aadadhi  ");
  res.end("Sukhapadinatu charithra lo ledhu..   @NARASIMHA..");
});
server.listen("3000", () => {
  console.log("I love you 3000 times");
});