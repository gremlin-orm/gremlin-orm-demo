const g = require('./../../db');

const Person = g.define('person', {
  name: {
    type: g.STRING,
    required: true
  },
  cohort: {
    type: g.NUMBER
  },
  status: {
    type: g.STRING,
  }
});

module.exports = Person;
