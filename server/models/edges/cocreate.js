const g = require('./../../db');

const CoCreated = g.defineEdge('cocreated', {
  since: {
    type: g.DATE
  }
});

module.exports = CoCreated;
