const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let Home = {
  address: "abcxx123",
  pincode: "560037",
  state: "Karnataka"
};
app.get('/home', (req, res) => {
  res.json(Home);
});
app.post('/home', (req, res) => {
  Home = req.body;
  res.json({ message: 'Home data created successfully' });
});
app.put('/home', (req, res) => {
  Home = { ...Home, ...req.body };
  res.json({ message: 'Home data updated successfully' });
});
app.delete('/home', (req, res) => {
  Home = {};
  res.json({ message: 'Home data deleted successfully' });
});
const port = 1000; 
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

