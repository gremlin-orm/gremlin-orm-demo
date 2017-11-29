const gremlinOrm = require('gremlin-orm');
let g = new gremlinOrm('neo4j');

module.exports = g;
