const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoute = require('./routes/userRoute');
const eventRoute = require('./routes/eventRoute');
const assocUserEventRoute = require('./routes/assocUserEventRoute');
const app = express();
const port = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/eventDB', {
  useNewUrlParser: true,
  //useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
   console.log('Connected to database:', db.name);
});


app.use('/', userRoute);
app.use('/', eventRoute);
app.use('/', assocUserEventRoute);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
