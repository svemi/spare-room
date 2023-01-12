require('dotenv').config();
const path = require('path');
const express = require('express');
const axios = require('axios');
const router = require('./routes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => { console.log(`listening on ${PORT}`); });