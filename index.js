const express = require('express');
const app = express();
require('dotenv').config();

app.get('/', (req, res) => {
  res.send('Hello World, this is Samuel!');
});

app.listen(process.env.PORT, () => console.log(`Server listenning on port ${process.env.PORT}...`));