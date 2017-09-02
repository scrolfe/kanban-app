if(process.env.NODE_ENV === 'production') {
  module.exports = require('./Provider.prod').default;
}
else {
  module.exports = require('./Provider.dev').default;
}
