const express = require('express')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { Student } = require('./models');
const { Batch } = require('./models');


let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const PORT = process.env.PORT || 3030;

app.get('/', (req, res) => {
  res.sendFile('./src/App.js');
});

app.get('/students', (req, res, next) => {
  Student.find()
    // Send the data in JSON format
    .then((students) => res.json(students));
    // Forward any errors to error handler
    .catch((error) => next(error));
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
