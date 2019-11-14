const express = require('express');
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');

// SETTINGS EXPRESS
app.set('port', process.env.PORT || 3000);

// MIDDLEWARES
app.use(morgan('dev'));
app.use(bodyParser.json());

// ROUTES
require('./routes/loginRoutes')(app);
require('./routes/hotelRoutes')(app);
require('./routes/roomRoutes')(app);
require('./routes/reservationRoutes')(app);

app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
});