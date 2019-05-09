const express = require('express');
// const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
// app.use(bodyParser.json());
app.use(express.json);

// const { SERVER_PORT } = process.env
const SERVER_PORT = 5000

// app.get('/api/test', (req, res) => {
//   res.send('It worked')
// })

app.listen(SERVER_PORT, () => {
  console.log(`Server is listening on port: ${SERVER_PORT}`);
})