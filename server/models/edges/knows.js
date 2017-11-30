const g = require('./../../db');

const Knows = g.defineEdge('knows', {
  how: {
    type: g.STRING,
    required: true
  }
});

module.exports = Knows;
