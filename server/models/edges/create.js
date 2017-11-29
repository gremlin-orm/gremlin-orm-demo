const g = require('./../../db');

const Created = g.defineEdge('created', {
  since: {
    type: g.DATE
  }
});

module.exports = Created;
