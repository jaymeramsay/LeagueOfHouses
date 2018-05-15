const express = require('express');
// const methodOverride = require('method-override')
const PORT = process.env.PORT || 7070;
const app = express();

const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
// const session = require('cookie-session');

const bands = require('./routes/routes.bands');
const houses = require('./routes/routes.houses');
const users = require('./routes/routes.users');


// http method middleware for PATCH and DELETE
// app.use(methodOverride('_method'));

// forms handling
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

// routes
app.use('/bands', bands);
app.use('/houses', houses)
app.use('/users', users);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});




module.exports = app;
