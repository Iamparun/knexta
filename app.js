//1
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome home ');
  }
});

server.listen(500, () => {
  console.log('Server is running on http://localhost:500');
});
//2
let Home = {
  address: "abcxx123",
  pincode: "560037",
  state: "Karnataka"
};
Home.address = "karaikudi";
Home.pincode = "630002";
Home.state = "Tamil nadu"
console.log(Home);

