const app = require('express')();

app.get('/', (req, res) => res.send('DC is online!'));

module.exports = () => {
  app.listen(3000);
}