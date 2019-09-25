'use strict';
const app = require('./app');
const morgan = require('./app');

app.use(morgan('dev'));

app.listen(8000, () => {
  console.log('Server started on PORT 8000');
});