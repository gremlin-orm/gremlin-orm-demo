const g = require('./../../db');

const Person = g.define('person', {
  name: {
    type: g.STRING,
    required: true
  },
  age: {
    type: g.NUMBER
  },
  dob: {
    type: g.DATE
  },
  educated: {
    type: g.BOOLEAN
  }
});

module.exports = Person;
