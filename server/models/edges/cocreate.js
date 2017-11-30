const g = require('./../../db');

const CoCreated = g.defineEdge('cocreated', {
  since: {
    type: g.DATE
  },
  software: {
    type: g.STRING
  }
});

module.exports = CoCreated;
