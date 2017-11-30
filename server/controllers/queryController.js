const g = require('./../db');
const Person = require('./../models/vertices/person');
const Software = require('./../models/vertices/software');
const Created = require('./../models/edges/create');
const CoCreated = require('./../models/edges/cocreate');


const runQuery = (req, res) => {
  const query = req.body.query;

  const display = (err, result) => {
    if (err) return res.status(500).send(err);
    const toSend = [result];
    Person.query('g.V()', (err, result) => {
      if (err) return res.status(500).send(err);
      toSend.push(result);
      Created.query('g.E()', (err, result) => {
        if (err) return res.status(500).send(err);
        toSend.push(result);
        res.status(200).send(toSend);
      });
    });
  }

  eval(query);
}


module.exports = { runQuery };
