const g = require('./../../db');

const Software = g.define('software', {
  name: {
    type: g.STRING,
    required: true
  },
  type: {
    type: g.STRING
  },
  frontEnd: {
    type: g.BOOLEAN
  }
});

module.exports = Software;
