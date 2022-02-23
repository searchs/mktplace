const port = 3000;
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/user');

dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const productRoute = require('./routes/product');
const categoryRoute = require('./routes/category');
const ownerRoute = require('./routes/owner');

app.use('/api', productRoute);
app.use('/api', categoryRoute);
app.use('/api', ownerRoute);

const { MongoClient } = require('mongodb');
const client = new MongoClient(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
client.connect((err) => {
  const collection = client.db('test').collection('devices');
  console.log('Connection Status: ESTABLISHED');
  // perform actions on the collection object
  client.close();
});

app.get('/', (req, res) => {
  res.json({ app: 'MarketPlace', version: '0.0.2', apiLocation: '/api/' });
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`App running on http://localhost:${port}`);
  }
});
