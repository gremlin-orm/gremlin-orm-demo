const g = require('./../../db');

const Software = g.define('software', {
  name: {
    type: g.STRING
  },
  type: {
    type: g.STRING
  }
});

module.exports = Software;
