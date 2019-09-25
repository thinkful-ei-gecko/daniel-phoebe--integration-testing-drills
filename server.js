<<<<<<< HEAD
const count= require('./count');

count.listen(8000, () => {
  console.log('Server started port 8000');
=======
'use strict';
const app = require('./app');
const morgan = require('./app');

app.use(morgan('dev'));

app.listen(8000, () => {
  console.log('Server started on PORT 8000');
>>>>>>> c4c64ff1ffad86b79e26c9a0526164ef35dd357e
});