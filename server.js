const count= require('./count');

count.listen(8000, () => {
  console.log('Server started port 8000');
});