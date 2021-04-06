const dotenv = require('dotenv');
const express = require('express');
const app = express();

dotenv.config({ path: './config.env' }); //secure our username and password
require('./db/conn');

app.use(express.json());
// link router files
app.use(require('./router/auth'));
// const User = require('./model/userSchema');

const PORT = process.env.PORT;

// middleware
const middleware = (req, res, next) => {
  console.log('hello midleware');
  next();
};
// middleware();

// app.get('/', (req, res) => {
//   res.send(`Hello world from the srver`);
// });
app.get('/about', middleware, (req, res) => {
  res.send(`Hello world about`);
});
app.get('/signin', (req, res) => {
  res.send(`Hello world signin`);
});
app.get('/signup', (req, res) => {
  res.send(`Hello world signup`);
});
app.get('/contact', (req, res) => {
  res.send(`Hello world contact`);
});

app.listen(PORT, () => {
  console.log(`server start ${PORT}`);
});
